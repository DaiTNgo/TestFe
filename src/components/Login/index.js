import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';
import './Login.scss';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const handleSubmit = async (e) => {
		e.preventDefault();
		dispatch(login({ username, password }));
	};

	return (
		<section className='login'>
			<div className='container'>
				<h1 className='title'>Welcome Back</h1>
				<p className='desc'>Enter your credentials to access your account</p>
				<form onSubmit={handleSubmit}>
					<div className='input-group'>
						<i className='fa fa-user'></i>
						<input
							type='text'
							name='taiKhoan'
							placeholder='Vd: haoadmin'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className='input-group'>
						<i className='fa fa-lock'></i>
						<input
							type='text'
							name='matKhau'
							placeholder='Mật khẩu'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<button className='btn-login'>Đăng Nhập</button>
				</form>
			</div>
		</section>
	);
}

export default Login;
