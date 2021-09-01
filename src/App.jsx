import React from 'react';
import {
	Grommet,
	Header,
	Heading,
	Grid,
	Footer,
	Text,
	Button,
} from 'grommet';
import { Github } from 'grommet-icons';
import { db } from './firebase';
import {
	ToDoList,
} from './components/TodoList/TodoList';

function App() {
	const theme = {
		global: {
			colors: {
				brand: '#3D138D',
			},
			font: {
				family: 'Roboto',
			},
		},

	};
	console.log(db);
	return (
		<Grommet theme={theme}>

			<Grid
				className="app"
				rows={['xsmall', 'large']}
				gap="5%"
			>

				<Header
					direction="row"
					justify="center"
					pad={{
						left: 'medium',
						right: 'small',
						vertical: 'small',
					}}
					elevation="medium"
					background="brand"
					style={{
						zIndex: '1',
					}}
				>
					<Heading>To Do Liste</Heading>
				</Header>
				<ToDoList />
				<Footer background="brand" pad="medium">
					<Text>Ridvan® 2021</Text>
					<Button
						icon={<Github />}
					/>
				</Footer>
			</Grid>
		</Grommet>
	);
}

export default App;
