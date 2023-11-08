

//useRef() with current for single reference instead of DOM Manipulation

import { useRef } from "react";


const SetImage= ()=>{

  let myImage= useRef();
   
 const showChange=()=>{
  myImage.current.src="https://media.istockphoto.com/id/1140298653/vector/happy-baby-girl-or-boy-view-from-back.jpg?s=1024x1024&w=is&k=20&c=Ldpem0XO2JT4mc_hpt3aaL-UENAuTcm83fZN-PCTwtc=";
  myImage.current.setAttribute("height","200px")
  myImage.current.setAttribute("width","200px")
 }

    return(
        <div>
         <img ref={myImage} src="https://cdn.pixabay.com/photo/2014/04/03/11/49/baby-312256_1280.png" height={200} width={200} />
          <br/><br/><button onClick={showChange}>Image change</button><br/><br/>
          

           
            

        </div>
    )
}

export default SetImage;