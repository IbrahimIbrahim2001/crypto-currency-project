"use server";

const API_URL = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY;
const API_LAYER_KEY = process.env.NEXT_PUBLIC_API_LAYER_API_KEY;

export type Errors = {
    amount?: string,
}
export type ChartData = {
    labels: string[];
    rates: number[];
}

export type FormState = {
    errors?: Errors;
    convertedAmount?: number
    chartData?: ChartData
}

async function getHistoricalChartData(currencyTo: string): Promise<{ labels: string[]; rates: number[] }> {
    const today = new Date();
    const firstDayLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const lastDayLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);

    const formatDate = (date: Date) => date.toISOString().split('T')[0];
    const startDate = formatDate(firstDayLastMonth);
    const endDate = formatDate(lastDayLastMonth);

    const apiUrl = `https://api.apilayer.com/exchangerates_data/timeseries?start_date=${startDate}&end_date=${endDate}&base=USD&symbols=${currencyTo}&apikey=${API_LAYER_KEY}`;


    const response = await fetch(apiUrl);
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API error: ${response.status} - ${errorText}`);
    }
    const data = await response.json();

    const labels = Object.keys(data.rates).sort(); // Dates
    const rates = labels.map(date => data.rates[date][currencyTo]);

    return { labels, rates };
}


export async function exchangeRate(_prevState: FormState, formData: FormData) {
    const amount = formData.get("amount") as string;
    const currencyFrom = formData.get("currencyFrom") as string;
    const currencyTo = formData.get("currencyTo") as string;
    const errors: Errors = {};
    if (!amount) {
        errors.amount = "Amount is required";
    }
    if (parseInt(amount) <= 0) {
        errors.amount = "number must be greater then 0";
    }
    if (Object.keys(errors).length > 0) {
        return { errors };
    }
    const res = await fetch(`${API_URL}/${API_KEY}/pair/${currencyFrom}/${currencyTo}`);
    const data = await res.json();
    const exchangeRate = data.conversion_rate;
    const convertedAmount = Number(amount) * exchangeRate;
    const chartData = await getHistoricalChartData(currencyTo);
    return {
        convertedAmount,
        chartData,
    };
}
