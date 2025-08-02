 import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/new">New</Link>
                    </li>
                    <li>
                        <Link to="/skincare">SkinCare</Link>
                    </li>
                    <li>
                        <Link to="/bodymist">BodyMist</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;