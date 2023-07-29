import {configureStore} from '@reduxjs/toolkit'
import loginUser from './slices/userSlice'
import shoppingCart from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        user: loginUser,
        cart: shoppingCart
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


