import {configureStore} from "@reduxjs/toolkit";
import {medalsAPI} from "@/services/medals/medalsApi";

export const store = configureStore({
    reducer: {
        [medalsAPI.reducerPath]: medalsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(medalsAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
