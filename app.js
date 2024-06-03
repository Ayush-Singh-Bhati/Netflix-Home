// To toggle the navbar background on scroll
window.addEventListener("scroll", function () {

    var nav = document.querySelector(".navbar");
    nav.classList.toggle("active", window.scrollY > 0);
})

const api = "api_key=865affa90b793f9b5453fd23cfed8a6e"

// base url of the site
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";

// request the api's

const requests = {

    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchIndianMovies: `${base_url}/discover/movie?${api}&with_origin_country=IN`, // IN for indian movies
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchAnime: `${base_url}/discover/movie?${api}&with_genres=16`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};


// used to truncate the string

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}


fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())
    .then((data) => {

        const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];

        var banner = document.getElementById("banner-box");
        var banner_title = document.getElementById("banner-title");
        var banner__desc = document.getElementById("banner-desc");


        banner.style.backgroundImage = "url(" + banner_url + setMovie.backdrop_path + ")";
        banner__desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.name;
    })


// movies row Netflix Originals

fetch(requests.fetchNetflixOrignals)
    .then((res) => res.json())
    .then((data) => {


        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);


        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "NETFLIX ORIGINALS";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);



        data.results.forEach((movie) => {

            const movie__info = document.createElement("div");
            movie__info.className = "movie__info";
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            const movie__desc = document.createElement("p");
            movie__desc.className = "movie__desc";
            movie__desc.innerText = truncate(movie.overview, 100);
            const movie__btn = document.createElement("button");
            movie__btn.className = "movie__btn";
            movie__btn.innerText = "Watch Now";

            var s = movie.name.replace(/\s+/g, "");

            poster.id = s;
            poster.src = img_url + movie.poster_path;
            movie__info.appendChild(poster);

            movie__info.appendChild(movie__desc);
            movie__info.appendChild(movie__btn);
            row_posters.appendChild(movie__info);
        });
    })



// Trending movies row
fetch(requests.fetchTrending)
    .then((res) => res.json())
    .then((data) => {


        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);


        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Trending Movies & Shows";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);



        data.results.forEach((movie) => {

            const movie__info = document.createElement("div");
            movie__info.className = "movie__info";
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            const movie__desc = document.createElement("p");
            movie__desc.className = "movie__desc";
            movie__desc.innerText = truncate(movie.overview, 100);
            const movie__btn = document.createElement("button");
            movie__btn.className = "movie__btn";
            movie__btn.innerText = "Watch Now";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            movie__info.appendChild(poster);

            movie__info.appendChild(movie__desc);
            movie__info.appendChild(movie__btn);
            row_posters.appendChild(movie__info);
        });
    })


    // Indian movies row
fetch(requests.fetchIndianMovies)
    .then((res) => res.json())
    .then((data) => {


        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);


        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Indian Movies & Shows";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);



        data.results.forEach((movie) => {

            const movie__info = document.createElement("div");
            movie__info.className = "movie__info";
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            const movie__desc = document.createElement("p");
            movie__desc.className = "movie__desc";
            movie__desc.innerText = truncate(movie.overview, 100);
            const movie__btn = document.createElement("button");
            movie__btn.className = "movie__btn";
            movie__btn.innerText = "Watch Now";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            movie__info.appendChild(poster);

            movie__info.appendChild(movie__desc);
            movie__info.appendChild(movie__btn);
            row_posters.appendChild(movie__info);
        });
    })


// Action movies row
fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    .then((data) => {


        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);


        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Action Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);



        data.results.forEach((movie) => {

            const movie__info = document.createElement("div");
            movie__info.className = "movie__info";
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            const movie__desc = document.createElement("p");
            movie__desc.className = "movie__desc";
            movie__desc.innerText = truncate(movie.overview, 100);
            const movie__btn = document.createElement("button");
            movie__btn.className = "movie__btn";
            movie__btn.innerText = "Watch Now";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            movie__info.appendChild(poster);

            movie__info.appendChild(movie__desc);
            movie__info.appendChild(movie__btn);
            row_posters.appendChild(movie__info);
        });
    })


// Comedy movies row
fetch(requests.fetchComedyMovies)
    .then((res) => res.json())
    .then((data) => {


        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);


        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Comedy Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);



        data.results.forEach((movie) => {

            const movie__info = document.createElement("div");
            movie__info.className = "movie__info";
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            const movie__desc = document.createElement("p");
            movie__desc.className = "movie__desc";
            movie__desc.innerText = truncate(movie.overview, 100);
            const movie__btn = document.createElement("button");
            movie__btn.className = "movie__btn";
            movie__btn.innerText = "Watch Now";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            movie__info.appendChild(poster);

            movie__info.appendChild(movie__desc);
            movie__info.appendChild(movie__btn);
            row_posters.appendChild(movie__info);
        });
    })


// Romance movies row
fetch(requests.fetchRomanceMovies)
    .then((res) => res.json())
    .then((data) => {


        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);


        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Romence Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);



        data.results.forEach((movie) => {

            const movie__info = document.createElement("div");
            movie__info.className = "movie__info";
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            const movie__desc = document.createElement("p");
            movie__desc.className = "movie__desc";
            movie__desc.innerText = truncate(movie.overview, 100);
            const movie__btn = document.createElement("button");
            movie__btn.className = "movie__btn";
            movie__btn.innerText = "Watch Now";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            movie__info.appendChild(poster);

            movie__info.appendChild(movie__desc);
            movie__info.appendChild(movie__btn);
            row_posters.appendChild(movie__info);
        });
    })


    // Anime movies row
fetch(requests.fetchAnime)
.then((res) => res.json())
.then((data) => {


    const headrow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    headrow.appendChild(row);


    const title = document.createElement("h2");
    title.className = "row__title";
    title.innerText = "Animations";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row__posters";
    row.appendChild(row_posters);



    data.results.forEach((movie) => {

        const movie__info = document.createElement("div");
        movie__info.className = "movie__info";
        const poster = document.createElement("img");
        poster.className = "row__posterLarge";

        const movie__desc = document.createElement("p");
        movie__desc.className = "movie__desc";
        movie__desc.innerText = truncate(movie.overview, 100);
        const movie__btn = document.createElement("button");
        movie__btn.className = "movie__btn";
        movie__btn.innerText = "Watch Now";

        var s2 = movie.id;

        poster.id = s2;
        poster.src = img_url + movie.poster_path;
        movie__info.appendChild(poster);

        movie__info.appendChild(movie__desc);
        movie__info.appendChild(movie__btn);
        row_posters.appendChild(movie__info);
    });
})
    

// Horror movies row
fetch(requests.fetchHorrorMovies)
    .then((res) => res.json())
    .then((data) => {


        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);


        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Horror Movies";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);



        data.results.forEach((movie) => {

            const movie__info = document.createElement("div");
            movie__info.className = "movie__info";
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            const movie__desc = document.createElement("p");
            movie__desc.className = "movie__desc";
            movie__desc.innerText = truncate(movie.overview, 100);
            const movie__btn = document.createElement("button");
            movie__btn.className = "movie__btn";
            movie__btn.innerText = "Watch Now";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            movie__info.appendChild(poster);

            movie__info.appendChild(movie__desc);
            movie__info.appendChild(movie__btn);
            row_posters.appendChild(movie__info);
        });
    })


// Documentry movies row
fetch(requests.fetchDocumentaries)
    .then((res) => res.json())
    .then((data) => {


        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");

        row.className = "row";
        headrow.appendChild(row);


        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Documentry";
        row.appendChild(title);

        const row_posters = document.createElement("div");
        row_posters.className = "row__posters";
        row.appendChild(row_posters);



        data.results.forEach((movie) => {

            const movie__info = document.createElement("div");
            movie__info.className = "movie__info";
            const poster = document.createElement("img");
            poster.className = "row__posterLarge";

            const movie__desc = document.createElement("p");
            movie__desc.className = "movie__desc";
            movie__desc.innerText = truncate(movie.overview, 100);
            const movie__btn = document.createElement("button");
            movie__btn.className = "movie__btn";
            movie__btn.innerText = "Watch Now";

            var s2 = movie.id;

            poster.id = s2;
            poster.src = img_url + movie.poster_path;
            movie__info.appendChild(poster);

            movie__info.appendChild(movie__desc);
            movie__info.appendChild(movie__btn);
            row_posters.appendChild(movie__info);
        });
    })