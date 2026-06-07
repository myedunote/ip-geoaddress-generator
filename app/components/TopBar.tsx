"use client";

import { IconButton, Flex } from "@radix-ui/themes";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

interface TopBarProps {
  onInboxOpen: () => void;
}

export function TopBar({ onInboxOpen }: TopBarProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const isLightTheme = resolvedTheme !== "dark";

  return (
    <Flex
      justify="end"
      align="center"
      px="6"
      py="4"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Flex gap="6" align="center">
        <IconButton
          size="4"
          variant="ghost"
          aria-label="收信箱"
          onClick={onInboxOpen}
        >
          <EnvelopeClosedIcon width="24" height="24" />
        </IconButton>
        <IconButton
          size="4"
          variant="ghost"
          aria-label="GitHub"
          onClick={() =>
            window.open(
              "https://github.com/GuooGaii/ip-geoaddress-generator",
              "_blank"
            )
          }
        >
          <GitHubLogoIcon width="24" height="24" />
        </IconButton>
        <IconButton
          size="4"
          variant="ghost"
          onClick={() => setTheme(isLightTheme ? "dark" : "light")}
          aria-label="切换主题"
        >
          {isLightTheme ? (
            <MoonIcon width="24" height="24" />
          ) : (
            <SunIcon width="24" height="24" />
          )}
        </IconButton>
      </Flex>
    </Flex>
  );
}
