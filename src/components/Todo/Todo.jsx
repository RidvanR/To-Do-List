import React from 'react';
import "./components/Todo/Todo.css";

export function Todo({ todo, index,  addComment, }) {
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