const apiKey = "api_key=381bcd8ce3b8e3204a448c8640f81155";
const imgURL = "https://image.tmdb.org/t/p/w500";
const main = document.querySelector("#main");
const searchBar = document.querySelector('#search')
const movies = {
  apiKey: "api_key=381bcd8ce3b8e3204a448c8640f81155",
  fetchMovies:function () {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by-popularity.desc&" +
        apiKey
    )
      .then((response) => response.json())
      .then((data) => {console.log(data.results);
      showMovies(data.results);
  });
  },
};


function showMovies(data) {
  main.innerHTML = "";

  data.forEach((movies) => {
    const { title, poster_path, vote_average, overview} = movies;
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");
    movieElement.innerHTML= `
            <img
            src="${imgURL + poster_path}"
            alt="${title}"
            />

            <div class="movie-info">
            <h3>${title}</h3>
            <span>${vote_average}</span>
            </div>

            <div class="overview">
            ${overview};
            </div>
        
        `;
     main.appendChild(movieElement);
  });
}
movies.fetchMovies();
