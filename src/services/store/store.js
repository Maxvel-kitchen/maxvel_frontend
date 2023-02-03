import { compose, configureStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import persistedReducer from "redux-persist/es/persistReducer";

/* Устанавливаем Redux DevTools */
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

/* Объединяем усилители в один общий усилитель */
const enhancer = composeEnhancers(applyMiddleware(thunk));

/* Создаем store, корневым редьюсером является persistedReducer */
const store = configureStore(persistedReducer, enhancer);

/* Создаем дубликат store для redux-persist */
const persistor = persistStore(store);

export default { store, persistor };
