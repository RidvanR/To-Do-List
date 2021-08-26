import React from 'react'; 
import {TextInput, Form } from 'grommet';


export function TodoForm({ addTodo }) {
    const  [ value, setValue] = React.useState("");
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
    
    
  
    return (
	<Form onSubmit={handleSubmit}>
		<TextInput
				type="text"
				className="input"
				value={value}
				placeholder="Füg ein To Do zu"
				onChange={e => setValue(e.target.value)}
			/>

		</Form>
    );
  
  }