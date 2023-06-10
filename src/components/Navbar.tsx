import React from "react";
import {
  Box,
  Text,
  Heading,
  HStack,
  IconButton,
  Switch,

  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,

  useColorMode,
} from "@chakra-ui/react";

import { useTranslation } from "react-i18next";

import { useViewController } from "../ViewController";
import { LogoColor } from "./icons/logo-color";
import { LogoWhite } from "./icons/logo-white";
import { MoonStarsIcon } from "./icons/moon-stars";
import { ServerIcon } from "./icons/server";
import { SunIcon } from "./icons/sun";
import { UserIcon } from "./icons/user";
import { useState } from "react";

const LngSwitch = ({ colorMode }) => {
  const { i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
    // Additional logic or state updates on mouse enter
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Additional logic or state updates on mouse leave
  };

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "uk" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <span>
          <div
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            style={{ display: "inline-block" }}
          >
            <Switch
              id="isUkraineLang"
              colorScheme={{ light: "violet", dark: "purple" }[colorMode]}
              onChange={toggleLanguage}
            />
          </div>
        </span>
      </PopoverTrigger>
    </Popover>
  );
};

export const Navbar = () => {
  const [, setView] = useViewController();
  const { colorMode, toggleColorMode } = useColorMode();
  const { t, i18n } = useTranslation("navbar");

  return (
    <Box display={"flex"} h={20} w={"full"} px={{ base: 4, sm: 8 }} justifyContent={"space-between"} flexShrink={0}>
      <HStack>
        <IconButton
          aria-label={"Toggle color mode"}
          icon={
            <Box w={6}>
              <ServerIcon sx={{ strokeWidth: 2 }} />
            </Box>
          }
          onClick={() => setView({ slug: "server" })}
        />
        <IconButton
          aria-label={"Manage account"}
          icon={
            <Box w={6}>
              <UserIcon sx={{ strokeWidth: 2 }} />
            </Box>
          }
          onClick={() => setView({ slug: "auth" })}
        />
      </HStack>

      <HStack h={20} spacing={{ base: 0, sm: 4 }} position={"absolute"} left={"50%"} transform={"translateX(-50%)"}>
        <Box w={10}>{colorMode === "dark" ? <LogoWhite /> : <LogoColor />}</Box>
        <Heading fontSize={"2xl"} fontWeight={"bold"} display={{ base: "none", sm: "block" }}>
          URL SHORTENER
        </Heading>
      </HStack>

      <HStack h={20}>

        <Text>🇺🇸</Text>
        <LngSwitch colorMode={colorMode} />
        <Text paddingRight={"5"}>🇺🇦</Text>

        <Text>{i18n.t('navbar.about')}</Text>

        <IconButton
          aria-label={"Toggle color mode"}
          icon={
            <Box w={6}>
              {colorMode !== "dark" ? <SunIcon sx={{ strokeWidth: 2 }} /> : <MoonStarsIcon sx={{ strokeWidth: 2 }} />}
            </Box>
          }
          onClick={toggleColorMode}
        />

      </HStack>
    </Box>
  );
};
