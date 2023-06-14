import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react";

import { useTranslation } from "react-i18next";
import { UrlShortenerField } from './UrlShortenerComponent';

import { useViewController } from "../ViewController";
import { DownloadIcon } from "./icons/download";
import { UploadIcon } from "./icons/upload";

export const Hero: React.FC = () => {
  const { i18n } = useTranslation();
  const [, setView] = useViewController();
  const { colorMode } = useColorMode();

  const mainBody = <Flex align={"center"} justify={"center"} flex={1}>
    <Box p={8}>
      <VStack spacing={4}>

        <Heading
          as={"h2"}
          fontSize={"l"}
          fontWeight={"normal"}
          opacity={"10%"}
          style={{ filter: "blur(1px)" }}>
            {i18n.t("hero.mottos.pre_m1")}
        </Heading>

        <Heading
          as={"h2"}
          fontSize={"xl"}
          fontWeight={"normal"}
          opacity={"20%"}
          style={{ filter: "blur(1.5px)" }}>
          {i18n.t("hero.mottos.pre_m2")}
        </Heading>

        <Heading
          paddingBottom={"5"}
          as={"h2"}
          fontSize={"3xl"}
          fontWeight={"normal"}
          opacity={"30%"}
          style={{ filter: "blur(2px)" }}>
          {i18n.t("hero.mottos.pre_m3")}
        </Heading>

        <Heading
          as={"h1"}
          fontSize={"7xl"}
          color={"violet.600"}
          fontWeight={"bold"}
          lineHeight={"none"}>
          URL SHORTENER
        </Heading>
        <Heading as={"h2"} fontSize={"3xl"} fontWeight={"normal"} textAlign={"center"}>
          <Text as={"span"} color={"blue.400"} fontWeight={"medium"}>
            {i18n.t("hero.signatures.simplify")} 
            🚀
          </Text>
            {" "}
            {i18n.t("hero.signatures.share")}
            {" "}
          <Text as={"span"} color={"yellow.400"} fontWeight={"medium"}>
            🛡️ 
            {i18n.t("hero.signatures.secure")}
          </Text>
        </Heading>
        
        <UrlShortenerField/>

        <Stack direction={{ base: "column", md: "row" }} pt={6} w={"full"} justify={"center"}>
          <Button
            size={"lg"}
            leftIcon={<Box w={5} mr={2}>
              <UploadIcon sx={{ strokeWidth: 2 }} />
            </Box>}
            colorScheme={{ light: "violet", dark: "purple" }[colorMode]}
            shadow={"md"}
            onClick={() => setView({ slug: "upload" })}>
            {i18n.t("hero.buttons.btn_share")}
          </Button>
          <Button
            size={"lg"}
            leftIcon={<Box w={5} mr={2}>
              <DownloadIcon sx={{ strokeWidth: 2 }} />
            </Box>}
            colorScheme={{ light: "violet", dark: "purple" }[colorMode]}
            shadow={"md"}
            onClick={() => setView({ slug: "download" })}>
            {i18n.t("hero.buttons.btn_download")}
          </Button>
        </Stack>

        <Heading
          paddingTop={"5"}
          as={"h2"}
          fontSize={"3xl"}
          fontWeight={"normal"}
          opacity={"30%"}
          style={{ filter: "blur(2px)" }}>
          {i18n.t("hero.mottos.pos_m1")}
        </Heading>

        <Heading
          as={"h2"}
          fontSize={"xl"}
          fontWeight={"normal"}
          opacity={"20%"}
          style={{ filter: "blur(1.5px)" }}>
          {i18n.t("hero.mottos.pos_m2")}
        </Heading>

        <Heading
          as={"h2"}
          fontSize={"l"}
          fontWeight={"normal"}
          opacity={"10%"}
          style={{ filter: "blur(1px)" }}>
          {i18n.t("hero.mottos.pos_m3")}
        </Heading>

      </VStack>
    </Box>
  </Flex>;

  return (mainBody);
};
