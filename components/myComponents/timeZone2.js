import * as React from "react"
import cities from "@/app/Utils/ciudades"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function SelectScrollable2({ logCity2 }) {
    return (
        <Select onValueChange={logCity2}>
            <SelectTrigger className="w-[280px] h-full">
                <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent className="h-60">
                {cities.map((item, i) => {
                    let name = item.city
                    return <SelectItem key={i} value={name} >{name}</SelectItem>
                })}

            </SelectContent>
        </Select>
    )
}

export default function TimeZone2({ logCity2 }) {
    return (
        <SelectScrollable2 logCity2={logCity2}></SelectScrollable2>
    )
}