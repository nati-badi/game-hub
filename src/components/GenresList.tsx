import { Image, List, ListItem, Text, HStack, Button } from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import SideListSkeleton from "./SideListSkeleton";

interface Props {
  onSelectGenre: (genre: Genres) => void;
  selectedGenre: Genres | null;
}

function GenresList({ selectedGenre, onSelectGenre }: Props) {
  const { data, error, isLoading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (error) return null;

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => <SideListSkeleton key={skeleton} />)}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              whiteSpace="normal"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenresList;
