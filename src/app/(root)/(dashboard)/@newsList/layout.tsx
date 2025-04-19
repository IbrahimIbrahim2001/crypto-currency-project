import { NewsBoxContainer } from "@/components/news/newsBoxContainer";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <NewsBoxContainer>
            {children}
        </NewsBoxContainer>
    )
}
