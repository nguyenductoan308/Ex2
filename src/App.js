import React from "react";
import TodoItem from "./component/Todo_Item/todoItem";
import TodoList from "./component/Todo_List/todoList";
import './index.css';

App.propTypes = {
    
};
function App(props) {
  return (
    <div className='card' >
  
      <TodoList/>
      <TodoList/>
     
    </div>
  );
}

export default App;
