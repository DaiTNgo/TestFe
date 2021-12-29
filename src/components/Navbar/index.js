import './Navbar.scss'

function Navbar() {
    return (
        <section className="navbar">
            <ul>
                <li className='active'>Users</li>
                <li>Settings</li>
                <li>Messages</li>
            </ul>
            <div className="user">
                <img className="user_img" src="/avatar.jpg" alt="" />
                <span className="user_name">NTD</span>
            </div>
        </section>
    )
}

export default Navbar
