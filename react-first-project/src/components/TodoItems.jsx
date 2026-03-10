import "./css/TodoItems.css";
import check from "./assets/check-mark.png";
import un_check from "./assets/radio.png";
import remove from "./assets/remove.png";

const TodoItems = ({no,display,text,setTodos}) => {

    const deleteTodo = (no) => {
        let data=JSON.parse(localStorage.getItem("todos"));
        data=data.filter((todo) => todo.no!==no);
        setTodos(data);
    }

    const toggle = (no) => {
         const data=JSON.parse(localStorage.getItem("todos"));
         for(let i=0;i<data.length;i++) {
            if(data[i].no===no) {
                if(data[i].display==='') {
                    data[i].display="line-through";
                }
                else {
                    data[i].display="";
                }
                break;
            }
         }
        setTodos(data);
    }

  return (
    <div className="todoitems">
        <div className={` todoitems-container ${display}`}>
            {display===""? <img src={un_check} alt="" width="50px"/>:<img src={check} alt="" width="50px"/>}
            <div className="todoitems-text" onClick={()=>{ toggle(no)}}>{text}</div>
        </div>
        <img src={remove} alt="" width="50px" className="todoitems-cross-icon" onClick={() => {deleteTodo(no)}}/>
    </div>
  )
}

export default TodoItems
