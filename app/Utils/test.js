import calculateDif from "./calculations.js"

async function dale(city, city2) {
    console.log(city)
    console.log(city2)
    let difference = await calculateDif(city, city2);
    let newHour = 10 - (difference);
    console.log(newHour)
}

dale("Londres", "Buenos Aires")
