import { ADD_TO_CART } from "../actions/cart";
import CartItem from '../../models/cart-item';
const initialState = {
    items:{},
    totalAmount:0
};

export default (state=initialState,action)=>{
    switch (action.type){
        case ADD_TO_CART:
            const addedProduct = action.payload;
            const price = parseInt(addedProduct.price);
            const title = addedProduct.title;
            let updatedOrNewCartItem;
    if(state.items[addedProduct.id]){
                   updatedOrNewCartItem = new CartItem(
                      state.items[addedProduct.id].quality+1,
                      price,
                      title,
                      state.items[addedProduct.id].sum+price
                  );
             }else{
                 updatedOrNewCartItem = new CartItem(1,price,title,price);
                }
                return {
                    ...state,
                    items:{...state.items,[addedProduct.id]:updatedOrNewCartItem},
                    totalAmount:state.totalAmount+price
                }
            
    }
    return state;
};