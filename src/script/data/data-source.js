const API_Key = "dc8374e8cedc544b560d1be8d712d302";

class DataSource {
    static searchMovies(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=dc8374e8cedc544b560d1be8d712d302&language=en-US&query=${keyword}&page=1&include_adult=false`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }

    static renderMovies(path) {
        this.path = path;
        return fetch(`https://api.themoviedb.org/3/${path}?api_key=dc8374e8cedc544b560d1be8d712d302&language=en-US&page=1`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`Error: `, results);
            }
        })
    }
 }
  
 export default DataSource;