import { ICONS as AWS_ICONS } from "./aws";
import { ICONS as CANVAS_ICONS } from "./canvas";
import { ICONS as AZURE_ICONS } from "./azure";
import { ICONS as GCP_ICONS } from "./gcp";
import { ICONS as K8S_ICONS } from "./k8s";
import { ICONS as TECH_LOGOS_ICONS } from "./techLogos";

export const PATTERN = `https://app.tryeraser.com/static/canvas-icons/{name}.svg`;

export interface IconDefinition {
  tags: string[];
  value: string;
  aliases?: string[];
  humanReadable: string;
}

const serialize =
  (category: string) =>
  (item: string | IconDefinition): IconDefinition => {
    if (typeof item === "string") {
      const [value, ..._aliases] = item.split(",");
      const aliases = _aliases.length ? _aliases : undefined;

      return {
        tags: [category],
        humanReadable: value.replace(/^(aws|k8s|gcp|azure)-/, ""),
        aliases,
        value,
      };
    }
    return item;
  };

export const ICONS: IconDefinition[] = [
  ...new Set([
    ...AWS_ICONS.map(serialize("aws")),
    ...CANVAS_ICONS.map(serialize("canvas")),
    ...AZURE_ICONS.map(serialize("azure")),
    ...GCP_ICONS.map(serialize("gcp")),
    ...K8S_ICONS.map(serialize("k8s")),
    ...TECH_LOGOS_ICONS.map(serialize("tech-logos")),
  ]),
];

export type Tag = (typeof ICONS)[number]["tags"][number];

export const TAGS: Tag[] = [
  ...ICONS.reduce((acc, { tags }) => {
    tags.forEach(t=>acc.add(t));
    return acc;
  }, new Set<Tag>()),
];
