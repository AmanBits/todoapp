import { useRef } from "react";
import style from "../assets/css/Addtodo.module.css";
const AddTodo = ({ addItem }) => {
  const useItemName = useRef();
  const useItemDate = useRef();

  const handleForm = (event) => {
    event.preventDefault();
   
    addItem(useItemName.current.value, useItemDate.current.value);
    useItemName.current.value="";
    useItemDate.current.value="";
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
    </div>
  );
};

export default AddTodo;
