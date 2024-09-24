import {
  Avatar,
  Flex,
  Icon,
  IconButton,
  Link,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa6";
import { SearchInput } from "../SearchInput/SearchInput";
import NextLink from "next/link";
import { BiVideoPlus } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = ({ onOpen }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between" marginLeft='20px'>
      <Flex>
        <Wrap alignItems='center'>
          <WrapItem>
            <IconButton
              colorScheme="blue"
              onClick={onOpen}
              aria-label="button open drawer"
              icon={<RxHamburgerMenu />}
              size="lg"
              fontSize="25px"              
            />
          </WrapItem>
          <WrapItem>
            <Link href="/" as={NextLink} alignItems="center" display="flex">
              <Icon as={FaYoutube} boxSize={26} color="#ff0000" />
              <Text>Youtube</Text>
            </Link>
          </WrapItem>
        </Wrap>
      </Flex>
      <SearchInput />
      <Flex>
        <IconButton
          colorScheme="blue"
          onClick={onOpen}
          aria-label="post new video"
          icon={<BiVideoPlus />}
          size="lg"
          fontSize="25px"
          margin="20px"
        />
        <IconButton
          colorScheme="blue"
          onClick={onOpen}
          aria-label="open notifications"
          icon={<BsBell />}
          size="lg"
          fontSize="25px"
          margin="20px"
        />
        <Link href="/" as={NextLink} alignItems="center" display="flex">
          <Avatar
            size="2xs"
            name="Dan Abrahmov"
            src="https://bit.ly/dan-abramov"
            width="3rem"
          />
        </Link>
      </Flex>
    </Flex>
  );
};
