import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/pyramid.webp"
import ColorModeSwitch from "./ColorModeSwitch"

function NavBar() {
  return (
    <HStack justifyContent='space-between' padding='20px'>
        <Image src={logo} boxSize="70px" padding="7px" />
        <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar