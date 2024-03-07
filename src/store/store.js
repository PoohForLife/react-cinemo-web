import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./reducer";

export default configureStore({
    reducer: {
        movies: movieSlice,
        bookmarks: movieSlice,
    },
});