import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllUsers = createAsyncThunk('/all-users', async () => {
    const res = await axios.get('https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01', {
        headers: {
            TokenCyberSoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg1OTg0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODc0NjAwMH0.tGlHI6jAW8M3mO7Dr-d_T9wEx2Vg5Tnw5EKxqahO-6E'
        }
    });
    return res.data.content
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        allUsers: []
    },
    reducers: {

    }
    , extraReducers: {
        [getAllUsers.pending]: (state) => {
            console.log('Fetching all users from backend');
        },
        [getAllUsers.fulfilled]: (state, action) => {
            console.log('Done');
            state.allUsers = action.payload;
        },
        [getAllUsers.rejected]: (state) => {
            console.log('Failed to get all users');
        },

    }
})
export const userSelector = state => state.user.allUsers

export default userSlice.reducer;