const API_KEY = "your_api_key";
const submitButton = document.querySelector("#submit");
const outputElement = document.querySelector("#output");
const inputElement = document.querySelector("input");
const historyElement = document.querySelector(".history");
const buttonElement = document.querySelector("button");

function changeInput(value) {
  const inputElement = document.querySelectorAll("input");
  inputElement.value = value;
}

async function getMessage() {
  console.log("clicked");
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "sei uno psicologo professionale ed amichevole",
        },
        { role: "user", content: inputElement.value },
      ],
      max_tokens: 100,
    }),
  };
  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await response.json();
    console.log(data);
    outputElement.textContent = data.choices[0].message.content;
    if (data.choices[0].message.content) {
      const pElement = document.createElement("p");
      pElement.textContent = inputElement.value;
      pElement.addEventListener("click", () => changeInput());
      historyElement.append(pElement);
    }
  } catch (error) {
    console.error(error);
  }
}

submitButton.addEventListener("click", getMessage);
submitButton.addEventListener("click", clearInput);

function clearInput() {
  inputElement.value = "";
}

buttonElement.addEventListener("click", function () {
  outputElement.innerHTML = "";
});
