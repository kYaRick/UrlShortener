import React from "react";

import {
  Avatar,
  Link,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react'

import { useTranslation } from "react-i18next";
import kya_ph from '../assets/authors/kYaRick.jpg'
import anya_ph from '../assets/authors/Anya.jpg'
import misha_ph from '../assets/authors/Misha.jpg'


export const Members = () => {
  const { i18n } = useTranslation("members");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const OverlayOne = () => (
    <ModalOverlay
      bg="none"
      backdropFilter='blur(20px)'
    />
  )
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  return (
    <>
      <Link onClick={() => {
        setOverlay(<OverlayOne />)
        onOpen()
      }} isExternal>
        <Text as={"span"} fontWeight={"bold"}>
          {i18n.t("footer.support")}
        </Text>
      </Link>

      <Modal size={"3xl"} scrollBehavior="inside" isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{i18n.t("members.window_title")}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

            <VStack>

              <Stack shadow={"md"} padding={"5"}>
                <HStack>
                  <Avatar name="Anna Babiak" src={anya_ph} size="2xl" />
                  <VStack align={"left"}>
                    <Text as={"b"} color={"violet.600"} fontSize={"x-large"}>{i18n.t("members.anya_title")}</Text>
                    <Text as={"u"} opacity={"40%"}>{i18n.t("members.position")}: Front End Developer, QA/QC Manual</Text>
                  </VStack>
                </HStack>
                <Text>{i18n.t("members.anya_description")}</Text>
              </Stack>

              <Stack shadow={"md"} padding={"5"}>
                <HStack>
                  <Avatar name="Svyatoslav Bohatko" size="2xl" />
                  <VStack align={"left"}>
                    <Text as={"b"} color={"violet.600"} fontSize={"x-large"}>{i18n.t("members.svyatoslav_title")}</Text>
                    <Text as={"u"} opacity={"40%"}>{i18n.t("members.position")}: Full Stack React Developer, QA/QC Automation</Text>
                  </VStack>
                </HStack>
                <Text>{i18n.t("members.svyatoslav_description")}</Text>
              </Stack>

              <Stack shadow={"md"} padding={"5"}>
                <HStack>
                  <Avatar name="Mykhailo Yuras" src={misha_ph} size="2xl" />
                  <VStack align={"left"}>
                    <Text as={"b"} color={"violet.600"} fontSize={"x-large"}>{i18n.t("members.mykhailo_title")}</Text>
                    <Text as={"u"} opacity={"40%"}>{i18n.t("members.position")}: Pr. Designer and Content Manager</Text>
                  </VStack>
                </HStack>
                <Text>{i18n.t("members.mykhailo_description")}</Text>
              </Stack>
              
              <Stack shadow={"md"} padding={"5"}>
                <HStack >
                  <Avatar name="Yaroslav Kyliushyk" src={kya_ph} size="2xl" />
                  <VStack align={"left"}>
                    <Text as={"b"} color={"violet.600"} fontSize={"x-large"}>{i18n.t("members.yaroslav_title")}</Text>
                    <Text as={"u"} opacity={"40%"}>{i18n.t("members.position")}: Pr.Lead, Full Stack Developer, DevOps, QA/QC Engineer</Text>
                  </VStack>
                </HStack>
                <Text>{i18n.t("members.yaroslav_description")}</Text>
              </Stack>
            </VStack>
          </ModalBody>

          <ModalFooter>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};