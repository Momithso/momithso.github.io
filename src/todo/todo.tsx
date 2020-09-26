import React, { useState } from 'react'
import {v4 as uuid} from 'uuid'
import './todo.css'

export default function Todo() {

    const initialTodos = [
        {
            id: uuid(),
            task: 'test',
            complete: false
        }
    ]

    const [todos, setTodos] = useState(initialTodos)
    const [task, setTask] = useState('')

    const handleChangeInput = (e: any) => {
        setTask(e.target.value)
    }
    const handleSubmit = (e: any) => {
        if (task) {
            setTodos(
                todos.concat({
                    id: uuid(),
                    task,
                    complete: false
                })
            )
        }

        setTask('')
        e.preventDefault()
    }

    const handleChangeCheckbox = (id: any) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {...todo, complete: !todo.complete}
                } else {
                    return todo;
                }
            })
        )
    }

    const checkAllComplete = () => {
        let i:number = 0
        todos.map(todo => {
            todo.complete ? i++ : null
        })
        return i === todos.length
    }

    return (
        <div className={"section"}>
            <div className={"todoContainer"}>
                <h2>Persönliche Todo-Liste</h2>
                {checkAllComplete() ? <h2>Du bist ein Jedi!</h2> : <h2>Du hast noch viel zu machen junger Padawan!</h2>}
                <ul className={"todolist"}>
                    {todos.map(todo => {
                        if (!todo.complete) {
                            return (
                                <li key={todo.id}>
                                    <label className={`${todo.complete ? "finished todoLabel" : "todoLabel"}`}>
                                        <input
                                            type={"checkbox"}
                                            checked={todo.complete}
                                            onChange={() => handleChangeCheckbox(todo.id)}
                                        />
                                        <label className={"todoLabel"}>
                                            {todo.task}
                                        </label>
                                    </label>
                                </li>
                            )
                        }
                    })}
                </ul>
                <form onSubmit={handleSubmit}>
                    <input
                        className={"input"}
                        type={"text"}
                        value={task}
                        onChange={handleChangeInput}
                    />
                    <button className={"button"} type={"submit"}>Hinzufügen</button>
                </form>
            </div>
        </div>
    )
}
