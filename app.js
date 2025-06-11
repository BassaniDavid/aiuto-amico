const API_KEY = "inserisci qui la tua API KEY"
const submitButton = document.querySelector('#submit');
const outputElement = document.querySelector('#output');
const inputElement =document.querySelector('input');

async function getMessage() {
    console.log("clicked")
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{role: "user",content: "hello!"}],
        max_tokens:100
        })
    }
    try{
        const response = await fetch('https://api.openai.com/v1/chat/completions', options)
        const data = await response.json()
        console.log(data)
        outputElement.textContent= data.choices[0].message.content
    } catch (error){
        console.error(error)
    }

}

submitButton.addEventListener('click', getMessage);