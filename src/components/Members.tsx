import React from "react";
import {
  Avatar,
  Button,
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
  Heading,
  Image,
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
          <ModalHeader>Team members</ModalHeader>
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
                    <Text as={"b"} color={"violet.600"} fontSize={"x-large"}>Svyatoslav Bohatko</Text>
                    <Text as={"u"} opacity={"40%"}>Position: Full Stack React Developer, QA/QC Automation</Text>
                  </VStack>
                </HStack>
                <Text>Introducing Svyatoslav, our brilliant full stack developer 🌟! Svyatoslav has been an invaluable asset to our team, providing extensive support and guidance in all things related to React. 🚀 He played a crucial role in setting up our work environment and workflow, making sure everything runs smoothly. 💻
                With his deep understanding of both backend and frontend deverlopment, Svyatoslav seamlessly connects the dots between the two, ensuring a seamless integration of our systems. 🤝 He has implemented various design patterns and best practices, showcasing his extensive experience and mastery in the field. 🎯
                Svyatoslav's contributions have greatly improved our development process, allowing us to deliver efficient, high-quality solutions. His expertise and dedication make him an invaluable teammate, always ready to take on new challenges and provide innovative solutions. 🙌</Text>
              </Stack>

              <Stack shadow={"md"} padding={"5"}>
                <HStack>
                  <Avatar name="Mykhailo Yuras" src={misha_ph} size="2xl" />
                  <VStack align={"left"}>
                    <Text as={"b"} color={"violet.600"} fontSize={"x-large"}>Mykhailo Yuras</Text>
                    <Text as={"u"} opacity={"40%"}>Position: Pr. Designer and Content Manager</Text>
                  </VStack>
                </HStack>
                <Text>Meet Misha 👋, our talented 🎨 designer and content manager! With expertise in using Figma, Misha brings a creative touch ✨ to our projects, ensuring visually stunning designs that captivate our users' attention. Their keen eye for aesthetics and attention to detail 👁️ greatly enhance the user experience, making it a delightful journey from start to finish.

                As a content manager, Misha excels in curating and delivering engaging content that resonates with our audience. 📝 Their ability to create compelling stories and captivating visuals 🌟🖼️ leaves a lasting impression on our users, keeping them coming back for more.

                Misha's unique combination of design skills and content management expertise allows them to create cohesive and captivating experiences throughout our platforms. Their dedication and passion for delivering exceptional design shines through in every pixel. 🙌😊</Text>
              </Stack>
              
              <Stack shadow={"md"} padding={"5"}>
                <HStack >
                  <Avatar name="Yaroslav Kyliushyk" src={kya_ph} size="2xl" />
                  <VStack align={"left"}>
                    <Text as={"b"} color={"violet.600"} fontSize={"x-large"}>Yaroslav Kyliushyk </Text>
                    <Text as={"u"} opacity={"40%"}>Position: Pr.Lead, Full Stack Developer, DevOps, QA/QC Engineer</Text>
                  </VStack>
                </HStack>
                <Text>Hi All👋! I am a multi-skilled in the field of software development. 💻 With a focus on backend development, I have also gained experience in areas such as DevOps and QA/QC engineering. 🚀 Although I consider myself a middle developer, I am continuously seeking new opportunities and experiences to enhance my skills. 🔍 I am passionate about delivering high-quality solutions and constantly strive to improve my abilities in the ever-evolving world of technology. 🌟</Text>
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