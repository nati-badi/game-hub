import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/pyramid.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavBar({onSearch}: Props) {
  return (
    <HStack padding="20px">
      <Image src={logo} boxSize="70px" padding="7px" />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
}

export default NavBar;
