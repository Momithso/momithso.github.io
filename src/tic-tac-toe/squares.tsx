import React from 'react'

export default function Square(props: any, i: number) {
    return (
        <button className="square" onClick={() => props.onClick(i)}>
            {props.squares[i]}
        </button>
    )
}
