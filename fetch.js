const url = "https://worldtimeapi.org/api/timezone/America/New_york"
async function getData(){
    const response = await fetch(url)
    const data = await response.json
    console.log(data)
}

getData()