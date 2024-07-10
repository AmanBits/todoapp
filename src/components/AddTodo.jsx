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

      

      const handleForm = (event,itemName,itemDate)=>{
        event.preventDefault();
        addItem(itemName,itemDate);
        setItemName("");
        setItemDate("");
      }
     

  return (
    <div className={style.container}>
<<<<<<< HEAD
      <form onSubmit={(event)=>handleForm(event,itemName,itemDate)}>
      <input className={style.additem} value={itemName} type="text" onChange={itemNameOnChange} required />
      <input className={style.additem} value={itemDate}  type="date" onChange={itemDateOnChange} required />
      <button className={style.addbtn} type="submit">ADD</button>
      </form>
=======
      <input className={style.additem} value={itemName} type="text" onChange={itemNameOnChange} required />
      <input className={style.additem} value={itemDate}  type="date" onChange={itemDateOnChange} required />
      <button className={style.addbtn}>ADD</button>
>>>>>>> origin/main
    </div>
  );
};

export default AddTodo;
