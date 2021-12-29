import AllUsers from "./components/AllUsers";
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'
function App() {
    return (
        <Routes>
            <Route path={'/dangnhap'} element={<Login />} />
            <Route path={'/laydanhsachnguoidung'} element={<AllUsers />} />
        </Routes>

    );
}

export default App;
