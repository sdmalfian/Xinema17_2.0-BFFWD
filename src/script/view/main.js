import '../component/movie-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const movieListElement = document.querySelector(".movies-searched movie-list");
    const movieListElement1 = document.querySelector(".discover-movie movie-list");
    const movieListElement2 = document.querySelector(".upcoming-movie movie-list");
    const movieListElement3 = document.querySelector(".now-playing movie-list");
  
    // Movie-searchable
    const onButtonSearchClicked = () => {
        DataSource.searchMovies(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };
  
    const renderResult = results => {
        movieListElement.movies = results;
    };
  
    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    // Get discover movies
    const getMovies = (path) => {
        DataSource.renderMovies(path)
            .then(renderDiscover)
            .catch(fallbackDiscover)
    };
    
    const renderDiscover = (results) => {
        movieListElement1.movies = results;
    };
    
    const fallbackDiscover = message => {
        movieListElement1.renderError(message);
    };

    /// Now Playing movies
    const getMovieNowPlaying = (path) => {
        DataSource.renderMovies(path)
            .then(renderNowPlaying)
            .catch(fallbackNowPlaying)
    };
    
    const renderNowPlaying = (results) => {
        movieListElement2.movies = results;
    };
    
    const fallbackNowPlaying = message => {
        movieListElement2.renderError(message);
    };

    /// Upcoming Movies
    const getMovieUpcoming = (path) => {
        DataSource.renderMovies(path)
            .then(renderUpcoming)
            .catch(fallbackUpcoming)
    };
    
    const renderUpcoming = (results) => {
        movieListElement3.movies = results;
    };
    
    const fallbackUpcoming = message => {
        movieListElement3.renderError(message);
    };

    //Event Delegation
    document.addEventListener('click', function (event) {
        const target = event.target;
        if (target.tagName.toLowerCase() === 'img') {
            console.log('target: ', target.parentElement.parentElement);
            target.parentElement.parentElement.classList.toggle('is-flipped');   
        }

        if(target.className === 'card__face card__face--back') {
            target.parentElement.classList.toggle('is-flipped');  
        }

        if(target.className === 'btn btn-light') {
            target.parentElement.parentElement.parentElement.classList.toggle('is-flipped');  
        }
    })


    searchElement.clickEvent = onButtonSearchClicked;
    // Show movies
    getMovies('discover/movie');
    getMovieNowPlaying('movie/now_playing');
    getMovieUpcoming('movie/upcoming');
 };

export default main;