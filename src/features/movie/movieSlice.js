import { createSlice } from "@reduxjs/toolkit"

//states
const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload;
        }
    }
})

export const { setMovies } = movieSlice.actions;
export const selectMovies = (state) => state.movie.movies //selectMovies is the conventional name where selectOBJECT_FROM_STATE_NAME(from line 4) And then .movie comes from  line 8 (name="movie") and .movies comes from line 4 (movies: [])
export default movieSlice.reducer;