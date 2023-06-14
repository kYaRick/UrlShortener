import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowForwardIcon, CopyIcon, DeleteIcon, LinkIcon } from '@chakra-ui/icons';
import { nanoid } from 'nanoid';
import firebase from "firebase/compat/app";
import firebaseConfig from "../util/firebase-config";
import "firebase/compat/firestore";

import 
{ 
  useToast,
  IconButton, 
  Stack, 
  Text, 
  Input, 
  InputGroup, 
  InputLeftAddon, 
  PopoverContent, 
  PopoverTrigger, 
  PopoverBody, 
  Popover, 
  HStack
} from "@chakra-ui/react";

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export const UrlShortenerField = () => {
  const host:string = 'http://localhost:5173/UrlShortener/';
  const { i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [isShorten, setIsShorten] = useState(false);
  const [shortenedLink, setShortenLink] = useState("");
  const [firebaseLink, setFirebaseLink] = useState("");
  const [originalUrl, setOriginalUrl] = useState("");
  
  const toast = useToast();

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(firebaseLink);
      toast({
        title: i18n.t("url_shortener_cnt.tost_success"),
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: i18n.t("url_shortener_cnt.tost_fail"),
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const submitHandler = async (e) => 
  {
    e.preventDefault();
    const shortenedUrl = await shortenLink(originalUrl);

    if (shortenedUrl) {
      setIsShorten(true);
      setShortenLink(shortenedUrl);
      console.log(`[kYaDebug] Shortened URL: ${shortenedUrl}`);
    }
  };

  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const resetHandler = () => 
  {
    setOriginalUrl("");
    setShortenLink("");
    setIsShorten(false);
  };

  useEffect(() => {
    console.log(`[kYaDebug] Firebase link was uploaded: ${firebaseLink}`);
  }, [firebaseLink]);

  const shortenLink = async (url:string) => {
    const uniqueId:string = nanoid(8);
    const shortenedUrl:string = `${host}${uniqueId}`;

    let result:string = "";

    try {
      const docRef = await db.collection("shortenedLinks").add({
        originalUrl: url,
        shortenedUrl: shortenedUrl,
      });

      setFirebaseLink(`${host}${docRef.id}`);
      
      result = shortenedUrl;
    } 
    catch (error) 
    {
      console.error(`[kYaDebug] Firebase link was uploaded: ${error}`);
      result = "";
    }
    finally
    {
      return result;
    }
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
        <PopoverBody>
          {
            isShorten ?
              (
                <HStack>
                  <Text>
                    {
                      firebaseLink
                    }
                  </Text>
                  <IconButton
                    aria-label={i18n.t("url_shortener_cnt.btn_text")}
                    colorScheme={"violet"}
                    onClick={handleCopyClick}
                  >
                    <CopyIcon />
                  </IconButton>
                </HStack>
              )
              :
              (
                <Text>
                  {i18n.t("url_shortener_cnt.window_title")}
                  <br />
                  {i18n.t("url_shortener_cnt.no_url_text")}
                </Text>
              )
          }
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};