import { createLazyFileRoute } from "@tanstack/react-router";
import { IconGalleryWithHOC } from "../components/IconGallery";

export const Route = createLazyFileRoute("/icons")({
  component: Icons,
});

function Icons() {
  return <IconGalleryWithHOC />;
}
