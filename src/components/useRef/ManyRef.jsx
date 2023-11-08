

//useRef() with current for single reference instead of DOM Manipulation

import { useRef } from "react";


const DomManipulate1= ()=>{

   let myHeadline =useRef();

   const showChange =()=>{
    //myHeadline.current.innerText="Hello World "

    myHeadline.current.innerHTML=" <ul> <li>Educational</li><li>Electrical</li><li>Project</li><li>Footweare</li></ul>"

   }


    return(
        <div>
          <h1 ref={(a)=>myHeadline=a}></h1>
          <button onClick={showChange}>useRef ManyRef</button><br/><br/>
          

           
            

        </div>
    )
}

export default DomManipulate1;