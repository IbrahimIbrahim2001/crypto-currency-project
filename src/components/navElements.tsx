import React from 'react';

import DashboardIcon from "./icons/dashboardIcon";
import CurrencyIcon from './icons/currencyIcon';
import NewsIcon from './icons/newsIcon';
import { CiBookmark } from 'react-icons/ci';

export default interface navElement {
    id: string;
    href: string;
    name: string;
    icon: React.ReactNode
}

type navElementsType = navElement[]

export const navElements: navElementsType = [
    {
        id: "dashboard",
        href: "/",
        name: 'Dashboard',
        icon: <DashboardIcon />
    },
    {
        id: "currency",
        href: "/currency",
        name: 'Currency',
        icon: <CurrencyIcon />
    },
    {
        id: "news",
        href: "/news",
        name: 'News',
        icon: <NewsIcon />
    },
    {
        id: "bookmarks",
        href: "/bookmarks",
        name: 'Bookmarks',
        icon: <CiBookmark className="size-5" />
    }
]