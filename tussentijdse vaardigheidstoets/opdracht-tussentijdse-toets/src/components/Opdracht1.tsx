import { useState } from "react";


export const Opdracht1 = () => {
    const [celcius, setCelcius] = useState<number>(25);
    const [fahrenheit, setFahrenheit] = useState<number>(77);
    const CelciusToFahrenheit = () => {
        let fahrenheit;
        fahrenheit = (celcius * 9 / 5) + 32
        return fahrenheit;
    }
    const FahrenheitToCelcius = () => {
        let celcius;
        celcius = (fahrenheit - 32) * 5 / 9
        return celcius;
    }
    return (
        <>
            <h1>Oefening 1</h1>
            <div>
                <label>Celcius</label>
                <input type="number" value={celcius} onChange={(event) => (setCelcius(parseInt(event.target.value)))}/>
                <button onClick={() => (setCelcius(FahrenheitToCelcius()))}>&lt;&lt;</button>
                <button onClick={() => (setFahrenheit(CelciusToFahrenheit()))}>&gt;&gt;</button>
                <input type="number" value={fahrenheit} onChange={(event) => (setFahrenheit(parseInt(event.target.value)))}/>
                <label>Fahrenheit</label>
            </div>
        </>
    );
}