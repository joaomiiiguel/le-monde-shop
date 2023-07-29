import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface UserProps {
    name: string | null
    isLogged: boolean
}
const initialState: UserProps ={
    name: null,
    isLogged: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUser(state, {payload}){
            return { ...state, isLogged: true, name: payload }
        },
        logoutUser(state) {
            return { ...state, isLogged: false, name: null }
        },
    }
})

export const { loginUser, logoutUser } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
