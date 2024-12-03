import { NewsBoxHeader } from "./newsBoxHeader"


export const NewsBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full hidden lg:block lg:w-3/12 lg:px-4 max-h-[calc(20rem-10px)] lg:bg-white font-semibold rounded-xl mb-5 overflow-y-clip">
            <NewsBoxHeader />
            {children}
        </div>
    )
}
