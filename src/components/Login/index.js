import { useState } from 'react';
import './Login.scss'
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios({
                method: 'post',
                url: 'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
                headers: {
                    TokenCyberSoft: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNjYiLCJIZXRIYW5TdHJpbmciOiIzMC8wMy8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NDg1OTg0MDAwMDAiLCJuYmYiOjE2MTc1NTU2MDAsImV4cCI6MTY0ODc0NjAwMH0.tGlHI6jAW8M3mO7Dr-d_T9wEx2Vg5Tnw5EKxqahO-6E'
                },
                data: {
                    taiKhoan: username,
                    matKhau: password
                }
            });

            console.log(res.data.content);
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <section className='login'>
            <div className="container">
                <h1 className='title'>Welcome Back</h1>
                <p className='desc'>Enter your credentials to access your account</p>
                <form onSubmit={handleSubmit}>
                    <div className='input-group'>
                        <i class="fa fa-user"></i>
                        <input type="text" name='taiKhoan' placeholder='Vd: haoadmin' value={username} onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className='input-group'>
                        <i class="fa fa-lock"></i>
                        <input type="text" name='matKhau' placeholder='Mật khẩu' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button className='btn-login'>Đăng Nhập</button>
                </form>
            </div>
        </section>
    )
}

export default Login
