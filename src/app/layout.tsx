"use client";

import "./globals.css";
import { fonts } from "./fonts";
import { ChakraUIProvider } from "../providers/ChakraUIProvider";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import { HydrationBoundary } from "@tanstack/react-query";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";
import { SideBar } from "@/components/SideBar/SideBar";
import { Header } from "@/components/Header/Header";
import { useDisclosure } from "@chakra-ui/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <html lang="en">
      <body className={`${fonts.rubik.variable} antialiased`}>
        <ReactQueryProvider>
          <HydrationBoundary>
            <Header onOpen={onOpen} />
            <SideBar isOpen={isOpen} onClose={onClose} />
            <ChakraUIProvider>{children}</ChakraUIProvider>
            <ThemeSwitcher />
          </HydrationBoundary>
          <ReactQueryDevtools initialIsOpen={false} />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
