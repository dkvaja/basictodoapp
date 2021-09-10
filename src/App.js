import React, { useEffect, useState } from "react";
import ListItems from "./ListItems";

const App = () => {
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([])


  useEffect(() => {
    if (!!localStorage.getItem('taskList')) {
      setTaskList(JSON.parse(localStorage.getItem('taskList')))
    }
  }, [])

  const idGenerator = () => Math.round(Math.random() * 100000);

  const handleTaskText = (e) => {
    setTask(e.target.value)
  }

  const handleAddTask = () => {
    if (!!task) {
      setTaskList([
        ...taskList, {
          id: idGenerator(),
          task: task
        }
      ])
      localStorage.setItem("taskList", JSON.stringify([
        ...taskList, {
          id: idGenerator(),
          task: task
        }
      ]));
    }
    setTask('')
  }
  const deleteTask = (id) => {
    let temp = taskList.filter((item) => item.id !== id);
    setTaskList(temp);
    localStorage.setItem("taskList", JSON.stringify(temp));
  }
  return (
    <>
      <div className="main-box flex-all-center">
        <div className="box">
          <p className="heading">
            <strong>TASK</strong>List‍
          </p>
          <div className="group1">
            <input
              type="text"
              required
              placeholder="Enter Your Task Here"
              onChange={handleTaskText}
              value={task}
            />
            <button className="btn" onClick={handleAddTask}>
              +
            </button>
          </div>
          <ol>
            {taskList && taskList.map((item, index) => {
              return <ListItems id={item.id} key={item.id} onSelect={deleteTask} val={item.task} />;
            })}
          </ol>
        </div>
        <p id='footer'>Developed By - dk_vaja </p>
      </div>
    </>
  );
};

export default App;
