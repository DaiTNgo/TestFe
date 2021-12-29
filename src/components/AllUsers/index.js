import { userSelector, getAllUsers } from '../../redux/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import Navbar from '../Navbar';
import './AllUsers.scss'
function AllUsers() {
    const dispatch = useDispatch();
    const users = useSelector(userSelector);
    useEffect(() => {
        dispatch(getAllUsers());
    }, [])
    return (
        <section className='all_users'>
            <div className="container">
                <Navbar />
                <div className="wrapper-pd">
                    <div className="header">
                        <h1 className='title'>Users</h1>
                        <button>Create User</button>
                    </div>
                    <div className="amount_user">38 users</div>
                    <div className="search">
                        <i className="fa fa-search"></i>
                        <input type="text" />
                    </div>
                    <div className="sticky">
                        <table>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Họ Và Tên</th>
                                    <th>Mã Loại Người Dùng</th>
                                    <th>Mật Khẩu</th>
                                    <th>Số Điện Thoại</th>
                                    <th>Tài Khoản</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.slice(0, 10).map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{
                                                    user.email
                                                }
                                                </td>
                                                <td>{
                                                    user.hoTen
                                                }
                                                </td>
                                                <td>{
                                                    user.maLoaiNguoiDung
                                                }
                                                </td>
                                                <td>{
                                                    user.matKhau
                                                }
                                                </td>
                                                <td>{
                                                    user.soDt
                                                }
                                                </td>
                                                <td>{
                                                    user.taiKhoan
                                                }
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AllUsers
