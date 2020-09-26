import React, {useState} from "react";
import Board from "./board";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory } from '@fortawesome/free-solid-svg-icons'
import "./board.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Game() {
    const [state, setState] = useState({
        history: [
            {
                squares: Array(9).fill(null),
            }
        ],
        stepNumber: 0,
        xIsNext: true,
    })

    const playerX = <span className={"red"}>X</span>
    const playerO = <span className={"green"}>O</span>

    const handleClick = (i: number) => {
        const history = state.history.slice(0, state.stepNumber + 1);
        const current = history[history.length - 1]
        const squares = current.squares.slice()
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = state.xIsNext ? 'X' : 'O';
        setState({
            history: history.concat([
                {
                    squares: squares,
                }
            ]),
            stepNumber: history.length,
            xIsNext: !state.xIsNext,
        });
    }

    const jumpTo = (step: number) => {
        setState({
            history: state.history,
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    const history = state.history;
    const current = history[state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step: any, move: number) => {
        const desc = move ?
            'Go to move #' + move :
            'Go to game start';
        return (
            <li key={move}>
                <button
                    onClick={() => jumpTo(move)}
                >
                    {desc}
                </button>
            </li>
        );
    })

    let status;
    if (winner) {
        status = <h2 className={"winner"}>{'Winner: ' + winner}</h2>
    } else {
        status = <h2>
            {'Next player: '}
            {
                state.xIsNext
                    ? playerX
                    : playerO
            }
        </h2>
    }

    return (
        <div className={"section"}>
            <div className="game text-center">
                <h1>Tic-Tac-Toe</h1>
                <div>{status}</div>
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i:number) => handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <h2><FontAwesomeIcon icon={faHistory}/>&nbsp;History</h2>
                    <ul>{moves}</ul>
                </div>
            </div>
        </div>
    );

    function calculateWinner(squares: any[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
}
