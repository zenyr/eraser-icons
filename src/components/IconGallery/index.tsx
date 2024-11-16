import { Alert, Flex, SimpleGrid, Text } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { useIcons } from "./hooks";
import { IconGalleryItem } from "./Item";
import { IconGallerySearch } from "./Search";

const IconGallery = () => {
  const { tags, handleTagsChange, items, setSearch } = useIcons();
  return (
    <Flex align="stretch" direction="column" gap="lg">
      <IconGallerySearch tags={tags} onTagsChange={handleTagsChange} setSearch={setSearch} />

      {items.length > 0 ? (
        <SimpleGrid spacing="md" cols={{ base: 2, sm: 3, lg: 5 }}>
          {items.map(({ item, score }) => (
            <IconGalleryItem key={item.value} score={score} {...item} />
          ))}
        </SimpleGrid>
      ) : (
        <Alert
          title={
            <Text fw="bold">
              <Text c="#EC2D40" fw="inherit" size="inherit" component="span">
                No
              </Text>{" "}
              <Text c="#01A9E4" fw="inherit" size="inherit" component="span">
                icons
              </Text>{" "}
              found
            </Text>
          }
          icon={<IconInfoCircle />}
          variant="transparent"
        >
          Please try another search query 🌝
          <br />
          Or select a single tag to list all icons at once.
        </Alert>
      )}
    </Flex>
  );
};

export const IconGalleryWithHOC = trackWindowScroll(IconGallery);
