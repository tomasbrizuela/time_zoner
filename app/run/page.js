import Hours from "@/components/myComponents/hourSelector";
import TimeZoneSelector from "@/components/myComponents/timeZoneSelector";
import { Button } from "@/components/ui/button";
import { ReplaceIcon, Rotate3dIcon, RotateCwIcon } from "lucide-react";

export default function Run() {
    return (
        <div className="flex flex-col justify-center items-center gap-5 h-80">
            <h1 className="font-bold text-4xl">Choose your Time Zones</h1>
            <div className="flex flex-row justify-center item-center gap-5">
                <div className="flex flex-col justify-center items-center border rounded p-4 gap-3">
                    <Hours ></Hours>
                    <TimeZoneSelector></TimeZoneSelector>
                </div>
                <div className="flex flex-col justify-center items-center h-full">
                    <p>convert to</p>
                </div>
                <div className="flex flex-col justify-center items-center border rounded  p-4 gap-3">
                    <TimeZoneSelector></TimeZoneSelector>
                    <Button >Convert</Button>
                </div>
            </div>
        </div>
    );
}