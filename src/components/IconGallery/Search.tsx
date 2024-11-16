import {
  ActionIcon,
  CloseButton,
  HoverCard,
  Input,
  Kbd,
  MultiSelect,
  Portal,
  Text,
  Tooltip,
} from "@mantine/core";
import { useDebouncedValue, useLocalStorage } from "@mantine/hooks";
import {
  IconBook,
  IconBrandGithub,
  IconBrandTwitter,
  IconHelp,
  IconSearch,
} from "@tabler/icons-react";
import {
  ChangeEvent,
  KeyboardEvent,
  ReactNode,
  startTransition,
  useCallback,
  useEffect,
} from "react";
import { version } from "../../../package.json";
import { Tag, TAGS } from "../../dataset/icons";
import { EraserIcon } from "../EraserIcon";
import classes from "./search.module.css";

const Lnk = ({ children, href }: { children: ReactNode; href: string }) => (
  <Kbd>
    <a href={href} target="_blank" rel="noopener">
      {children}
    </a>
  </Kbd>
);
interface Props {
  tags: Set<Tag>;
  onTagsChange: (tags: Tag[]) => void;
  setSearch: (value: string) => void;
}
export const IconGallerySearch = ({ onTagsChange, setSearch }: Props) => {
  const [input, setInput] = useLocalStorage<string>({
    key: "poco.eraser-io.icon-gallery.search",
    defaultValue: "",
    getInitialValueInEffect: true,
  });
  const [selectedTags, setSelectedTags] = useLocalStorage<Tag[]>({
    key: "poco.eraser-io.icon-gallery.tags",
    defaultValue: ["canvas"],
    getInitialValueInEffect: true,
  });
  const [debounced] = useDebouncedValue(input, 200);
  const submitSearch = useCallback(
    () => startTransition(() => setSearch(debounced)),
    [debounced, setSearch],
  );
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setInput(value);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code !== "Enter") return;
    submitSearch();
  };

  useEffect(submitSearch, [submitSearch]);
  useEffect(() => {
    onTagsChange(selectedTags);
  }, [onTagsChange, selectedTags]);

  return (
    <Portal target="#search-target">
      <Input
        placeholder={`Eraser.io Icon fuzzy scanner v${version} - @zenyr`}
        value={input}
        onChange={handleChange}
        flex="1 0 auto"
        onKeyDown={handleKeyDown}
        leftSection={<IconSearch size={16} />}
        rightSectionPointerEvents="all"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => (setInput(""), submitSearch())}
            style={{ display: input ? undefined : "none" }}
          />
        }
      />
      <MultiSelect
        placeholder={selectedTags.length === 0 ? "Filter by tags" : undefined}
        data={TAGS}
        value={selectedTags}
        onChange={setSelectedTags}
        clearable={selectedTags.length > 1}
      />
      <HoverCard width={400} position="bottom" withArrow shadow="md">
        <HoverCard.Target>
          <ActionIcon variant="subtle" color="#EC2D40">
            <IconHelp size={24} />
          </ActionIcon>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="xs" className={classes.popover} lh={2}>
            This is an unofficial eraser.io icons fuzzy finder, built within 2 hours. Probably got
            LOADS of bugs but hey, now you can search the vast eraser.io icons now!
            <br /> 🌝 Thanks to <Lnk href="//mantine.dev">mantine</Lnk> &{" "}
            <Lnk href="//npm.im/fuse.js">fuse.js</Lnk>! Oh, don't forget{" "}
            <Lnk href="//eraser.io">eraser.io</Lnk> too.
          </Text>
        </HoverCard.Dropdown>
      </HoverCard>
      <Tooltip label="Github Repo">
        <ActionIcon
          variant="subtle"
          component="a"
          href="//github.com/zenyr/eraser-icons"
          target="_blank"
          rel="noopener"
          color="#01A9E4"
        >
          <IconBrandGithub size={24} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="DM me on twitter 😋">
        <ActionIcon
          variant="subtle"
          component="a"
          href="//x.com/zenyr"
          target="_blank"
          rel="noopener"
          c="gray"
        >
          <IconBrandTwitter size={24} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Original documentation">
        <ActionIcon
          variant="subtle"
          component="a"
          href="//docs.eraser.io/docs/icons"
          target="_blank"
          rel="noopener"
          color="gray"
        >
          <IconBook />
        </ActionIcon>
      </Tooltip>
      <Tooltip label="Open Eraser.io">
        <ActionIcon
          variant="subtle"
          component="a"
          href="//eraser.io?utm_source=eraser-icons&utm_campaign=eraser-icons.poco.sh"
          target="_blank"
          rel="noopener"
        >
          <EraserIcon size={24} />
        </ActionIcon>
      </Tooltip>
    </Portal>
  );
};
