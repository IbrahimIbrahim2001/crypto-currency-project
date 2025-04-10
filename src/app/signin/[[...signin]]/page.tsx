import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

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
