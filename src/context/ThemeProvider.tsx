'use client';
import { ThemeProvider } from "next-theme";
import React from "react";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            {children}
        </ThemeProvider>
    )
}
