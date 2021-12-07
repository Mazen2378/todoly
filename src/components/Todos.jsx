import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
const Todos = ({ todos, removeTodo, setTodos }) => {
	function handleOnDragEnd(result) {
		if (!result.destination) return;

		const items = Array.from(todos);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		setTodos(items);
	}
	return (
		<DragDropContext onDragEnd={handleOnDragEnd}>
			<Droppable droppableId='characters'>
				{provided => (
					<div
						className='characters'
						{...provided.droppableProps}
						ref={provided.innerRef}
					>
						{todos.map((todo, index) => (
							<Draggable
								key={todo.id}
								draggableId={todo.id.toString()}
								index={index}
							>
								{provided => (
									<div
										ref={provided.innerRef}
										{...provided.draggableProps}
										{...provided.dragHandleProps}
										className='l-container'
									>
										<div className='text'>
											<p>
												{todos.indexOf(todo) + 1}. {todo.todo}
											</p>
											<i
												class='fas fa-backspace'
												onClick={() => removeTodo(todo)}
											></i>
										</div>
										<hr />
									</div>
								)}
							</Draggable>
						))}
						{provided.placeholder}
					</div>
				)}
			</Droppable>
		</DragDropContext>
	);
};

export default Todos;
