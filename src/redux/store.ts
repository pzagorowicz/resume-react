import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducer';

const rootStore = configureStore({
  reducer: {
    app: appReducer,
  },
});

export default rootStore;

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
