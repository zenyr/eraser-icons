import { useThrottledState } from "@mantine/hooks";
import { default as Fuse } from "fuse.js";
import { useState } from "react";
import { ICONS } from "../../dataset/icons";

export const useIcons = () => {
  const [fuse] = useState(
    () => new Fuse(ICONS, { keys: ["value", "aliases", "tags"], includeScore: true }),
  );
  const [search, setSearch] = useThrottledState("", 500);
  const items = search ? fuse.search(search) : [];

  return { items, setSearch };
};
