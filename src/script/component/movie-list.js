import './movie-item.js';
     
class MovieList extends HTMLElement {
    
    //Fungsi set movies digunakan untuk menetapkan properti this._movies pada class ini. Nantinya properti tersebut akan digunakan pada fungsi render dalam membuat custom element <movie-item>.
    set movies(movies) {
       this._movies = movies;
       this.render();
   }
 
   renderError(message) {
       this.innerHTML = "";
       this.innerHTML += `
       <h2 class="placeholder" style="color:white">Search ${message}</h2>
       `;
   }
   
   render() {
       this.innerHTML = "";
       this._movies.forEach(movie => {
           const movieItemElement = document.createElement("movie-item");
           movieItemElement.movie = movie;
           // memasukkan result hanya jika movie punya poster dan rating
           if (movie.poster_path && movie.vote_average) {
               this.appendChild(movieItemElement);
           }  
       });
   }
}
 
customElements.define("movie-list", MovieList);