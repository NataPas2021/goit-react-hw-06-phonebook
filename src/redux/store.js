import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';

// import contactsReducer from './contacts/contacts-slice';
// import filterReducer from './filter/filter-slice';

// const store = configureStore({
//     reducer: {
//         contacts: contactsReducer,
//         filter: filterReducer,
//     }
// })

export const store = configureStore({
    reducer: rootReducer,
});

export const persistor = persistStore(store);
