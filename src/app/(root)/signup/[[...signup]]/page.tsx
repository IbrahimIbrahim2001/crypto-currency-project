import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Crypto Currencies web app Signup Page",
    description: "Crypto Currencies Signup Page",
};


export default function SignupPage() {
    return (
        <div className='flex w-full  items-center justify-center'>
            <SignUp appearance={{
                baseTheme: dark
            }} />
        </div>
    )
}
