

//useRef() with current for single reference instead of DOM Manipulation

import { useRef } from "react";


const DomManipulate= ()=>{

   let myHeadline =useRef(null);

   const showChange =()=>{
    //myHeadline.current.innerText="Hello World "

    myHeadline.current.innerHTML=" <ul> <li>Educational</li><li>Electrical</li><li>Project</li><li>Footweare</li></ul>"

   }


    return(
        <div>
          <h4 ref={myHeadline}></h4>
          <button onClick={showChange}>useRef single</button><br/><br/>
          

           
            

        </div>
    )
}

export default DomManipulate;