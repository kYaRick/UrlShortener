import React from "react";
import {
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Members } from "./Members";

export const Footer = () => {
  const { i18n } = useTranslation();

  return (
    <VStack>
      <Stack
        direction={{ base: "column", sm: "row" }}
        px={8}
        align={"center"}
        justify={"center"}
        flexShrink={0}
        spacing={2}
      >
        <HStack spacing={1}>
          <Text>
            {i18n.t("footer.signature")}
            <Members />
          </Text>
        </HStack>

      </Stack>
      <Stack paddingBottom={5}>
        <Link
          href={"https://github.com/kYaRick/UrlShortener"}
          isExternal
          opacity={0.8}
          _hover={{ opacity: 1, textDecoration: "underline" }}>
          • {i18n.t("footer.more")} •
        </Link>
      </Stack>
    </VStack>
  );
};