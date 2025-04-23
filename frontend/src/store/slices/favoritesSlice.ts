import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritesState {
  favoriteCourseIds: string[];
}

const initialState: FavoritesState = {
  favoriteCourseIds: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const courseId = action.payload;
      const index = state.favoriteCourseIds.indexOf(courseId);
      
      if (index === -1) {
        // Add to favorites
        state.favoriteCourseIds.push(courseId);
      } else {
        // Remove from favorites
        state.favoriteCourseIds.splice(index, 1);
      }
    },
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.favoriteCourseIds = action.payload;
    },
    clearFavorites: (state) => {
      state.favoriteCourseIds = [];
    },
  },
});

export const { toggleFavorite, setFavorites, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer; 