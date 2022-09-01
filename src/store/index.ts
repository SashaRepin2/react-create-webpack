import { combineReducers, configureStore } from "@reduxjs/toolkit";
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

import boardReducer from "./reducers/BoardSlice";
import labelFormReducer from "./reducers/LabelFormSlice";
import labelReducer from "./reducers/LabelSlice";
import listReducer from "./reducers/ListSlice";
import taskReducer from "./reducers/TaskSlice";

const rootPersistConfig = {
    key: "root",
    storage,
    // blacklist: ["boardReducer"],
};

const boardPersistConfig = {
    key: "board",
    storage,
    blacklist: ["error", "status"],
};

const rootReducer = combineReducers({
    boardReducer,
    listReducer,
    taskReducer,
    labelReducer,
    labelFormReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
