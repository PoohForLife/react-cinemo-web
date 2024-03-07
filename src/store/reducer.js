import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: [],
    bookmarks: [],
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        fetchMovies: (state, aciton) => {
            state.movies = aciton.payload;
            if (state.movies != null && state) {
                state.bookmarks = state.movies.filter(movie => movie.isBookmarked);
                setAllMovies(state.movies);
            }
        },
        addMovies: (state, action) => {
            state.movies = action.payload.map(movie => ({
                ...movie,
                isBookmarked: false,
            }))
            setAllMovies(state.movies);
        },
        toggleBookmark: (state, action) => {
            setUserSession(action.payload);
            const isBookmarkExists = state.bookmarks.some(bookmark => bookmark.id === action.payload.id);
            if (isBookmarkExists) {
                state.bookmarks = state.bookmarks.filter(bookmark => bookmark.id !== action.payload.id);
            } else {
                state.bookmarks.push(action.payload);
            }
            state.movies = state.movies.map(movie => movie.id === action.payload.id ? { ...movie, isBookmarked: !isBookmarkExists } : movie);
            setAllMovies(state.movies);
        },
        addBookmark: (state, action) => {
            const isBookmarkExists = state.bookmarks.some(bookmark => bookmark.id === action.payload.id);
            if (!isBookmarkExists) {
                state.bookmarks.push(action.payload);
            }
            state.movies = state.movies.map(movie => movie.id === action.payload.id ? { ...movie, isBookmarked: true } : movie);
            setAllMovies(state.movies);
        },
        clearData: (state) => {
            clearUserSession();
            state.movies = [];
            state.bookmarks = [];
        }
    }
})

const setAllMovies = (movies) => {
    sessionStorage.setItem('allMovies', JSON.stringify(movies));
}

const setUserSession = (movie) => {
    const bookmark = JSON.parse(sessionStorage.getItem('user'))?.bookmark || []
    if (movie.isBookmarked) {
        sessionStorage.setItem('user', JSON.stringify({
            username: JSON.parse(sessionStorage.getItem('user')).username,
            password: JSON.parse(sessionStorage.getItem('user')).password,
            bookmark: bookmark.filter(bm => bm.id !== movie.id)
        }))
    } else {
        sessionStorage.setItem('user', JSON.stringify({
            username: JSON.parse(sessionStorage.getItem('user')).username,
            password: JSON.parse(sessionStorage.getItem('user')).password,
            bookmark: [...bookmark, movie]
        }))
    }
}

const clearUserSession = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('allMovies');
}

export const { fetchMovies } = movieSlice.actions;
export const { addMovies } = movieSlice.actions;
export const { getMovieById } = movieSlice.actions;
export const { toggleBookmark } = movieSlice.actions;
export const { addBookmark } = movieSlice.actions;
export const { clearData } = movieSlice.actions;
export default movieSlice.reducer;