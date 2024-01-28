import { Image, List, ListItem, Text, HStack } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

function GenresList() {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image boxSize='32px' borderRadius={8} src={genre.image_background} />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenresList;
