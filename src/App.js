import AllUsers from './components/AllUsers';
import Login from './components/Login';
import { Routes, Route, Navigate } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import { useSelector } from 'react-redux';
function App() {
	const isLogin = useSelector((state) => state.user.isLogin);
	return (
		<Routes>
			<Route path={'/'} element={<Navigate replace to={'/dangnhap'} />}></Route>
			<Route
				path={'/dangnhap'}
				element={
					isLogin ? (
						<Navigate replace to={'/laydanhsachnguoidung'} />
					) : (
						<Login />
					)
				}
			/>
			<Route
				path={'/laydanhsachnguoidung'}
				element={isLogin ? <AllUsers /> : <Navigate replace to={'/dangnhap'} />}
			/>
			<Route
				path={'/themnguoidung'}
				element={
					isLogin ? <CreateUser /> : <Navigate replace to={'/dangnhap'} />
				}
			/>
		</Routes>
	);
}

export default App;
