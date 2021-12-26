import './App.css'
import { useState,useEffect } from 'react'
import TodoItem from './components/TodoItem'
import FormAddToDo from './components/FormAddToDo';
import { getId } from './lib/getId';

export interface Todo {
  id:string
  text : string
  complete : boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') as string)
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  useEffect(() => {
    // Update the document title
    document.title = `Todo( ${todos.length} )`;
  },[todos]);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (text: string) => {
    const newTodo = {id: getId(), text, complete: false };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (selectedTodoId: string) => {
    const newTodos = todos.filter((todo) => todo.id != selectedTodoId);
    setTodos(newTodos)
  };

  return (
    <div className="container">
      <div className='header'>
        <h2>To Do</h2>
      </div>
      <FormAddToDo addTodo={addTodo}/>
      <div className='todo-list'>
        {todos?.map((t,i) => (
          <TodoItem todo={t} togleTodo={toggleTodo} key={i} deleteTodo={deleteTodo}/>
        ))}
      </div>
    </div>
  )
}


export default App
