import TodoContainer from "./components/TodoContainer";
import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import ItemList from "./components/ItemList";
import Emptyerror from "./components/Emptyerror";

import "./App.css";
import { useState } from "react";

function App() {
  const [itemList, setItem] = useState([]);

  const addItem = (name, date) => {
    let item = [...itemList, { name: name, date: date }];
    setItem(item);
  };

  const deleteitem = (deleteitemname) => {
   let newItems = itemList.filter(item=> item.name==deleteitem);
   setItem(newItems);
  };

  return (
    <>
      <TodoContainer>
        <TodoName />
        <AddTodo addItem={addItem} />
        <Emptyerror items={itemList} />
        <ItemList items={itemList} deleteitem={deleteitem} />
      </TodoContainer>
    </>
  );
}

export default App;
