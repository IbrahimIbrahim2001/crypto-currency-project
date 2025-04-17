import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Crypto Currencies web app Login Page",
    description: "Crypto Currencies Login Page",
};

export default function SingInPage() {
    return (
        <div className='flex w-full items-center justify-center'>
            <SignIn
                appearance={{
                    baseTheme: dark,
                }} />
        </div>
    )
}
