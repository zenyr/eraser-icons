import { createLazyFileRoute } from "@tanstack/react-router";
import { IconGalleryWithHOC } from "../components/IconGallery";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return <IconGalleryWithHOC />;
}
