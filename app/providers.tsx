"use client";

import type { ThemeProviderProps } from "next-themes";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "./providers/theme-provider";



export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>{children}</ThemeProvider>
  );
}
