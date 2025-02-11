'use client'
import Hours from "@/components/myComponents/hourSelector";
import TimeZoneSelector from "@/components/myComponents/timeZoneSelector";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import TimeZone2 from "@/components/myComponents/timeZone2";
import calculateDif from "../Utils/calculations.js";

export default function Run() {
    const [city, setCity] = useState("");
    const [city2, setCity2] = useState("");
    const [hours, setHours] = useState("");
    const [show, setShow] = useState(false)
    const [newHour, setNewHour] = useState("")

    const logHour = (e) => {
        console.log(e)
        setHours(e)
    }

    const logCity = (e) => {
        setCity(e)
    }

    const logCity2 = (e) => {
        setCity2(e)
    }

    async function getResult(city, city2) {
        console.log(hours)
        console.log(city2)
        let difference = await calculateDif(city, city2);
        let newHour = hours.split(":")[0] - (difference);
        let minutes = hours.split(":")[1];
        let finalTime = newHour + ":" + minutes
        setNewHour(finalTime);
        setShow(!show)
    }

    return (
        <div className="flex flex-col justify-center items-center gap-5 h-80">
            <h1 className="font-bold text-4xl text-center">Choose your Time Zones</h1>
            <div className="flex flex-col md:flex-row justify-center item-center gap-5 flex-wrap">
                <div className="flex flex-col justify-center items-center border rounded p-4 gap-3">
                    <Hours handleChange={logHour}></Hours>
                    <TimeZoneSelector logCity={logCity}></TimeZoneSelector>
                </div>
                <div className="flex flex-col justify-center items-center h-fit md:h-full">
                    <p>convert to</p>
                </div>
                <div className="flex flex-col justify-center items-center border rounded  p-4 gap-3">
                    <TimeZone2 logCity2={logCity2}></TimeZone2>
                    <Button onClick={() => { getResult(city, city2) }}>Convert</Button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                {
                    show && <>
                        < Separator></Separator>
                        <p className="text-center pe-5 ps-5">{hours}hs in {city} are {newHour} in {city2}</p>
                    </>
                }
            </div>
        </div >
    );
}