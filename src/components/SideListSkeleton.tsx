import { Card, CardBody, List, Skeleton, SkeletonText } from "@chakra-ui/react";

function SideListSkeleton() {
  return (
    <List paddingY={3}>
        <SkeletonText />
    </List>
  );
}

export default SideListSkeleton;
