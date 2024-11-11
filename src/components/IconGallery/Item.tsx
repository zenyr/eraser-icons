import { Card, Flex, Group, Pill } from "@mantine/core";
import { useClipboard, useTimeout } from "@mantine/hooks";
import { IconCopy, IconCopyCheckFilled } from "@tabler/icons-react";
import { MouseEvent, useCallback } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IconDefinition } from "../../dataset/icons";
import { PATTERN } from "../../dataset/icons/aws";
import classes from "./item.module.css";
import { Loading } from "./Loading";

export const IconGalleryItem = (props: IconDefinition) => {
  const { value, tags, aliases, humanReadable } = props;
  const src = PATTERN.replace("{name}", value);
  const { copy, copied, reset } = useClipboard({ timeout: 500 });

  const { start } = useTimeout(reset, 1000);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      const value = e.currentTarget.getAttribute("data-value");
      if (!value) return;
      try {
        copy(value);
        start();
      } catch {
        alert();
      }
    },
    [copy, start],
  );

  return (
    <Card className={classes.item} withBorder>
      <Flex direction="column" gap="sm" align="center">
        <Group gap="xs" className={classes.tags}p="xs">
          {tags.map((tag) => (
            <Pill key={tag} variant="default" size="xs" c="grape" className={classes.tag}>
              {tag}
            </Pill>
          ))}
        </Group>
        <LazyLoadImage placeholder={<Loading />} className={classes.image} src={src} alt={value} />
        <Flex direction="column" align="center">
          <Group gap="xs" wrap="nowrap">
            <Pill
              ff="monospace"
              size="sm"
              className={classes.raw}
              onClick={handleClick}
              data-value={value}
            >
              <span>{value}</span>
              {copied ? <IconCopyCheckFilled size={12} /> : <IconCopy size={12} />}
            </Pill>
            <Pill variant="contrast" size="sm" className={classes.human_readable}>
              {humanReadable}
            </Pill>
          </Group>
        </Flex>
        {aliases && (
          <Pill.Group size="xs" style={{ justifyContent: "center" }}>
            {aliases.map((alias) => (
              <Pill key={alias}>{alias}</Pill>
            ))}
          </Pill.Group>
        )}
      </Flex>
    </Card>
  );
};
