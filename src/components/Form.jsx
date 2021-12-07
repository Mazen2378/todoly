import React, { useState } from 'react';

export default function Form({ setTodos, todos }) {
	const [todo, setTodo] = useState({ todo: '', category: 'School' });
	const handleSubmit = e => {
		e.preventDefault();
		const newTodo = { id: todos.length + 1, ...todo };
		setTodos([...todos, newTodo]);
		setTodo({ todo: '', category: 'School' });
		e.target.reset();
	};
	const handleChange = e => {
		setTodo({ ...todo, [e.target.name]: e.target.value });
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				onChange={handleChange}
				name='todo'
				type='text'
				id='addtodo'
				placeholder='Add todo...'
				autoComplete='off'
			/>
		</form>
	);
}
