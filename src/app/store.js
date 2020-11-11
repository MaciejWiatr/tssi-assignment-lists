import {
    combineReducers,
    configureStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";
import listsHistoryReducer from "../features/listsHisotry/listsHistorySlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};

const storage =
    typeof window !== "undefined"
        ? createWebStorage("local")
        : createNoopStorage();

const persistConfig = {
    key: "root",
    version: 1,
    storage,
};

const rootReducer = combineReducers({
    listHistory: listsHistoryReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
