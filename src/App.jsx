import { useState, useEffect, useRef } from 'react';
import './App.css';
import './index.css';
import Sun from './assets/icon-sun.svg';
import Moon from './assets/icon-moon.svg';
import Checkmark from './assets/icon-check.svg'

function App() {
  const [todos, setTodos] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const inputRef = useRef();

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = inputRef.current.value.trim();

    if (newTodo) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { text: newTodo, completed: false },
      ]);
      inputRef.current.value = '';
    }
  };

  const handleCircleClick = (index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <div className="todos">
      <div className="todosHeader">
        <h1>TODO</h1>
        <img
          src={isDarkTheme ? Sun : Moon}
          alt="Theme Toggle"
          onClick={toggleTheme}
        />
      </div>
      <div className="input_container">
        <div className="circle"></div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            ref={inputRef}
            placeholder="Create a new todo.."
          />
          <button type="submit" hidden></button>
        </form>
      </div>

      <div className="todos_container">
        {todos.map((todo, index) => (
          <div key={index} className="todo_item">
            <div className="input_container">
              <div
                className={`circle ${todo.completed ? 'completed-circle' : ''}`}
                onClick={() => handleCircleClick(index)}
              >
                {todo.completed && <img src={Checkmark} alt="Checkmark" />}
              </div>
              <p className={todo.completed ? 'completed' : ''}>{todo.text}</p>
            </div>
            <hr />
          </div>
        ))}
        <div className="todos_footer">
          <p>0 items left</p>
          <div className="types">
            <p className="clear">All</p>
            <p className="clear">Active</p>
            <p className="clear">Completed</p>
          </div>
          <p className="clear">Clear Completed</p>
        </div>
      </div>
    </div>
  );
}

export default App;
