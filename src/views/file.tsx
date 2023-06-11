import { useRef } from "preact/hooks";

import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import copyToClipboard from "copy-to-clipboard";
import { useAsync, useAsyncFn } from "react-use";

import { useViewController } from "../ViewController";
import AuthService from "../services/auth";
import ErrorHandlingService from "../services/error-handling";
import FileService from "../services/file";
import toast from "../util/toast";

export default function FileView({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { i18n } = useTranslation();
  const [view] = useViewController(),
    { wordCode } = view.params || {};

  const fileState = useAsync(async () => {
    if (!wordCode) return;
    try {
      return await FileService.I.getInfo(wordCode);
    } catch (e) {
      ErrorHandlingService.I.notifyUserOfError(i18n.t("file.err_load"), e);
      onClose();
    }
  }, [wordCode]);

  const [downloadFileState, downloadFileFn] = useAsyncFn(async function downloadFile(
    wordCode: string,
    filename: string
  ) {
    try {
      await FileService.I.download(wordCode, filename);
    } catch (e) {
      ErrorHandlingService.I.notifyUserOfError(i18n.t("file.err_download"), e);
    }
  });

  const { isOpen: isRemoveModalOpen, onOpen: openRemoveModal, onClose: closeRemoveModal } = useDisclosure();
  const [removeFileState, removeFileFn] = useAsyncFn(async function removeFile(wordCode: string, filename: string) {
    try {
      await FileService.I.remove(wordCode, filename);
      closeRemoveModal();
      onClose();
    } catch (e) {
      ErrorHandlingService.I.notifyUserOfError(i18n.t("file.err_removing"), e);
    }
  });

  function copyWordCode() {
    try {
      copyToClipboard(wordCode);
      toast({
        title: i18n.t("file.att_wc_copied"),
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } catch (e) {
      ErrorHandlingService.I.notifyUserOfError(i18n.t("file.att_wc_copied_unsuccess"), e);
    }
  }

  const initialRef = useRef();

  return (
    <>
      <Drawer placement={"right"} onClose={onClose} isOpen={isOpen} initialFocusRef={initialRef as any}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth={"1px"}>
            <Heading fontSize={"xl"}>{i18n.t("file.file_info")}</Heading>
          </DrawerHeader>

          <DrawerBody pt={4}>
            <Stack spacing={4}>
              <Box>
                <FormLabel htmlFor={"filename"}>{i18n.t("file.file_name")}</FormLabel>
                <Input
                  value={fileState.value?.name || ""}
                  id={"filename"}
                  variant={fileState.loading ? "filled" : "outline"}
                  placeholder={i18n.t("file.plh_load")}
                  isReadOnly
                />
              </Box>
              <Box>
                <FormLabel htmlFor={"filetype"}>{i18n.t("file.file_type")}</FormLabel>
                <Input
                  value={fileState.value?.filetype || ""}
                  id={"filetype"}
                  variant={fileState.loading ? "filled" : "outline"}
                  placeholder={i18n.t("file.plh_load")}
                  isReadOnly
                />
              </Box>
              <Box>
                <FormLabel htmlFor={"uploadDate"}>{i18n.t("file.file_date")}</FormLabel>
                <Input
                  value={fileState.value?.uploadDate.toLocaleString() || ""}
                  id={"uploadDate"}
                  variant={fileState.loading ? "filled" : "outline"}
                  placeholder={i18n.t("file.plh_load")}
                  isReadOnly
                />
              </Box>
              <Divider />
              <Box>
                <FormLabel htmlFor={"wordCode"}>{i18n.t("file.file_wc")}</FormLabel>
                <Textarea
                  ref={initialRef as any}
                  value={wordCode}
                  id={"wordCode"}
                  variant={"outline"}
                  isReadOnly
                  fontFamily={"heading"}
                  fontWeight={"medium"}
                  fontSize={"lg"}
                  focusBorderColor={"green.500"}
                />
                <Flex justify={"flex-end"} mt={2}>
                  <Button colorScheme={"green"} variant={"outline"} onClick={copyWordCode}>
                    {i18n.t("file.btn_wc_copy")}
                  </Button>
                </Flex>
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter borderTopWidth={"1px"}>
            {fileState.value?.owner === AuthService.I.userId$.value && (
              <Button
                colorScheme={"red"}
                variant={"outline"}
                mr={3}
                isLoading={removeFileState.loading}
                onClick={openRemoveModal}
              >
                {i18n.t("file.btn_remove")}
              </Button>
            )}
            <Button
              colorScheme={"green"}
              isLoading={downloadFileState.loading}
              isDisabled={!fileState.value}
              onClick={() => downloadFileFn(wordCode, fileState.value!.name)}
            >
              {i18n.t("file.btn_download")}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Modal isOpen={isRemoveModalOpen} onClose={closeRemoveModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{i18n.t("file.modal_header")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{i18n.t("file.modal_text")}</Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme={"red"}
              isLoading={removeFileState.loading}
              onClick={() => removeFileFn(wordCode, fileState.value!.name)}
            >
              {i18n.t("file.btn_remove")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
