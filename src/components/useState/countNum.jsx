import { useState } from "react";

const Num =()=>{

let [num,setNum]= useState(0);
const change=()=>{
    setNum(num+3);
}

return(
    <div>
       <h2>The Number is:{num}</h2>
       <button onClick={change}>CountUsingUseState</button>
    </div>
)


}
export default Num;