import { useEffect, useState } from "react";

const Apicall1=()=>{
    const [Data, setData]= useState();
    useEffect(()=>{

     fetch("https://dummyjson.com/products/1")
     .then(res=>res.json())
     .then(json=>setData(json))
    },[])
    return(
        <div>
            <h2>API calling using useEffect method.</h2>
            {JSON.stringify(Data)}

        </div>
    )
}
export default Apicall1;