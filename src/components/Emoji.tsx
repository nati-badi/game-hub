import { Image, ImageProps, mergeThemeOverride } from "@chakra-ui/react";
import meh from "../assets/indifferent.webp";
import thumbsUp from "../assets/like.webp";
import bullsEye from "../assets/target.webp";

interface Props {
  rating: number;
}

function Emoji({ rating }: Props) {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "recommended" },
    5: { src: bullsEye, alt: "exceptional" },
  };

  return <Image {...emojiMap[rating]} marginTop={1} boxSize="30px" />;
}

export default Emoji;
