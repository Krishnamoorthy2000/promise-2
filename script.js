const form = document.getElementById('searchForm');
const input = document.getElementById('searchInput');
const results = document.getElementById('resultsContainer');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchTerm = input.value.trim();
  if (searchTerm) {
    const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_a4gjr1ku/${searchTerm}`);
    const data = await response.json();
    showMovies(data.results);
  }
});

function showMovies(movies) {
  results.innerHTML = '';
  if (movies.length === 0) {
    results.innerHTML = '<p>No movies found</p>';
  } else {
    movies.forEach((movie) => {
      if (movie.image) {
        const card = document.createElement('div');
        card.classList.add('card');
        const img = document.createElement('img');
        img.src = movie.image;
        img.alt = movie.title;
        card.appendChild(img);
        const title = document.createElement('h3');
        title.textContent = movie.title;
        card.appendChild(title);
        results.appendChild(card);
      }
    });
  }
}
