async function getData() {
    const url = "https://restcountries.com/v3.1/all"
    let res = await fetch(url)
    let data = await res.json()
    console.log(data[0].name.common)
}

getData()