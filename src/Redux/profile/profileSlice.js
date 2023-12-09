import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {
        email: '',
        firstName: '',
        lastName: '',
        userName: '',
        createdAt: '',
        updatedAt: '',
        id: ''
    },
    reducers: {
        setProfile: (state, action) => {
            const { email, firstName, lastName, userName, createdAt, updatedAt, id } = action.payload;
            state.email = email;
            state.firstName = firstName;
            state.lastName = lastName;
            state.userName = userName;
            state.createdAt = createdAt;
            state.updatedAt = updatedAt;
            state.id = id;
        },
        clearProfile: (state) => {
            state.email = '';
            state.firstName = '';
            state.lastName = '';
            state.userName = '';
            state.createdAt = '';
            state.updatedAt = '';
            state.id = '';
        }
    }
});

export const { setProfile, clearProfile } = profileSlice.actions;

export default profileSlice.reducer;

