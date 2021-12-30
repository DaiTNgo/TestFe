import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { addUser } from '../../redux/userSlice';
import './CreateUser.scss';

let schema = yup.object().shape({
	hoTen: yup.string().required('Không được bỏ trống'),
	taiKhoan: yup.string().required('Không được bỏ trống'),
	matKhau: yup.string().required('Không được bỏ trống'),
	soDt: yup.string().required('Không được bỏ trống'),
	maNhom: yup.string().required('Không được bỏ trống'),
	email: yup
		.string()
		.email('Email không hợp lệ')
		.required('Không được bỏ trống'),
});

function CreateUser() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({ resolver: yupResolver(schema) });
	const dispatch = useDispatch();
	const onSubmit = async (data) => {
		dispatch(addUser(data));
		reset();
	};

	return (
		<section className='addUser'>
			<div className='container'>
				<h1>Thêm người dùng</h1>
				<form onSubmit={handleSubmit(onSubmit)} className='form_controller'>
					<label>
						Họ và tên:
						<input
							type='text'
							{...register('hoTen')}
							placeholder='nguyen thi example'
							name='hoTen'
						/>
						<span style={{ color: 'red' }}>{errors.hoTen?.message}</span>
					</label>
					<label>
						Tài khoản:
						<input
							type='text'
							{...register('taiKhoan')}
							placeholder='example'
							name='taiKhoan'
						/>
						<span style={{ color: 'red' }}>{errors.taiKhoan?.message}</span>
					</label>
					<label>
						Mật khẩu:
						<input
							type='password'
							{...register('matKhau')}
							placeholder='example123'
							name='matKhau'
						/>
						<span style={{ color: 'red' }}>{errors.matKhau?.message}</span>
					</label>
					<label>
						Email:
						<input
							type='text'
							{...register('email')}
							placeholder='example@gmail.com'
							name='email'
						/>
						<span style={{ color: 'red' }}>{errors.email?.message}</span>
					</label>
					<label>
						Số điện thoại:
						<input
							type='text'
							{...register('soDt')}
							placeholder='0935 966 911'
							name='soDt'
						/>
						<span style={{ color: 'red' }}>{errors.soDt?.message}</span>
					</label>
					<label>
						Mã nhóm:
						<input
							type='text'
							{...register('maNhom')}
							placeholder='1'
							name='maNhom'
						/>
						<span style={{ color: 'red' }}>{errors.maNhom?.message}</span>
					</label>
					<label>
						Mã loại người dùng:
						<select
							name='maLoaiNguoiDung'
							{...register('maLoaiNguoiDung')}
							defaultValue={0}>
							<option value='0' disabled>
								Chon
							</option>
							<option value='QuanTri'>QuanTri</option>
							<option value='KhachHang'>KhachHang</option>
						</select>
					</label>
					<button>Thêm</button>
					<Link
						to={'/laydanhsachnguoidung'}
						style={{ marginTop: '1rem', marginLeft: 'auto' }}>
						Danh sách người dùng
					</Link>
				</form>
			</div>
		</section>
	);
}

export default CreateUser;
