import { useEffect, useState } from "react";
import { LightProps } from "../types";

const Light = ({ color, on }: LightProps) => {
    return (
        <div>
            {on ?
                <div style={{ borderRadius: "100px", height: "100px", width: "100px", backgroundColor: color }}></div>
                :
                <div style={{ borderRadius: "100px", height: "100px", width: "100px", backgroundColor: "black" }}></div>
            }
        </div>
    )
}

export const Opdracht3 = () => {
    const [verkeerslichtStand, setVerkeerslichtStand] = useState<boolean[]>([true,false,false]);
    useEffect(() => {
        let handle = setInterval(() => {
        }, 1000);

        return () => {
            clearInterval(handle);
        }
    }, [1000]);
    return (
        <div style={{ backgroundColor: "black", width: "100px", height: "300px", borderRadius: "10px", padding: "10px" }}>
            <Light color={"red"} on={verkeerslichtStand[0]}></Light>
            <Light color={"orange"} on={verkeerslichtStand[1]}></Light>
            <Light color={"green"} on={verkeerslichtStand[2]}></Light>
        </div>
    );
}