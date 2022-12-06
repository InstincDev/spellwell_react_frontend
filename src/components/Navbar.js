import { useState } from "react";

export default function Navbar() {
    const [user, setUser] = useState({ userName: "InstincDev", id: "227" });

    return (
        <nav className="row navbar navbar-expand bg-light">
            <div className="container-fluid">
                <ul className=" col navbar-nav justify-content-around">
                    <li className="nav-item ">
                        User Name: <strong>{user.userName}</strong>
                    </li>
                    <li className="nav-item ">
                        User ID: <strong>{user.id.slice(-6)}</strong>
                    </li>
                    <li className="nav-item ">
                        <a href="/logout" className="btn-sm btn btn-info">
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
