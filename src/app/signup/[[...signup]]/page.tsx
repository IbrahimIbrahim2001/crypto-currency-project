import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export default function SignupPage() {
    return (
        <div className='flex w-full  items-center justify-center'>
            <SignUp appearance={{
                baseTheme: dark
            }} />
        </div>
    )
}
