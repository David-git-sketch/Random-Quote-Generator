const btnEl= document.getElementById("getQuote");
const Quote= document.getElementById("quote");
const Author= document.getElementById("author");

const apiUrl= "https://api.quotable.io/random";

async function getQuote(){
    try {
        btnEl.innerText="Loading...";
        btnEl.disabled = true;
        Quote.innerText="Upadating...";
        const response = await fetch(apiUrl);
        const data= await response.json();
        Quote.innerText= data.content;
        Author.innerText= "~" + data.author;
        btnEl.innerText="Get Quote";
        btnEl.disabled = false;

        console.log(data);
    } catch (error) {
        console.log(error);
        Quote.innerText="An error occurred please try again later";
        Author.innerText="Error";
    }
    
}

getQuote();

btnEl.addEventListener("click", getQuote);