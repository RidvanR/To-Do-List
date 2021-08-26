import React from 'react';
import { Todo } from '../Todo/Todo';
import { TodoForm } from '../AddToDo';
import { Button, Main, Box, Grid } from 'grommet';
import { Add } from 'grommet-icons';

export function ToDoList() {

	const addTodo = text => {
		setFormOpen(false);
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const addComment = (text, index) => {
		const todo = [...todos];
		if (todo[index].comments && todo[index].comments.length > 0) {
			todo[index].comments = [
				...todo[index].comments,
				text
			];
		}
		todo[index].comments = [
			text
		];
		setTodos(todo);
	}

	const handleOpenClick = () => {
		setFormOpen(true);
	};

	const removeTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	const completeTodo = index => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	const [formOpen, setFormOpen] = React.useState(false)
	const [todos, setTodos] = React.useState([
		{
			text: "To-Do-List fertig machen",
			isCompleted: true
		}

	]);


	const Main = (props) => (
		<Box
			{...props}
		/>
	);

	return (

		<Main className="todo-list" pad="large"
			background="neutral-2"
			tag="main"
		>
			<Box
				direction='row'
			>
				<Button
					className="hnzü"
					onClick={handleOpenClick}
					icon={<Add />}
					hoverIndicator={{ background: { color: "#3D136D" } }}
				/>
				{formOpen && <TodoForm addTodo={addTodo} />}
			</Box>
			<Grid
				columns='small'
				gap='small'
			>
				{todos.map((todo, index) => (
					<Todo
						key={index}
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