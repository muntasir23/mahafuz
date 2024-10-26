import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProjects } from "./projectsAPI";

const initialState = {
  projects: [],
  isLoading: false,
  isError: false,
  error: "",
};

//async thunk
export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async () => {
    const projects = await getProjects();
    return projects;
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.projects = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default projectsSlice.reducer;
