export function calculateHoursDifference(dateTime1: string, dateTime2: string) {
    const time1 = new Date(dateTime1).getTime();
    const time2 = new Date(dateTime2).getTime();
    const differenceInMilliseconds = time2 - time1;
    const differenceInHours = differenceInMilliseconds / (1000 * 60 * 60);
    return differenceInHours;
}

