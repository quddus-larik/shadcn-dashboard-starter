# Next.js & ShadCN Dashboard
[https://ui.shadcn.com/view/sidebar-03](Link)
> [!TIP]
> by default it have not toggle dark/light in dashboard bt shadcn therefore, repo enable dark/light toogle with shadcn-dashboard-starter

## Project Information
`nextjs v15`
`App Router (Folder Based)`
`@ Alias (disabled)`
`turbopack enabled`

## Packages Info
`tailwindcss v3`
`shadcn UI`

## How To Use
1. Clone the Repo
   ```bash
   git clone https://github.com/quddus-larik/shadcn-dashboard-starter
   ```
2. Install Dependencies
   ```bash
   npm install
   ```
3. Run
   ```bash
   npm run dev
   ```
## Project Overview
* Layout CoreUI named in `layouts` folder Parant comonents `app/layouts/core-ui.tsx`
* You can use it 👇
  ```tsx
  import { CoreUI } from "../layouts/core-ui";
  export default function Page(){

  return(
    <CoreUI>
      <div className="w-full h-full bg-green-200">{/* Your Code */ }</div>
    </CoreUI>
   )
  }
  ```
* Theme Provider is developed in `providers.tsx` file `app/provider.tsx`
  ```tsx
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

  ```

  
