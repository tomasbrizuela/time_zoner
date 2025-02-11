import main from "./apiMaps.js";

async function calculateDif(city, city2) {
    let utc = await main(city);
    let utc2 = await main(city2);
    let difference = (utc) - (utc2);
    return difference;
}

export default calculateDif;