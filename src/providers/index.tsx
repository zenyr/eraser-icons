import { ReactNode } from "react";
import { MantineProvider } from "./Mantine";

export const Providers = ({ children }: { children: ReactNode }) => (
  <MantineProvider>{children}</MantineProvider>
);
