import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from "@store/middlewares/logger";
import root from "@store/reducers/root";

const rootPersistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(rootPersistConfig, root);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof root>;
export type AppDispatch = typeof store.dispatch;

export default store;
