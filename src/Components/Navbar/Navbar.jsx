import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

import "./Navbar.css";
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const bgColor = { light: "transparent", dark: "transparent" };

  return (
    <div className="navbar_main">
      <Box>
        <Flex
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          // borderBottom={1}
          align={"center"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex
            mt={4}
            flex={{ base: 1 }}
            justify={{ base: "center", md: "start" }}
          >
            {/* Logo  */}
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="41"
                fill="none"
                viewBox="0 0 40 41"
              >
                <path
                  fill="url(#paint0_linear_832_822)"
                  fillRule="evenodd"
                  d="M8.553 4.098c-1.43 1-2.725 2.183-3.848 3.514 4.59-.426 10.42.27 17.19 3.655 7.228 3.614 13.049 3.736 17.1 2.955a19.888 19.888 0 00-1.379-3.2c-4.637.49-10.582-.158-17.51-3.622-4.4-2.2-8.278-3.106-11.553-3.302zm26.354 3.069A19.95 19.95 0 0020 .5c-1.74 0-3.427.222-5.036.64 2.179.594 4.494 1.464 6.93 2.682 5.073 2.537 9.452 3.353 13.013 3.345zm4.954 10.961c-4.894.966-11.652.768-19.755-3.284-7.576-3.787-13.606-3.74-17.672-2.836-.21.047-.415.096-.615.147a19.85 19.85 0 00-1.262 3.64c.325-.088.662-.17 1.01-.247C6.5 14.45 13.47 14.498 21.893 18.71c7.576 3.788 13.606 3.74 17.672 2.837.14-.031.277-.063.412-.096a20.296 20.296 0 00-.117-3.324zm-.536 7.544c-4.847.848-11.408.522-19.22-3.383C12.53 18.5 6.5 18.549 2.435 19.452c-.903.2-1.715.445-2.431.703L0 20.5c0 11.046 8.954 20 20 20 9.257 0 17.045-6.29 19.325-14.828z"
                  clipRule="evenodd"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_832_822"
                    x1="36"
                    x2="-3.733"
                    y1="43.7"
                    y2="36.093"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#5D50C6"></stop>
                    <stop offset="1" stopColor="#F85E9F"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <Text
                textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                color={useColorModeValue("gray.800", "white")}
                className="logo_text"
              >
                Travelly
              </Text>
            </>
            {/* change  */}
            {/* For bringing into center  */}
            <Flex flex={{ base: 1 }} justify={{ md: "center" }}>
              <Flex display={{ base: "none", md: "flex" }} ml={10}>
                <DesktopNav />
              </Flex>
            </Flex>
          </Flex>
          {/* Buttons of login and signup */}
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={10}
          >
            <Button
              as={"a"}
              fontSize={"sm"}
              fontWeight={600}
              variant={"link"}
              href={"#"}
              color={"black"}
            >
              Log In
            </Button>
            <Button
              className="btn signup_btn"
              as={"a"}
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              href={"#"}
            >
              Sign Up
            </Button>
          </Stack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    </div>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={6}>
      {NAV_ITEMS.map((navItem, index) => (
        <Link key={index} className="navbar_options" to={navItem.href}>
          {navItem.label}
        </Link>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
      </Box>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Discover",
    href: "/discover",
  },
  {
    label: "Special Deals",
    href: "#",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
