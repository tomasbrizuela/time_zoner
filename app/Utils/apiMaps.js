import dotenv from 'dotenv';
dotenv.config();
let apiKey = process.env.MAPS_API_KEY
apiKey = "AIzaSyB7wOZBGaoSQzqWxjP119vx5Lrxz_IeJe0"

async function getUTC(latlong) {
    console.log("API KEY IS: " + apiKey)
    let now = Math.floor(Date.now() / 1000);
    let latLongEncoded = encodeURI(latlong);
    let url = `https://maps.googleapis.com/maps/api/timezone/json?location=${latLongEncoded}&timestamp=${now}&key=${apiKey}`
    try {
        let response = await fetch(url);
        let json = await response.json();
        let utc = (json.rawOffset + json.dstOffset) / 3600;
        return utc;
    } catch (e) {
        console.log(e)
    }
}

async function getLatLong(city) {
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${apiKey}`;
    try {
        let response = await fetch(url)
        let json = await response.json()
        let { lat, lng } = json.results[0].geometry.location
        return lat + "," + lng
    } catch (e) {
        console.log(e)
    }
}

async function main(city) {
    let latLong = await getLatLong(city)
    let utc = await getUTC(latLong);
    return utc;
}

export default main;