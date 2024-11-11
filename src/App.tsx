import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ReactNode } from "react";
import { LayoutHeader } from "./components/layout/Header";
import { LayoutMobile } from "./components/layout/Mobile";

interface Props {
  children: ReactNode;
}

export const App = ({ children }: Props) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <LayoutHeader opened={opened} toggle={toggle} />
      <LayoutMobile toggle={toggle} />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default App;
