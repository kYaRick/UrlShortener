import { Box, HStack, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";

import { HeartIcon } from "./icons/heart";

export const Footer = () => (
  <Stack
    direction={{ base: "column", sm: "row" }}
    h={20}
    w={"full"}
    px={8}
    align={"center"}
    justify={"center"}
    flexShrink={0}
    spacing={2}
  >
    <HStack spacing={1}>
      <Text>made with</Text>
      <Box w={5} px={0.5} color={"rose.600"}>
        <HeartIcon />
      </Box>
      <Text>
        by{" "}
        <Link href={"#"} isExternal>
          <Text as={"span"} fontWeight={"bold"}>
            URLSH TEAM
          </Text>
        </Link>
      </Text>
    </HStack>
    <Text display={{ base: "none", sm: "block" }} opacity={0.8}>
      •
    </Text>
    <Link
      href={"#"}
      isExternal
      opacity={0.8}
      _hover={{ opacity: 1, textDecoration: "underline" }}
    >
      Read about the project
    </Link>
  </Stack>
);
