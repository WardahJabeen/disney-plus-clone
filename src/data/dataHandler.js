import disneyMoviesData from './movies.json';


export function getMoviesArray() {
    const moviesData = [];


    Object.entries(disneyMoviesData.movies).forEach((movie) => {
        const [key, value] = movie;
        moviesData.push({ id: key, ...value });
    });
    return moviesData;
}


export function getMovies(id) {
    let movieData = {};
    Object.entries(disneyMoviesData.movies).forEach((movie) => {
        const [key, value] = movie;
        if (id === key) {
            movieData = { ...value };
        }
    });


    return movieData;
}
