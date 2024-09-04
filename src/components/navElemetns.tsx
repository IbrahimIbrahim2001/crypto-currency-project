import React from 'react';

import DashboardIcon from "./dashboardIcon";
import CurrencyIcon from './currencyIcon';

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
    }
]