export default function loading() {
    return (
        <div className="grid place-content-center h-main-layout md:h-main-layout-bigger-screens w-full">
            <div
                className="inline-block h-10 w-10  animate-spin rounded-full border-4 border-solid border-[#7da6e3] border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                role="status">
            </div>
        </div>
    )
}
