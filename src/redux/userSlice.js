import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getAllUsers = createAsyncThunk('/all-users', async () => {
	const res = await axios.get(
		'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01',
		{
			headers: {
				TokenCyberSoft:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg1OTg0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODc0NjAwMH0.tGlHI6jAW8M3mO7Dr-d_T9wEx2Vg5Tnw5EKxqahO-6E',
			},
		}
	);

	return res.data.content;
});

export const addUser = createAsyncThunk('/add-user', async (user) => {
	const accessToken = JSON.parse(localStorage.getItem('accessToken'));
	const res = await axios({
		method: 'post',
		url: 'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
		headers: {
			TokenCyberSoft:
				'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg1OTg0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODc0NjAwMH0.tGlHI6jAW8M3mO7Dr-d_T9wEx2Vg5Tnw5EKxqahO-6E',
			Authorization: `Bearer ${accessToken}`,
		},
		data: {
			...user,
		},
	});
	return res.data;
});

export const login = createAsyncThunk(
	'/login',
	async ({ username, password }) => {
		const res = await axios({
			method: 'post',
			url: 'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
			headers: {
				TokenCyberSoft:
					'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg1OTg0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODc0NjAwMH0.tGlHI6jAW8M3mO7Dr-d_T9wEx2Vg5Tnw5EKxqahO-6E',
			},
			data: {
				taiKhoan: username,
				matKhau: password,
			},
		});

		localStorage.setItem('accessToken', res.data.content.accessToken);
	}
);

const userSlice = createSlice({
	name: 'user',
	initialState: {
		allUsers: [],
		isLogin: false,
	},
	reducers: {},
	extraReducers: {
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

		[login.pending]: (state) => {
			console.log('Login....');
			state.isLogin = false;
		},
		[login.fulfilled]: (state) => {
			console.log('Login success');
			state.isLogin = true;
		},
		[login.rejected]: (state) => {
			console.log('Login failure');
			state.isLogin = false;
		},

		[addUser.pending]: (state) => {
			state.isFetching = true;
			console.log('Add user to backend');
		},
		[addUser.fulfilled]: (state, action) => {
			state.isFetching = false;
			console.log('Done');
			// state.allUsers = action.payload;
			console.log(action);
		},
		[addUser.rejected]: (state) => {
			state.isFetching = false;
			console.log('Failed to add user');
		},
	},
});
export const userSelector = (state) => state.user.allUsers;

export default userSlice.reducer;
