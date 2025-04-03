"use client";
import CurrencyList from 'currency-list';
import { useMemo } from 'react';

interface currencyExchangeFormProps {
    disabled?: boolean,
    name: string,
    convertedAmount?: number,
    errorMsg?: string,
}

export default function CurrencyExchangeForm({ disabled = false, name, convertedAmount, errorMsg }: currencyExchangeFormProps) {
    const options = useMemo(() => (
        Object.values(CurrencyList.getAll('en_US')).map((ele) => ({
            value: ele.code,
            label: `${ele.name}`,
        })
        )), [])
    return (
        <div className='w-full grid grid-cols-3 mb-2 me-3'>
            <input type="text" placeholder='amount' name='amount' className='col-span-2 bg-main-background dark:bg-dark-background dark:border dark:border-e-0 disabled:dark:border-e rounded-md rounded-e-none focus:outline-0
             px-2.5 h-10 disabled:bg-gray-200 dark:disabled:bg-gray-700' disabled={disabled} value={convertedAmount} />
            <div className='col-span-1'>
                <select title='currencies' name={name} defaultValue={"USD"} className='px-2.5 py-1 bg-gray-50 border border-gray-300 text-gray-900
                 text-sm focus:ring-blue-500 focus:border-0 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:border dark:border-s-0
                rounded-e-lg scrollbar-hidden  h-10 rounded-md rounded-s-none'>
                    {options.map((ele, index) => (
                        <option key={index} value={ele.value}>
                            <span className="text-sm text-gray-700 dark:text-gray-200 overflow-y-scroll inline-flex items-center 
                            w-full px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                {ele.label}
                            </span>
                        </option>
                    ))}
                </select>

            </div>
            {!disabled && errorMsg &&
                <p className='col-span-3 ps-3 text-red-500 opacity-80 text-sm'>{errorMsg}</p>
            }
        </div >
    );
}
