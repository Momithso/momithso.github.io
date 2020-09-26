import React from 'React'
import {Link} from 'react-router-dom'

import "./navbar.css"

export default function Navbar() {
    return (
        <div className={"navigation"}>
            <div className={"logoContainer"}>
                <img className={"logo"} src={require("../../images/logo.png")}/>
            </div>
            <div className={"navContainer"}>
                <ul className={"navList"}>
                    <li className={"navItem"}>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className={"navItem"}>
                        <Link to={"/tic-tac-toe"}>Tic-Tac-Toe</Link>
                    </li>
                    <li className={"navItem"}>
                        <Link to={"/todo"}>Todo-Liste</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
