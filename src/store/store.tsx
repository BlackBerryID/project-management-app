import { configureStore } from '@reduxjs/toolkit';
import currentBoardSlice from './slices/currentBoardSlice';
import boardListSlice from './slices/boardListSlice';
import signinSignupSlice from './slices/signinSignupSlice';

export const store = configureStore({
  reducer: {
    currentBoard: currentBoardSlice,
    boardList: boardListSlice,
    signinSignup: signinSignupSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
