import { useState } from 'react';
import style from '../assets/css/Addtodo.module.css';
const AddTodo = ({addItem}) => {

    const [itemName,setItemName] = useState("");
    const [itemDate,setItemDate] = useState("");



    const itemNameOnChange = (event)=>{
      let name = event.target.value;
      setItemName(name);
    }

    const itemDateOnChange = (event)=>{
        let date = event.target.value;
        setItemDate(date);
      }

      const addTodoItem = (name,date)=>{
        addItem(name,date);
        setItemName("");
        setItemDate("");
      }

     

  return (
    <div className={style.container}>
      <input className={style.additem} value={itemName} type="text" onChange={itemNameOnChange} required />
      <input className={style.additem} value={itemDate}  type="date" onChange={itemDateOnChange} required />
      <button className={style.addbtn} onClick={()=> addTodoItem(itemName,itemDate)}>ADD</button>
    </div>
  );
};

export default AddTodo;
