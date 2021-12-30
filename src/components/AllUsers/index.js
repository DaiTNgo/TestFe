import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllUsers, userSelector } from '../../redux/userSlice';
import Navbar from '../Navbar';
import './AllUsers.scss';
function AllUsers() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllUsers());
	}, []);

	const arrUserFromBe = useSelector(userSelector);

	const [index, setIndex] = useState(0);
	const [users, setUsers] = useState([]);

	const length = users.length;

	useEffect(() => {
		setUsers(arrUserFromBe);
	}, [arrUserFromBe.length]);

	const handleSlideIncrease = () => {
		if (index < Math.ceil(length / 10) - 1) setIndex((prev) => prev + 1);
	};

	const handleSlideDecrease = () => {
		if (index > 0) setIndex((prev) => prev - 1);
	};

	const handleSearch = (e) => {
		setUsers(
			arrUserFromBe.filter((user) => user.taiKhoan.includes(e.target.value))
		);
		setIndex(0);
	};
	return (
		<section className='all_users'>
			<div className='container'>
				<Navbar />
				<div className='wrapper-pd'>
					<div className='header'>
						<h1 className='title'>Users</h1>
						<button>
							<Link
								to={'/themnguoidung'}
								style={{ color: 'inherit', textDecoration: 'none' }}>
								Create User
							</Link>
						</button>
					</div>
					<div className='amount_user'>{users.length} users</div>
					<div className='search'>
						<i className='fa fa-search'></i>
						<input
							type='text'
							placeholder='Tìm theo tài khoản'
							onChange={handleSearch}
						/>
					</div>
					<div className='sticky'>
						<table>
							<thead>
								<tr>
									<th>Tài Khoản</th>
									<th>Email</th>
									<th>Họ Và Tên</th>
									<th>Mã Loại Người Dùng</th>
									<th>Mật Khẩu</th>
									<th>Số Điện Thoại</th>
								</tr>
							</thead>
							<tbody>
								{users.slice(10 * index, 10 * index + 10).map((user, index) => {
									return (
										<tr key={index}>
											<td>{user.taiKhoan}</td>
											<td>{user.email}</td>
											<td>{user.hoTen}</td>
											<td>{user.maLoaiNguoiDung}</td>
											<td>{user.matKhau}</td>
											<td>{user.soDt}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
					<div className='bottom'>
						<div className='left'>
							{users.length
								? index + 1 + '/' + Math.ceil(length / 10)
								: 0 + '/' + 0}
						</div>
						<div className='right'>
							<i
								className='fa fa-arrow-left'
								onClick={() => {
									handleSlideDecrease();
								}}></i>
							<i
								className='fa fa-arrow-right'
								onClick={() => {
									handleSlideIncrease();
								}}></i>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AllUsers;
