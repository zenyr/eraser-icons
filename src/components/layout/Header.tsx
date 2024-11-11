import { AppShell, Burger, Group } from "@mantine/core";
import { forwardRef } from "react";

interface Props {
  opened: boolean;
  toggle: VoidFunction;
}

export const LayoutHeader = forwardRef<HTMLDivElement, Props>(({ opened, toggle }, ref) => (
  <AppShell.Header ref={ref}>
    <Group h="100%" px="md">
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      <Group justify="space-between" style={{ flex: 1 }} id="search-target" />
    </Group>
  </AppShell.Header>
));
LayoutHeader.displayName = "LayoutHeader";
