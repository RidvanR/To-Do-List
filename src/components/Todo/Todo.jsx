import React from 'react';
import {
	Button, TextInput, Text, Card, CardFooter, CardBody, CardHeader,
} from 'grommet';
import { Checkmark, Close } from 'grommet-icons';

export function Todo({
	todo, index, addComment, removeTodo, completeTodo,
}) {
	const [value, setValue] = React.useState('');
	const handleSubmit = (f) => {
		f.preventDefault();
		if (!value) return;
		addComment(value, index);
		setValue('');
	};
	return (
		<Card
			background="#555555"
			className="todo"
			style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
		>
			<CardHeader
				pad="medium"
			>
				{todo.text}
			</CardHeader>
			<CardBody
				background="#555555"
				pad="medium"
				gap="small"
			>
				{todo.comments && todo.comments.map((text) => <Text color="#777777">{text}</Text>)}
				<form onSubmit={handleSubmit}>
					<TextInput
						type="text"
						value={value}
						placeholder="Kommentier dein To Do"
						onChange={(f) => setValue(f.target.value)}
					/>
				</form>
			</CardBody>
			<CardFooter
				background="#777777"
				pad={{ horizontal: 'small' }}
				justify="between"
			>
				<Button
					secondary
					hoverIndicator={{ background: { color: 'status-ok' } }}
					onClick={() => completeTodo(index)}
					icon={<Checkmark />}
				/>
				<Button
					secondary
					icon={<Close />}
					color="brand"
					hoverIndicator={{ background: { color: 'status-critical' } }}
					onClick={() => removeTodo(index)}
				/>
			</CardFooter>
		</Card>
	);
}
