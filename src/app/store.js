import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from '../features/projects/projectsSlice'
import videosReducer from '../features/videos/videosSlice'

export const store = configureStore({
  reducer: {
    projects:projectsReducer,
    videos: videosReducer,
  },
});
