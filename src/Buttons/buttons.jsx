import React from 'react'; 
import '.Buttons/Buttons.css'; 


export function buttons({completeTodo, removeTodo}) {
    
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
    
      return(

        <div>
        <button class="x" onClick={() => removeTodo(index)}>X</button>
        <button class="c" onClick={() => completeTodo(index)}><img class="b" alt="nichts" src="https://icons.getbootstrap.com/assets/icons/check-lg.svg"></img> </button>
        <button className="hnzü" onClick={handleOpenClick} >+</button>

        </div>
    )
}