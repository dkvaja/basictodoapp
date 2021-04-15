import React, { useState } from "react";
import ListItems from "./ListItems";

const App = () => {
  const [list, updateList] = useState("");
  const [item, setItem] = useState([]);
  const printList = (event) => {
      updateList(event.target.value);
  };

  const showList = () => {
    
    setItem((oldItems) => {
      return [...oldItems, list];
    });
    updateList("");
  };
  const deleteItem = (id) =>{
    setItem((oldItems) => {
      return oldItems.filter((arrele,index) => {
        return index !== id;
      });
    });
    
}

  return (
    <>
      <div className="main-box flex-all-center">
        <div className="box">
          <p className="heading">
            <strong>TASK</strong>List
          </p>
          <div className="group1">
            <input
              type="text"
              required
              placeholder="Enter Your Task Here"
              onChange={printList}
              value={list}
              
            />
            <button className="btn" onClick={showList}>
              +
            </button>
          </div>
          <ol>
            {item.map((valuee,index) => {
              return <ListItems key={index} id={index} onSelect={deleteItem} val={valuee} />;
            })}
          </ol>
        </div>
        <p id='footer'>Developed By - dk_vaja </p>
      </div>
    </>
  );
};

export default App;
