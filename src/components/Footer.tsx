import React from "react";
import {
  HStack,
  Link,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { Members } from "./Members";

export const Footer = () => {
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
            made with ❤️ to 🇺🇦 by{" "}
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
          • Read about the project •
        </Link>
      </Stack>
    </VStack>
  );
};