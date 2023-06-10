import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";

import { useViewController } from "../ViewController";

export const HostedFileItem: React.FC<{ wordCode: string; filename: string }> = ({ wordCode, filename }) => {
  const { i18n } = useTranslation();
  const [, setView] = useViewController();

  return (
    <Stack spacing={4} borderWidth={"1px"} borderRadius={"md"} p={4}>
      <Box>
        <Text fontWeight={"medium"} fontSize={"md"}>
          {i18n.t("host_file.file")}
        </Text>
        <Input value={filename} isReadOnly variant={"flushed"} />
      </Box>
      <Button colorScheme={"violet"} onClick={() => setView({ slug: "file", params: { wordCode } })}>
        {i18n.t("host_file.info")}
      </Button>
    </Stack>
  );
};
