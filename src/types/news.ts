export type NEWS = {
    id: number,
    title: string,
    published_at: string | undefined,
    source: {
        title: string,
    }
}