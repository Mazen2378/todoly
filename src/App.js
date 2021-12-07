import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import Todos from './components/Todos';

function App() {
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem('todos')) || [
			{ id: 0, name: 'mazen', category: 'default' },
		]
	);
	const removeTodo = todo => {
		setTodos(todos.filter(item => item.id !== todo.id));
	};
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);
	return (
		<div className='container'>
			<h1>Your Todos</h1>
			<Form setTodos={setTodos} todos={todos} />
			<div className='todos-container'>
				<Todos removeTodo={removeTodo} todos={todos} setTodos={setTodos} />
			</div>
		</div>
	);
}

export default App;
