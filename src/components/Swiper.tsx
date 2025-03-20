"use client";

import { currencyBoxElement } from '@/types/currencyBoxElement';
import { CurrencyBox } from './currencyBox';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// { currencyBoxElements }: { currencyBoxElements: currencyBoxElement[] }
export default function SwiperComponent({ children }: { children: React.ReactNode }) {
    const settings = {
        className: "mb-3",
        infinite: false,
        slidesToShow: 1.2,
    };
    return (
        <>
            <div className='-mx-5 overflow-hidden mb-3 sm:hidden'>
                <Slider {...settings} >
                    {children}
                </Slider>
            </div>
        </>
    )
}
