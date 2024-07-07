// src/store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

export interface ProductData {
    title: string;
    description: string;
    image: string;
    price: number;
}

interface CartItem extends ProductData {
    quantity: number;
    totalPrice: number;
}

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductData>) => {
            const product = action.payload;
            const existingProduct = state.find(item => item.title === product.title);
            if (existingProduct) {
                existingProduct.quantity += 1;
                existingProduct.totalPrice = existingProduct.quantity * existingProduct.price;

            } else {
                state.push({ ...product, quantity: 1, totalPrice: product.price });
            }
            console.log('Cart state:', state);
        },
        // Define other reducers if necessary
    },
});

export const { addToCart } = cartSlice.actions;

// Selectors
export const selectCartItems = (state: RootState) => state.cart;
export const selectCartItemCount = (state: RootState) =>
    state.cart.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);

export default cartSlice.reducer;
