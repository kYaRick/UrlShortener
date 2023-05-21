import { Box, Button, Flex, Heading, Stack, Text, useColorMode, VStack } from "@chakra-ui/react";
import React from "react";

import { useViewController } from "../ViewController";
import { DownloadIcon } from "./icons/download";
import { UploadIcon } from "./icons/upload";

export const Hero: React.FC = () => {
  const [, setView] = useViewController();

  const { colorMode } = useColorMode();

  return (
    <Flex align={"center"} justify={"center"} flex={1}>
      <Box p={8}>
        <VStack spacing={4}>
          <Heading as={"h1"} fontSize={"6xl"} color={"violet.600"} fontWeight={"bold"} lineHeight={"none"}>
            URL SHORTENER
          </Heading>
          <Heading as={"h2"} fontSize={"3xl"} fontWeight={"normal"}>
            send files to other devices,{" "}
            <Text as={"span"} color={"violet.400"} fontWeight={"medium"}>
              lightning fast.
            </Text>
          </Heading>
          <Stack direction={{ base: "column", md: "row" }} pt={6} w={"full"} justify={"center"}>
            <Button
              size={"lg"}
              leftIcon={
                <Box w={5} mr={2}>
                  <UploadIcon sx={{ strokeWidth: 2 }} />
                </Box>
              }
              colorScheme={{ light: "violet", dark: "purple" }[colorMode]}
              shadow={"md"}
              onClick={() => setView({ slug: "upload" })}
            >
              Share new file
            </Button>
            <Button
              size={"lg"}
              leftIcon={
                <Box w={5} mr={2}>
                  <DownloadIcon sx={{ strokeWidth: 2 }} />
                </Box>
              }
              colorScheme={{ light: "violet", dark: "purple" }[colorMode]}
              shadow={"md"}
              onClick={() => setView({ slug: "download" })}
            >
              Download file
            </Button>
          </Stack>
        </VStack>
      </Box>
    </Flex>
  );
};
