import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import mainMenuReducer from "./main-menu-reducer";

/* Объединяем редьюсеры в один общий редьюсер */
const rootReducer = combineReducers({
  mainMenuReducer,
});


/* Устанавливаем Redux DevTools */
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

/* Объединяем усилители в один общий усилитель */    
const enhancer = composeEnhancers(applyMiddleware(thunk));

/* Объявляем сонфигуряцию для redux-persist */
const persistConfig = {
  key: "root",
  storage,
};

/* Создаем корневой редьюсер для redux-persist */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/* Создаем store, корневым редьюсером является persistedReducer */
const store = createStore(persistedReducer, enhancer);

/* Создаем дубликат store для redux-persist */
const persistor = persistStore(store);

export { store, persistor };
