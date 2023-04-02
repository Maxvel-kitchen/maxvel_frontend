import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { menuReducer } from "./main-menu-slice";
// import counterReducer from "./counter-reducer";
import { cartReducer } from "./cart-slice";

/* Объединяем редьюсеры в один общий редьюсер */
const rootReducer = combineReducers({
  cart: cartReducer,
  menu: menuReducer,
});

/* Устанавливаем Redux DevTools */
// const composeEnhancers =
//  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//    : compose;

/* Объединяем усилители в один общий усилитель */
// const enhancer = composeEnhancers(applyMiddleware(thunk));

/* Объявляем сонфигуряцию для redux-persist */
const persistConfig = {
  key: "root",
  storage: localStorage,
};

/* Создаем корневой редьюсер для redux-persist */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/* Создаем store, корневым редьюсером является persistedReducer */
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

/* Создаем дубликат store для redux-persist */
const persistor = persistStore(store);

export { store, persistor, rootReducer };
