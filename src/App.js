import React, { useState } from "react";


const App = () => {
  const [task, updateTask] = useState("");
  const [items, updateItem] = useState([]);

  const upTask = (e) => {
    updateTask(e.target.value);
  }
  const click = () => {
    updateItem((arr) => {
      return [...arr, task];
    })
    updateTask("");
  }
  const deleteTask = (e) => {
    updateItem((arr) => {

      return arr.filter((arrElement, index) => {
        return (index) !== Math.floor(e.target.id)
      })
    })
  }
  return (
    <>
      <div className="main_div">
        <div className="center-div">
          <br />
          <h1> To Do List </h1>
          <br />
          <input type="text" placeholder="Add an Item" onChange={upTask} value={task} />
          <button onClick={click}>+</button>
          <ol>
            {
              items.map((val, index) => {
                return (<>
                  <div className="todo_style">
                    <i className="fa-solid fa-circle-xmark" onClick={deleteTask} id={index}></i>
                    <li>{val}</li>
                  </div>
                </>
                )
              })
            }
          </ol>
        </div>

      </div>

    </>
  )
}

export default App;