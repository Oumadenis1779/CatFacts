const catFactElement = document.getElementById('cat-fact');
const refreshButton = document.getElementById('refresh-button');


function fetchCatFact() {
    fetch("https://meowfacts.herokuapp.com/",{
        method :"GET",
    })
        .then(response => response.json())
        .then(data => {
            catFactElement.innerText = data.data;
        })
        .catch(error => {
            console.error('Error fetching cat facts:', error);
            catFactElement.innerText = 'Failed to fetch cat facts. Please try again later.';
        });
}

// Fetch cat fact when the page loads
fetchCatFact();

// Fetch a new cat fact when the button is clicked
refreshButton.addEventListener('click', fetchCatFact);

