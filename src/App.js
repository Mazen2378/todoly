import { useEffect, useState } from 'react';
import './App.css';
import Todos from './Todos';

function App() {
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem('todos')) || [{ id: 0, name: 'mazen' }]
	);
	const addTodo = e => {
		e.preventDefault();
		setTodos([
			...todos,
			{ id: todos.length ? todos[todos.length - 1].id + 1 : 0, name: input },
		]);
		setInput('');
	};
	const removeTodo = todo => {
		setTodos(todos.filter(item => item.id !== todo.id));
	};
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);
	return (
		<div className='container'>
			<h1>Your Todos</h1>
			<form onSubmit={e => addTodo(e)}>
				<input
					type='text'
					id='addtodo'
					value={input}
					onChange={e => {
						setInput(e.target.value);
					}}
					placeholder='Add todo...'
					autoComplete='off'
				/>
			</form>
			<div className='todos-container'>
				<Todos removeTodo={removeTodo} todos={todos} />
			</div>
		</div>
	);
}

export default App;
