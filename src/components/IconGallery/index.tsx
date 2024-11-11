import { Flex, SimpleGrid } from "@mantine/core";
import { trackWindowScroll } from "react-lazy-load-image-component";
import { useIcons } from "./hooks";
import { IconGalleryItem } from "./Item";
import { IconGallerySearch } from "./Search";

const IconGallery = () => {
  const { items, setSearch } = useIcons();
  return (
    <Flex align="stretch" direction="column" gap="lg">
      <IconGallerySearch setSearch={setSearch} />
      <SimpleGrid spacing="md" cols={{ base: 2, sm: 3, lg: 5 }}>
        {items.map(({ item }) => (
          <IconGalleryItem key={item.value} {...item} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export const IconGalleryWithHOC = trackWindowScroll(IconGallery);
