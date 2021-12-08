import { ResumeModel } from './../types/resume';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface AppState {
  resume: ResumeModel | undefined;
}

const initialState: AppState = {
  resume: undefined,
};

export const appReducer = createSlice({
  name: 'app',
  initialState,
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library,
  // which detects changes to a "draft state" and produces a brand new
  // immutable state based off those changes
  reducers: {
    updateResume: (state, action: PayloadAction<ResumeModel>) => {
      state.resume = action.payload;
    },
  },
});

export const { updateResume } = appReducer.actions;

export const selectResume = (state: RootState) => state.app.resume;

export default appReducer.reducer;
