import { useRef, useState } from "preact/hooks";

import {
  Button,
  FormControl,
  FormHelperText,
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
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useAsyncFn } from "react-use";

import { useViewController } from "../ViewController";
import ErrorHandlingService from "../services/error-handling";
import FileService from "../services/file";
import toast from "../util/toast";

export default function DownloadView({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { i18n } = useTranslation();
  const [, setView] = useViewController();
  const [wordCode, setWordCode] = useState<string>("");
  const [openFileState, openFileFn] = useAsyncFn(
    async function openFile(wordCode: string) 
    {
      
      openFileState.error = undefined;
      let exists;

      try
      {
        exists = await FileService.I.doesExist(wordCode);
      } 
      catch (e) 
      {
        ErrorHandlingService.I.notifyUserOfError(i18n.t("download.error_file_existance"), e);
        return;
      }

      if (exists) 
      {
        await setView({ slug: "file", params: { wordCode } });
        setWordCode("");
      } 
      else 
      {
        toast({
          title: i18n.t("download.file_doesnt_exist"),
          status: "error",
          duration: undefined,
          isClosable: true,
        });
        throw new Error();
      }
    }
  );

  const _onClose = () => {
    onClose();
    setWordCode("");
  };

  const initialRef = useRef();

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={_onClose} initialFocusRef={initialRef as any}>
        <ModalOverlay />
        <ModalContent mx={3}>
          <ModalHeader>
            <Heading fontSize={"xl"}>{i18n.t("download.btn_download_file")}</Heading>
          </ModalHeader>
          <ModalCloseButton onClick={_onClose} />
          <ModalBody>
            <form
              onSubmit={async e => {
                e.preventDefault();
                await openFileFn(wordCode);
              }}
            >
              <FormControl id={"wordCode"} isInvalid={!!openFileState.error}>
                <FormLabel>{i18n.t("download.word_code")}</FormLabel>
                <Input
                  ref={initialRef as any}
                  placeholder={i18n.t("download.unique_code")}
                  size={"lg"}
                  fontFamily={"heading"}
                  fontWeight={"medium"}
                  fontSize={"lg"}
                  value={wordCode}
                  onChange={e => {
                    openFileState.error = undefined;
                    setWordCode(e.target.value);
                  }}
                  onSubmit={() => openFileFn(wordCode)}
                />
                <FormHelperText>{i18n.t("download.add_info")}</FormHelperText>
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme={"violet"}
              mr={3}
              isDisabled={wordCode.split(" ").length !== 3}
              onClick={() => openFileFn(wordCode)}
            >
              {i18n.t("download.btn_open_file")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
