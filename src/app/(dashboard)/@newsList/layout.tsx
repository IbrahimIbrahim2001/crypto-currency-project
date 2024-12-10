import { NewsBoxContainer } from "@/components/news"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <NewsBoxContainer>
            {children}
        </NewsBoxContainer>
    )
}
