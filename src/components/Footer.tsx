import React from "react";
import {
  Box,
  Button,
  HStack,
  Link,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";

import { Members } from "./Members";

export const Footer = () => {
  return (
    <>
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
          <Text>
            made with ❤️ to 🇺🇦 by{" "}
              <Members/>
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
    </>
  );
};