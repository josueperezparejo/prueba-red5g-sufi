import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogged: JSON.parse(localStorage.getItem('auth')) || false,
    isLoading: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        onLogin: (state) => {
            state.isLogged = true
        },
        onLogout: (state) => {
            state.isLogged = false
        },
        onLoadingStart: (state) => {
            state.isLoading = true
        },
        onLoadingEnd: (state) => {
            state.isLoading = false
        }
    }
});

export const { onLogin, onLogout, onLoadingStart, onLoadingEnd } = userSlice.actions;
export default userSlice.reducer;