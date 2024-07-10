import style from '../assets/css/Todocontainer.module.css';
const TodoContainer = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default TodoContainer;
