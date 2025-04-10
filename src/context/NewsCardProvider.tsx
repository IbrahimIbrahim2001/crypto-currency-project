// "use client";
// import { News } from "@/components/news";
// import { NEWS } from "@/types/news";
// import { createContext } from "vm";

// // this component is To make the News a compound component path(Components/news/news.tsx)

// interface NewsCardContext {
//     news: NEWS
// }


// const NewsCardContext = createContext<NewsCardContext | undefined>(undefined);

// export default function NewsCardProvider({ children }: { children: React.ReactNode }) {
//     return (
//         <NewsCardContext.Provider value={{news}}>
//             {children}
//         </NewsCardContext.Provider>
//     )
// }
