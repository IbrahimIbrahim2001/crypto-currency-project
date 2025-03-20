export function calculateHoursDifference(publishedAt: string) {
    const currentDateTime = new Date().getTime();
    const publishedTime = new Date(publishedAt).getTime();
    const differenceInMilliseconds = currentDateTime - publishedTime;
    const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
    return differenceInHours;
}

