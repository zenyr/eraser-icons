import { default as Fuse, FuseResult } from "fuse.js";
import { useCallback, useMemo, useState } from "react";
import { IconDefinition, ICONS, Tag } from "../../dataset/icons";

const filterIconByTag = (icon: (typeof ICONS)[number], tags: Set<Tag>) => {
  if (tags.size === 0) return true;
  return icon.tags.some((t) => tags.has(t));
};

export const useIcons = () => {
  const [tags, setTags] = useState(new Set<Tag>());
  const handleTagsChange = useCallback((tags: Tag[]) => setTags(new Set(tags)), []);

  const icons = useMemo(
    () => (tags.size === 0 ? ICONS : ICONS.filter((i) => filterIconByTag(i, tags))),
    [tags],
  );
  const fuse = useMemo(
    () =>
      new Fuse(icons, {
        keys: ["value", "aliases", "tags"],
        includeScore: true,
        threshold: 0.3,
      }),
    [icons],
  );

  const [search, setSearch] = useState("");
  const items = search
    ? fuse.search(search)
    : tags.size === 1
      ? icons.map(
          (item, refIndex) => ({ item, refIndex, score: 0 }) satisfies FuseResult<IconDefinition>,
        )
      : [];
  return { tags, handleTagsChange, items, setSearch };
};
