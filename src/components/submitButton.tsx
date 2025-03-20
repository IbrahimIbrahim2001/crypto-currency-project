'use client';

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className="w-full h-10 text-center bg-primary rounded-md text-white disabled:bg-gray-200 disabled:dark:bg-gray-400" disabled={pending}>
            {pending ? "Exchanging..." : "Exchange Rate"}
        </button>
    )
}
