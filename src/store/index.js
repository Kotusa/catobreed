import { configureStore } from '@reduxjs/toolkit';

import { clientApi } from '@api';
import { rootReducer } from '@reducers';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([clientApi.middleware]),
});
