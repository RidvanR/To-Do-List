import './App.css';
import {ToDoList} from "./components/TodoList/TodoList";
import React from 'react';
import { Grommet, Heading, Box} from 'grommet';




function App() {

	const AppBar = (props) => (
		<Box
		  tag='header'
		  direction='row'
		  text-align='center'
		  justify='between'
		  background='brand'
		  pad={{ left: 'medium', right: 'small', vertical: 'small' }}
		  elevation='medium'
		  style={{ zIndex: '1' }}
		  {...props}
		/>
	  );
  
 

  return (
    
    <div className="app">

		<Grommet>
		<AppBar>
			<Heading level='2' margin='none' > To Do Liste</Heading>
		</AppBar>
		</Grommet>
 
	   <ToDoList
	   />
    
    </div>
     

  );

  
}





  
  
  
 

  



  
    

    
  
   
   
  




export default App;

