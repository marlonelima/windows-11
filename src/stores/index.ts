import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./reducers/main.slice";

export const store = configureStore({
  reducer: {
    main: mainSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
