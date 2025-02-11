import calculateDif from "./calculations.js"

async function dale(city, city2) {
    console.log(city)
    console.log(city2)
    let difference = await calculateDif(city, city2);
    console.log(difference.toString().includes("."))
    console.log(difference.toString().split("."))
    console.log("difference: " + difference)
    let newHour = 1 - (difference);
    console.log(newHour)
}

dale("Birmania", "Buenos Aires")
