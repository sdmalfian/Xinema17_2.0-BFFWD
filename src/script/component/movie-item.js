const ImageUrl = "https://image.tmdb.org/t/p/w500";

class MovieItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render()

    }

    render() {
        const ImageUrl = "https://image.tmdb.org/t/p/w500";
        this.innerHTML = `
        <div class="scene">
            <div class="card">
                <div class="card__face card__face--front">
                    <img class="movie-poster" src="${ImageUrl + this._movie.poster_path}" alt="Poster">
                </div>
                <div class="card__face card__face--back">
                    <div class="movie-info">
                        <p class="movie-title">${this._movie.title}</p>
                        <p>${this._movie.release_date}</p>
                        <p class="vote_average">Rating: ${this._movie.vote_average}</p>
                        <button type="button" class="btn btn-secondary">Back</button>
                    </div>
                    
                </div>
            </div>
        </div>
        `;
    }
}


customElements.define("movie-item", MovieItem);