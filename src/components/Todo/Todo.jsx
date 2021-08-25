import React from 'react';
import "./Todo.css";
import { Button, Grommet } from 'grommet';
import { Checkmark, Close } from 'grommet-icons';

export function Todo({ todo, index,  addComment, removeTodo, completeTodo }) {
  const  [ value, setValue,] = React.useState("");
  const handleSubmit = f => {
    f.preventDefault();
    if (!value) return;
    addComment(value, index);
    setValue("");
  };



    return (
      <div
        className="todo"
        style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
		<Grommet>
		<Button 
		className="x" onClick={() => removeTodo(index)}
		icon={<Close />} 
		/>
        <Button 
		className="c" onClick={() => completeTodo(index)}
		icon={<Checkmark />}
		 /> 
		</Grommet>
        {todo.text}
        {todo.comments && todo.comments.map(text => <span>{text}</span>) 
        }
        <div>
            <form onSubmit={handleSubmit}>
              <input id="inputfeld" type="text"  
              value={value}
              placeholder="Kommentier dein To Do"
              onChange={f => setValue(f.target.value)} />

            </form>
            
             
          
        </div>
      </div>
    );
   
  }