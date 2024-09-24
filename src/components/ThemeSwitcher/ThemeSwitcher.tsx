"use client";

import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    setTheme('dark')
  }, [setTheme]);

  if (!mounted) return null;

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("darks");
    } else {
      setTheme("light");
    }
  };
  return (
    <div>
      <Switch
        defaultSelected
        size="lg"
        color="success"
        onClick={handleTheme}
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
      ></Switch>
    </div>
  );
}
