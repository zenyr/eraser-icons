import { ActionIcon, CloseButton, HoverCard, Input, Kbd, Portal, Text } from "@mantine/core";
import { useDebouncedValue, useLocalStorage } from "@mantine/hooks";
import { IconBrandGithub, IconBrandTwitter, IconHelp, IconSearch } from "@tabler/icons-react";
import {
  ChangeEvent,
  KeyboardEvent,
  ReactNode,
  startTransition,
  useCallback,
  useEffect,
} from "react";
import classes from "./search.module.css";

const Lnk = ({ children, href }: { children: ReactNode; href: string }) => (
  <Kbd>
    <a href={href} target="_blank" rel="noopener">
      {children}
    </a>
  </Kbd>
);
interface Props {
  setSearch: (value: string) => void;
}
export const IconGallerySearch = ({ setSearch }: Props) => {
  const [input, setInput] = useLocalStorage<string>({
    key: "poco.eraser-io.icon-gallery.search",
    defaultValue: "",
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

  return (
    <Portal target="#search-target">
      <Input
        placeholder="Eraser.io Icon fuzzy scanner v1.0.0 - @zenyr"
        value={input}
        onChange={handleChange}
        flex="1 0 auto"
        onKeyDown={handleKeyDown}
        leftSection={<IconSearch size={16}/>}
        rightSectionPointerEvents="all"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => (setInput(""), submitSearch())}
            style={{ display: input ? undefined : "none" }}
          />
        }
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
    </Portal>
  );
};
