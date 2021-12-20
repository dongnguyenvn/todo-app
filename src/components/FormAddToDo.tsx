import { useState,ChangeEvent, FormEvent,FC } from "react"

type AddTodo = (text: string) => void;

interface FormAddToDoProps {
    addTodo: AddTodo;
}

const FormAddToDo:FC<FormAddToDoProps> = ({addTodo}) => {
    const [text,setText] = useState<string>('')

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()
        addTodo(text);
        setText('');
    }

    return (
        <form className='input-todo' onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} required={true} />
            <button type='submit'>
            <svg xmlns="http://www.w3.org/2000/svg" className="plus-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            </button>
        </form>
    )
}

export default FormAddToDo
