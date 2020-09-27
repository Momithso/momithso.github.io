import React from 'react'
import {Link} from 'react-router-dom'

import "./navbar.css"
import logo from "./logo.png"

export default function Navbar() {
    return (
        <div className={"navigation"}>
            <div className={"logoContainer"}>
                <img className={"logo"} src={logo}/>
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
