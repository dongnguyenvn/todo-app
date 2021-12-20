import {FC} from 'react'
import type {Todo} from '../App'


type ToggleTodo = (selectedTodo: Todo) => void;
type DeleteTodo = (selectedTodoId: string) => void;

type TodoItemProps = {
    todo : Todo
    togleTodo : ToggleTodo
    deleteTodo: DeleteTodo
}

const TodoItem:FC<TodoItemProps> = ({todo,togleTodo,deleteTodo}) => {
    return (
        <div className='todo-item'>
            <input className="inp-cbx" id={`cbx-${todo.id}`} type="checkbox" style={{display: 'none'}} defaultChecked={todo.complete} onClick={() => {togleTodo(todo)}}/>
            <label className="cbx" htmlFor={`cbx-${todo.id}`}>
                <span>
                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                </span>
                <span>{todo.text}</span>
            </label>
            <button onClick={() => {deleteTodo(todo.id)}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
            </button>
        </div>  
    )
}

export default TodoItem
