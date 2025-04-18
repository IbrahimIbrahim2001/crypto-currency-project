"use client";
import { usePathname } from "next/navigation";
import {
    CategoryScale,
    ChartData,
    Chart as ChartJS,
    ChartOptions,
    LinearScale,
    LineElement,
    PointElement,
    TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    TimeScale
);

interface LineChartData extends ChartData<'line'> {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
        borderWidth: number;
        tension: number;
    }[];
}

interface CurrencyExchangeRatesChartProps {
    chartData?: LineChartData;
}



export default function CurrencyExchangeRatesChart({ chartData }: CurrencyExchangeRatesChartProps) {
    const pathName = usePathname();
    const CurrencyPath = pathName.includes("currency");
    const options: ChartOptions<"line"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time Period'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Exchange Rate'
                }
            }
        },
        elements: {
            line: {
                tension: 0.2,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderWidth: 2,
            }
        }
    };
    //     labels: [],
    //     datasets: [{
    //         label: 'Exchange Rate',
    //         data: [],
    //         borderColor: "rgba(75, 192, 192, 1)",
    //         backgroundColor: "rgba(75, 192, 192, 0.2)",
    //         borderWidth: 2,
    //         tension: 0.2
    //     }]
    // };
    const defaultChartData: ChartData<"line"> = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            label: 'Exchange Rate',
            data: [1.2, 1.25, 1.3, 1.35, 1.4, 1.45],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            tension: 0.2
        }]
    };


    return (
        <div className={`${CurrencyPath ? "w-11/12 sm:w-8/12 h-52 flex justify-center mb-2" : "w-1/2 h-36 me-2"} `}>
            {chartData ? (
                <Line data={chartData || defaultChartData} options={options} />
            ) : (
                <div className="flex items-center justify-center h-full">
                    <Line data={defaultChartData} options={options} />
                </div>
            )}
        </div>
    );
};