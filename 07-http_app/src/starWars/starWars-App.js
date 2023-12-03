/**
 * 
 * @returns {Promise<Object>}
 */
const fetchQuote = async () => {

    const value = Math.floor(Math.random() * 10) +1
    const res = await fetch(`https://swapi.dev/api/people/${value}/`);
    const data = await res.json();

    return data;

};

/**
 * 
 * @param {String} element 
 */
export const starWarsApp = async (element) => {

    document.querySelector('#app-title').innerHTML = 'StarWars-App';
    element.innerHTML = 'Loading...';

    const nameLabel = document.createElement("blockquote");
    const genderLabel = document.createElement("blockquote");
    const birthYearLabel = document.createElement("blockquote");
    const nextQuoteButton = document.createElement("button");
    nextQuoteButton.innerText = 'Next quote';

    const renderQuote = (data) => {
        nameLabel.innerHTML = `Name: ${data.name}`;
        genderLabel.innerHTML = `Gender: ${data.gender}`;
        birthYearLabel.innerHTML = `Birth year: ${data.birth_year}`;

        element.replaceChildren(nameLabel,genderLabel, birthYearLabel ,nextQuoteButton)

    };

    nextQuoteButton.addEventListener("click",() => {
        starWarsApp(element);
    });

/*     nextQuoteButton.addEventListener("click", async () => {
        element.innerHTML = 'Loading...';
        const quote = await fetchQuote();
        renderQuote(quote);
    }); */

    fetchQuote()
        //.then(data => renderQuote(data));
        .then(renderQuote);
}