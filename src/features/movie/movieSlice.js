import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trending: null,
  recommend: null,
  original: null,
  newDisney: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.trending = action.payload.trending;
      state.original = action.payload.original;
      state.newDisney = action.payload.newDisney;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisney = (state) => state.movie.newDisney;
export const selectOriginal = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
