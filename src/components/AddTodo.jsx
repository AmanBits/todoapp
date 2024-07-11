import { useRef } from "react";
import style from "../assets/css/Addtodo.module.css";
const AddTodo = ({ addItem }) => {
  const useItemName = useRef();
  const useItemDate = useRef();

  const handleForm = (event) => {
    event.preventDefault();
    addItem(useItemName.current.value, useItemDate.current.value);
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleForm}>
        <input
          className={style.additem}
          ref={useItemName}
          type="text"
          required
        />
        <input
          className={style.additem}
          ref={useItemDate}
          type="date"
          required
        />
        <button className={style.addbtn} type="submit">
          ADD
        </button>
      </form>
<<<<<<< HEAD
=======
=======
      <input className={style.additem} value={itemName} type="text" onChange={itemNameOnChange} required />
      <input className={style.additem} value={itemDate}  type="date" onChange={itemDateOnChange} required />
      <button className={style.addbtn}>ADD</button>
>>>>>>> origin/main
>>>>>>> origin/main
    </div>
  );
};

export default AddTodo;
