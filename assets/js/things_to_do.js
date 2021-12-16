/* Funciton to handle the submit */
function handleSubmit(event) {
  event.preventDefault();
  const input = document.querySelector(".form-control").value;
  const searchQuery = input.trim(); //removing white spaces
  fetchResults(searchQuery); // fetch result and call search query
}

/* fetch response to wiki query */
function fetchResults(searchQuery) {
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=${searchQuery}`;
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      const results = data.query.search;
      displayResults(results);
    });
}

/* Capture the result when search is click */
function displayResults(results) {
  const searchResults = document.querySelector(".searchResults");
  searchResults.innerHTML = ""; //remove child element

  /* Results array loop */
  results.forEach((result) => {
    const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);

    searchResults.insertAdjacentHTML(
      "beforeend",
      `<div class="resultItem">
        <h3 class="resultItem-title">
          <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
        </h3>
        <span class="resultItem-snippet">${result.snippet}</span><br>
        <a href="${url}" class="resultItem-link" target="_blank" rel="noopener">${url}</a>
      </div>`
    );
  });
}

/*  Search Query */
const form = document.querySelector(".searchForm");
form.addEventListener("submit", handleSubmit);
