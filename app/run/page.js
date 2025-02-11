'use client'
import Hours from "@/components/myComponents/hourSelector";
import TimeZoneSelector from "@/components/myComponents/timeZoneSelector";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
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

    useEffect(() => {
        if (
            hours && city && city2
        ) {
            getResult(city, city2)
        }
    }, [city, city2, hours])

    async function getResult(city, city2) {
        console.log("Change")
        let difference = await calculateDif(city, city2);
        let oldHour = hours.split(":")[0]
        let newHour = oldHour - difference.toString().split(".")[0];
        let minutes = hours.toString().split(":")[1];
        console.log(minutes)
        console.log(newHour)
        if (newHour < 0) {
            newHour = 24 + newHour
            if (minutes == 0 && difference.toString().split(".")[1] == 5) {
                newHour = newHour - 1
            }
        } if (newHour > 24) {
            newHour = (24 - newHour) * -1
        }

        if (difference.toString().includes(".")) {
            if (minutes == 0) {
                minutes = "30"
            } else {
                minutes = "00"
            }
        }
        let finalTime = newHour + ":" + minutes
        setNewHour(finalTime);
        if (!show) {
            setShow(true)
        }
    }

    return (
        <div className="flex flex-col justify-center items-center gap-5 h-80">
            <h1 className="font-bold text-4xl text-center">Choose your Cities</h1>
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
                    show ? <>
                        {/* < Separator></Separator> */}
                        <p className="text-center pe-5 ps-5"><strong>{hours}</strong> hs in <span className="underline">{city}</span> is <strong>{newHour}</strong> hs in <span className="underline">{city2}</span></p>
                    </> : <div><p><br></br></p></div>
                }
            </div>
        </div >
    );
}