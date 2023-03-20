const button = document.querySelector(".button")
const apiURL = "https://api.quotable.io/quotes/random";
const quote = document.querySelector(".quote")
const author = document.querySelector(".author")
const span = document.querySelector(".span")



const getQuote = async() => {
    try {
        quote.innerText = "Loading";
        author.innerText = ""
        span.innerText = ""
        button.innerText = "Updating";
        button.disabled = true
    const response = await fetch(apiURL);
        const data = await response.json()
        button.disabled = false;
    const quotecontent = data[0].content;
    const authorcontent = data[0].author
        quote.innerText = quotecontent;
        span.innerText = "~ "
        author.innerText = authorcontent
        button.innerText = "Get Quote";
    } catch (error) {
        quote.innerText = "There is an Error, Please try again later"
        author.innerText = "error"
        button.innerText = "Get Quote";
    }
}




getQuote();

button.addEventListener("click", getQuote)
//https://api.quotable.io/random