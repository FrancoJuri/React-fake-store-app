import { types } from "../types/types";


export const cartReducer = (state = [], action) => {
    
    switch (action.type) {
        case types.add:
            return [action.payload, ...state];
        
        case types.incrementQuantity:
            return state.map(product => 
                (product.id === action.payload)
                ? {...product, quantity: product.quantity + 1}
                : state      
            )
        
        case types.decrementQuantity:
            return state.map(product => 
                (product.id === action.payload)
                ? {...product, quantity: product.quantity - 1}
                : state    
            )

        case types.delete:
            return state.filter(product => product.id !== action.payload);

        case types.deleteAll:
            return [];
        
        default:
            return state;
    }

}