import { configureStore } from '@reduxjs/toolkit';
import { addSubscription } from './reducers/subscriptionReducer';

export const store = configureStore({
  reducer: {
      subscription: addSubscription,
  },
  devTools: process.env.NODE_ENV !== "production",
})