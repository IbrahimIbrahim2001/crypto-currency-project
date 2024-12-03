type NewsBoxContentProps = {
    children: React.ReactNode,
    className?: string,
}
export const NewsBoxContent = ({ children, className }: NewsBoxContentProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
