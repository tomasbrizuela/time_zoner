'use client'
import Hours from "@/components/myComponents/hourSelector";
import TimeZoneSelector from "@/components/myComponents/timeZoneSelector";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Run() {
    const [timeZone, setTimeZone] = useState("");
    const [hours, setHours] = useState("");
    const [timeZone2, setTimeZone2] = useState("");
    const [show, setShow] = useState(false)

    const handleChange = (e) => {
        setHours(e)
    }

    return (
        <div className="flex flex-col justify-center items-center gap-5 h-80">
            <h1 className="font-bold text-4xl text-center">Choose your Time Zones</h1>
            <div className="flex flex-col md:flex-row justify-center item-center gap-5 flex-wrap">
                <div className="flex flex-col justify-center items-center border rounded p-4 gap-3">
                    <Hours handleChange={handleChange}></Hours>
                    <TimeZoneSelector></TimeZoneSelector>
                </div>
                <div className="flex flex-col justify-center items-center h-fit md:h-full">
                    <p>convert to</p>
                </div>
                <div className="flex flex-col justify-center items-center border rounded  p-4 gap-3">
                    <TimeZoneSelector></TimeZoneSelector>
                    <Button onClick={() => setShow(!show)}>Convert</Button>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                {
                    show && <>
                        < Separator></Separator>;
                        <p className="text-center pe-5 ps-5">{hours}hs in Pacific Standard Time (PST) are 10:30hs in Korea Standard Time (KST)</p>
                    </>
                }
            </div>
        </div >
    );
}