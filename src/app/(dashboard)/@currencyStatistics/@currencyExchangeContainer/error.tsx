"use client";

export default function error({ reset }: { reset: () => void }) {
    return (
        <div className="mx-5">
            <p className=" text-sm opacity-70 text-red-500">
                during to Api limits, not all the currencies historical data available
            </p>
            <button type="button" onClick={reset}>Try again</button>
        </div>
    )
}
