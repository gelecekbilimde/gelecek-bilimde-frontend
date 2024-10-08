"use client";
import { MenuProvider } from "kmenu";

import CommandPalette from "@/components/layout/header/command-palette";
import AuthProvider from "@/providers/auth-provider";
import ReactQueryProvider from "@/providers/react-query-provider";

interface Properties {
  children: React.ReactNode;
}

export default function Providers({ children }: Properties): JSX.Element {
  return (
    <AuthProvider>
      <MenuProvider>
        <ReactQueryProvider>
          {children}
          <CommandPalette />
        </ReactQueryProvider>
      </MenuProvider>
    </AuthProvider>
  );
}
