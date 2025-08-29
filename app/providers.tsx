"use client";
import * as React from "react";
import { ThemeProvider } from "./providers/theme-provider";



export interface ProvidersProps {
  children: React.ReactNode;
}



export function Providers({ children }: ProvidersProps) {

  return (
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>{children}</ThemeProvider>
  );
}
