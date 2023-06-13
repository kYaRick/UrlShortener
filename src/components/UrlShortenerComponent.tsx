import React, { useState } from "react";
import { Box, Button, IconButton, Flex, Heading, Stack, Text, useColorMode, VStack, Input, InputGroup, InputLeftAddon, PopoverContent, PopoverTrigger, PopoverHeader, PopoverArrow, PopoverCloseButton, PopoverBody, Popover } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { DeleteIcon, LinkIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { nanoid } from 'nanoid';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import firebaseConfig from "../util/firebase-config";

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const UrlShortenerField = () => {
  const { i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [isShorten, setIsShorten] = useState(false);
  const [shortenedLink, setShortenLink] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");

  const shortenLink = (url) => {
    const uniqueId = nanoid(8);
    const shortenedUrl = `http://localhost:5173/UrlShortener/${uniqueId}`;

    // Зберігаємо посилання в Firestore
    db.collection("shortenedLinks").add({
      originalUrl: url,
      shortenedUrl: shortenedUrl,
    })
      .then((docRef) => {
        console.log("Посилання успішно збережено в Firestore:", docRef.id);
      })
      .catch((error) => {
        console.error("Помилка при збереженні посилання в Firestore:", error);
      });

    return shortenedUrl;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const shortenedUrl = shortenLink(originalUrl);

    if (shortenedUrl) {
      setIsShorten(true);
      setShortenLink(shortenedUrl);
      console.log(`Shortened URL: ${shortenedUrl}`);
    }
  };

  const resetHandler = () => {
    setOriginalUrl("");
    setShortenLink("");
    setIsShorten(false);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Popover>
      <PopoverTrigger
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        style={{ display: "inline-block" }}
      >
        <form onSubmit={submitHandler}>
          <Stack direction={{ base: "column", md: "row" }} pt={6} w={"xl"} justify={"center"}>
            <IconButton
              aria-label='Delete link'
              colorScheme={"violet"}
              onClick={resetHandler}
            >
              <DeleteIcon />
            </IconButton>

            <InputGroup
              shadow={"sm"}
              borderColor={"violet.400"}
            >
              <InputLeftAddon children={<LinkIcon />} />
              <Input
                id="url"
                focusBorderColor={"violet.400"}
                placeholder={i18n.t("hero.url_textbox")}
                type="url"
                value={originalUrl}
                onChange={(e) => setOriginalUrl(e.target.value)}
              />
            </InputGroup>
            <IconButton
              aria-label='Short link'
              colorScheme={"violet"}
              type="submit"
            >
              <ArrowForwardIcon />
            </IconButton>
          </Stack>
        </form>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Shortened URL</PopoverHeader>
        <PopoverBody>
          {isShorten ? (
            <>
              <Text>{shortenedLink}</Text>
              <Button onClick={() => navigator.clipboard.writeText(shortenedLink)}>
                Copy
              </Button>
            </>
          ) : (
            <Text>No URL shortened yet.</Text>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};