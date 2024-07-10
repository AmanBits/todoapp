import style from "../assets/css/Itemlist.module.css";
import Item from "./Item";
const ItemList = ({ items, deleteitem }) => {
  return (
    <div className={style.item_container}>
      {items &&
        items.map((item) => {
          return <Item item={item} key={item.name} deleteitem={deleteitem} />;
        })}
    </div>
  );
};

export default ItemList;
