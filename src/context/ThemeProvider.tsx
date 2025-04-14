'use client';
import { ThemeProvider } from "next-theme";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system">
            {children}
        </ThemeProvider>
    )
}
