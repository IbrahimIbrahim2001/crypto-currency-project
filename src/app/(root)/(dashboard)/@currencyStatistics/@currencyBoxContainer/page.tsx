import { CurrencyBox } from "@/components/currencyBox";
import SwiperComponent from "@/components/Swiper";
import { currencyBoxElement } from "@/types/currencyBoxElement";

const currencyBoxElements: currencyBoxElement[] = [{
    coinId: "bitcoin",
    styles: "bg-[#fff3ec] text-[#ff4c02]"
},
{
    coinId: "dogecoin",
    styles: "bg-[#ffffec] text-[#f3b92e]"
},
{
    coinId: "binancecoin",
    styles: "bg-[#f4f4f4] text-[#323232] dark:text-[#fff]"
}];
export default async function CurrencyBoxContainer() {
    const CurrencyBoxMap =
        currencyBoxElements.map((ele, index) => (
            <CurrencyBox coinId={ele.coinId} styles={ele.styles} key={index} />
        ))
    return (
        <>
            <SwiperComponent>{CurrencyBoxMap}</SwiperComponent>  {/* visible only on mobile screens */}
            <div className="hidden sm:block w-full">
                <div className="flex justify-between sm:gap-x-3 md:gap-x-4 px-2 py-4">
                    {CurrencyBoxMap}
                </div>
            </div>
        </>
    )
}