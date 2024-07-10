import style from "../assets/css/Item.module.css";
const Item = ({ item,deleteitem }) => {
  return (
    <>
      <li className={style.item} >
        <span className={style.item_name}>{item.name} </span> <span className={style.item_date}>{item.date}</span>
        <button className={style.delete_btn} onClick={()=> deleteitem(item.name)}>Delete</button>
      </li>
    </>
  );
};

export default Item;
