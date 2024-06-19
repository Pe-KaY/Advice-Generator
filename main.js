const displayAdvice = document.getElementById("displayadvice")
const adviceId = document.getElementById("adviceId")
const btn = document.getElementById("adbutton")

// fetch function
const fetchAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice")
    if (!response.ok) {
      throw new Error("Network Error")
    }
    const data = await response.json()
    console.log(data)
    displayAdvice.textContent = data["slip"]["advice"]
    adviceId.textContent = `ADVICE #${data["slip"]["id"]}`
  } catch (error) {
    console.error(`Error: ${error}`)
  }
}

//calls the fetch on load
fetchAdvice()

// attach event litener to button
btn.addEventListener("click", fetchAdvice)
