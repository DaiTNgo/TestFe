import AllUsers from "./components/AllUsers";
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'
import CreateUser from "./components/CreateUser";
function App() {
    return (
        <Routes>
            <Route path={'/dangnhap'} element={<Login />} />
            <Route path={'/laydanhsachnguoidung'} element={<AllUsers />} />
            <Route path={'/themnguoidung'} element={<CreateUser />} />
        </Routes>

    );
}

export default App;
