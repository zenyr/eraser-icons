import { AppShell } from "@mantine/core";
interface Props {
  toggle: VoidFunction;
}
export const LayoutMobile = ({ toggle }: Props) => (
  <AppShell.Navbar py="md" px={4} onClick={toggle}>
   <div>Work in progress!</div>
  </AppShell.Navbar>
);
