import React from 'react';
import { createStore,combineReducers } from 'redux';
import {Provider} from 'react-redux';
import ShopNavigator from './navigation/ShopNavigator';
import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';

const rootReducer = combineReducers({
  products:productsReducer,
  cart:cartReducer,
});

const store = createStore(rootReducer);
export default function App() {

  return(
    <Provider store={store}>
      <ShopNavigator/>
    </Provider>
  )
}