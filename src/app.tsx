import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

import Navbar from "./navbar/navbar"
import Welcome from "./welcome/welcome"
import TicTacToe from "./tic-tac-toe/game"
import Todo from "./todo/todo"
import * as Scroll from 'react-scroll'

import './app.css'

const ScrollLink = Scroll.Link
const ScrollElement = Scroll.Element

function App() {
    
    return (
        <ScrollElement name={"topElement"}>
            <Router>
                <Navbar/>
                <div className={"contentContainer"}>
                    <Switch>
                        <Route exact path={"/"}>
                            <Welcome/>
                        </Route>
                        <Route path={"/tic-tac-toe"}>
                            <TicTacToe/>
                        </Route>
                        <Route path={"/todo"}>
                            <Todo/>
                        </Route>
                    </Switch>
                </div>
                <ScrollLink className="scrollUp" to={"topElement"} smooth={true} duration={500}>
                    <FontAwesomeIcon icon={faChevronUp}/>
                </ScrollLink>
            </Router>
        </ScrollElement>
    )
}

// ========================================

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

