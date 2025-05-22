import { useState } from "react";
import styles from "./style.module.css";

type FormProps = {
    children?: React.ReactNode;
};

// Define valid currency types to avoid TypeScript errors
type CurrencyType = 'dolar' | 'euro' | 'real' | 'libra' | 'iene';

let conversionRates = {
    dolar: 5.25,
    euro: 5.70,
    real: 1,
    libra: 6.20,
    iene: 0.037
};

export default function Form({ children }: FormProps) {
    const [result, setResult] = useState<string>('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const value = (document.getElementById("valor") as HTMLInputElement).value;
        const currency = (document.getElementById("moeda") as HTMLSelectElement).value as CurrencyType;
        const resultCurrency = (document.getElementById("resultadoMoeda") as HTMLSelectElement).value as CurrencyType;

        const resultContainer = document.getElementById("resultado");
        
        const convertedValue = convertCurrency(value, currency, resultCurrency);
        
        if (resultContainer) {
            resultContainer.textContent = `${value} ${currency} = ${convertedValue} ${resultCurrency}`;
            setResult(`${value} ${currency} = ${convertedValue} ${resultCurrency}`);
        }
    };

    function convertCurrency(value: string, currency: CurrencyType, resultCurrency: CurrencyType): string {
        
        const convertedValue = (parseFloat(value) * conversionRates[currency]) / conversionRates[resultCurrency];
        return convertedValue.toFixed(2);
    }

    return (
        <>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="valor">Enter the value</label>
                    <input type="text" id="valor" required />

                    <label htmlFor="moeda">Select currency</label>
                    <select id="moeda">
                        <option value="dolar">Dólar</option>
                        <option value="euro">Euro</option>
                        <option value="real">Real</option>
                        <option value="libra">Libra</option>
                        <option value="iene">Iene</option>
                    </select>

                    <span>To</span>

                    <label htmlFor="resultadoMoeda">
                        Select the currency you want to see the result for
                    </label>
                    <select name="resultado" id="resultadoMoeda">
                        <option value="dolar">Dólar</option>
                        <option value="euro">Euro</option>
                        <option value="real">Real</option>
                        <option value="libra">Libra</option>
                        <option value="iene">Iene</option>
                    </select>

                    <button type="submit" className={styles.convertButton}>Convert</button>
                </form>
            </div>

            <div id="resultado" className={styles.resultContainer}>
                {result && <p>{result}</p>}
            </div>
        </>
    );
}