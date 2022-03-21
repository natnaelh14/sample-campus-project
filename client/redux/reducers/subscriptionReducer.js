import { createSlice } from "@reduxjs/toolkit";
import { nextLocalStorage } from '../../utils/utils';

const subscriptionFromStorage = nextLocalStorage()?.getItem('subscription')
  ? JSON.parse(nextLocalStorage()?.getItem('subscription'))
  : [];

export const initialState = {
    subscription: subscriptionFromStorage,
};

const slice = createSlice({
    name: 'subscription',
    initialState: initialState,
    reducers: {
      addSubscription: (state, action) => {
        state.subscription.push(action.payload);
        nextLocalStorage()?.setItem('subscription', JSON.stringify(action.payload))
      },
    },
  });

  export const { addSubscription } = slice.actions;
  export default slice.reducer;