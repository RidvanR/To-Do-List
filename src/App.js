import {
	ToDoList
} from "./components/TodoList/TodoList";
import React from 'react';
import {
	Grommet,
	Header,
	Heading,
	Box,
	Grid
} from 'grommet';




function App() {

	const theme = {
		global: {
			colors: {
				brand: "#3D138D"
			},
			font: {
				family: "Roboto"
			}
		}
	}

	return ( <
		Grommet theme = {
			theme
		} >

		<
		Grid className = "app"
		rows = {
			['xsmall', 'large']
		}
		gap = "5%" >

		<
		Header direction = 'row'
		text - align = 'center'
		justify = 'center'
		pad = {
			{
				left: 'medium',
				right: 'small',
				vertical: 'small'
			}
		}
		elevation = 'medium'
		background = "brand"
		style = {
			{
				zIndex: '1'
			}
		}

		>
		< Heading > To Do Liste  </Heading></Header>



		<
		ToDoList /
		>

		<
		/Grid>


		<
		/Grommet>



	);


}


























export default App;