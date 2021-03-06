import React from 'react';
import {
	Button, Main, Box, Grid,
} from 'grommet';
import { Add } from 'grommet-icons';
import { Todo } from '../Todo/Todo';
import { TodoForm } from '../AddToDo';

export function ToDoList() {
	const [formOpen, setFormOpen] = React.useState(false);
	const [todos, setTodos] = React.useState([

	]);
	const addTodo = (text) => {
		setFormOpen(false);
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const addComment = (text, index) => {
		const todo = [...todos];
		if (todo[index].comments && todo[index].comments.length > 0) {
			todo[index].comments = [
				...todo[index].comments,
				text,
			];
		} else {
			todo[index].comments = [
				text,
			];
		}
		setTodos(todo);
	};

	const handleOpenClick = () => {
		setFormOpen(true);
	};

	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	const completeTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	return (

		<Main
			className="todo-list"
			pad="large"
			background="transparent"
			tag="main"
		>
			<Box
				direction="row"
			>
				<Button
					className="hnzü"
					onClick={handleOpenClick}
					icon={<Add color="dark-3" />}
					hoverIndicator={{ background: { color: 'dark-4' } }}
				/>
				{formOpen && <TodoForm addTodo={addTodo} />}
			</Box>
			<Grid
				columns="medium"
				gap="small"
			>
				{todos.map((todo, index) => (
					<Todo
						key={todo.text}
						index={index}
						todo={todo}
						addComment={addComment}
						removeTodo={removeTodo}
						completeTodo={completeTodo}
					/>
				))}

			</Grid>
		</Main>
	);
}
