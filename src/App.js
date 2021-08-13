import './App.css';
import React from "react"; 





function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button class="c" onClick={() => completeTodo(index)}><img class="b" alt="nichts" src="https://icons.getbootstrap.com/assets/icons/check-lg.svg"></img> </button>
        <button class="x" onClick={() => removeTodo(index)}>x</button>
        <div class="dropdown">
          <button class="k" type="button" data-toggle="dropdown">
          <span class="caret"></span><img class="kb" alt="nicht" src="https://icons.getbootstrap.com/assets/icons/chat-dots.svg" ></img></button>
            <ul class="dropdown-menu">
            <li><input type="text" class="fname" name="fname"></input></li>
            </ul>
            </div> 

        
      </div>
    </div>
  );
}



function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "To-Do-List fertig machen",
      isCompleted: true
    }
   
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  


  

  


  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>

      

      

    </div>

  );

  
}





  
  
  
 

  



  
    

    
  
   
   
  




export default App;

