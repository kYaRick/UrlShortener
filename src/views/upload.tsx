import { lazy, Suspense } from "preact/compat";
import { useState } from "preact/hooks";
import {
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { registerPlugin } from "filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useAsyncFn } from "react-use";

import { useViewController } from "../ViewController";
import ErrorHandlingService from "../services/error-handling";
import FileService from "../services/file";
import toast from "../util/toast";

const FilePond = lazy(async () => (await import("react-filepond")).FilePond);
registerPlugin(FilePondPluginImagePreview);

export default function UploadView({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { i18n } = useTranslation();
  const [, setView] = useViewController();
  const [files, setFiles] = useState<File[]>([]);

  const _onClose = () => {
    onClose();
    setFiles([]);
  };

  const [uploadFileState, uploadFileFn] = useAsyncFn(async function uploadFile(file: File) {
    // reject files >20MB
    if ((file.size || 0) > 20 * 1024 * 1024) {
      toast({
        title: i18n.t("upload.att_size"),
        status: "error",
        isClosable: true,
      });
      return;
    }

    try {
      const wordCode = await FileService.I.upload(file);
      toast({
        title: i18n.t("upload.att_uploaded"),
        description: i18n.t("upload.att_uploaded_desc"),
        status: "success",
        isClosable: true,
      });
      setView({ slug: "file", params: { wordCode } });
      setFiles([]);
    } catch (e) {
      ErrorHandlingService.I.notifyUserOfError(i18n.t("upload.err_uploading"), e);
    }
  });

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={_onClose}>
        <ModalOverlay />
        <ModalContent mx={3}>
          <ModalHeader>
            <Heading fontSize={"xl"}>{i18n.t("upload.window_title")}</Heading>
          </ModalHeader>
          <ModalCloseButton onClick={_onClose} />
          <ModalBody>
            {/* @ts-ignore */}
            <Suspense fallback={<></>}>
              <FilePond
                files={files}
                allowMultiple={false}
                maxFiles={1}
                lable={""}
                labelIdle={i18n.t("upload.att_drag_drop_file")}
                onupdatefiles={fileItems => {
                  const file = fileItems[0]?.file;
                  setFiles([file].filter(Boolean));
                }}
              />
            </Suspense>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme={"violet"}
              isDisabled={files.length === 0}
              isLoading={uploadFileState.loading}
              onClick={() => uploadFileFn(files[0])}
            >
              {i18n.t("upload.btn_upload")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
