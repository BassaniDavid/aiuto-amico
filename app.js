const API_KEY = "aggiungi la tua key qui"

async function fetchData() {
    const response = await fetch("https://api.opeain.com/v1/chat/completions", {
        method: "POST",
        headers: {
            Authorization: `bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-4",
        })
    })
    const data = await response.json()
    console.log(data)
}

fetchData()