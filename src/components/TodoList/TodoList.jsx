import React from 'react';
import "./TodoList.css"; 
import { Todo } from '../Todo/Todo';
import { TodoForm } from '../AddToDo';
import { Button, Grommet, Main, Box } from 'grommet';
import {Add} from 'grommet-icons';

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


	  /* Input in Box unten rein machen wie? und Main Stylen wie? */ 

    return(
			<Grommet>  

		<Main className="todo-list" pad="large"
		background="neutral-2"
		tag= "main"
		width= "860px"
		margin="300px"
		
		>
			<Button 
			className="hnzü" 
			onClick={handleOpenClick} 
			icon={<Add />}
			/>
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
        {formOpen && <TodoForm addTodo={addTodo} />}

		</Main>
			</Grommet>
    );}