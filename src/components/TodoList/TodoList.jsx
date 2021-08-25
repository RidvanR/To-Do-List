import React from 'react'
import "./compoents/TodoList/TodoList.css"

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

      const [formOpen, setFormOpen] = React.useState(false)
      const [todos, setTodos] = React.useState([
        {
          text: "To-Do-List fertig machen",
          isCompleted: true
        }
       
      ]);
    return(
        <div className="todo-list">

        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            addComment={addComment}
          />
        ))}
        {formOpen && <TodoForm addTodo={addTodo} />}
        {buttons.map((buttons) => (
            <buttons 
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            buttons={buttons}
         />
        ))}
      </div>
    )
}