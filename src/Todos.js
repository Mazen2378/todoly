import React from 'react';

const Todos = ({ todos, removeTodo }) => {
	return (
		<div>
			{todos.map(todo => (
				<div className='l-container' key={todo.id}>
					<div className='text'>
						<p>
							{todos.indexOf(todo) + 1}. {todo.name}
						</p>
						<i class='fas fa-backspace' onClick={() => removeTodo(todo)}></i>
					</div>
					<hr />
				</div>
			))}
		</div>
	);
};

export default Todos;
