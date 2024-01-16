import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/pyramid.webp"

function NavBar() {
  return (
    <HStack>
        <Image src={logo} boxSize="60px" padding="7px" />
    </HStack>
  )
}

export default NavBar