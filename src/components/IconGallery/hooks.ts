import { default as Fuse } from "fuse.js";
import { useState } from "react";
import { ICONS } from "../../dataset/icons";

export const useIcons = () => {
  const [fuse] = useState(
    () =>
      new Fuse(ICONS, {
        keys: ["value", "aliases", "tags"],
        includeScore: true,
        threshold: 0.3,
      }),
  );

  const [search, setSearch] = useState("");
  const items = search ? fuse.search(search) : [];
  return { items, setSearch };
};
