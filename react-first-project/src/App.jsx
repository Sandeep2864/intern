import { useRef, useState } from "react";
import FirstComponent from "./components/FirstComponent";

const App = () => {
  let k="Great Stack";
  let array=["go","went","gone"];
  let type="boy";
  const [x,setx]=useState(0);
  const btnClick = () => {
    console.log("clicked");
    setx(x+1);
  }
  const [data,setData]=useState([]);
  const inputref=useRef(null);
  return (
    <div>
      {k}
      {array.map((key)=> {return <h2>{key}</h2> })}
      {type==="girl"?<h1>boy</h1>:<h1>girl</h1>}
      <button onClick={btnClick}>Click me</button>
      <FirstComponent data={x} fn={setx}/>
      <input ref={inputref} type="text" />
      <button type="submit" onClick={()=> { setData([...data,inputref.current.value]) }}>Submit</button>
      {data.map((item,index) => {
        return <h2 key={index}>{item}</h2>
      })}
    </div>
  )
}

export default App;
