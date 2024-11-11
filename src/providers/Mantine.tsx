import {
  createTheme,
  MantineProvider as RawMantineProvider,
} from "@mantine/core";
import { ReactNode } from "react";

const theme = createTheme({});

export const MantineProvider = ({ children }: { children: ReactNode }) => (
  <RawMantineProvider theme={theme}>{children}</RawMantineProvider>
);
