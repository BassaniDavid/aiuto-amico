const API_KEY = "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"

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