const FormSubmit= ()=>{

   const postFormData =(event)=>{
    event.preventDefault();
   alert("form submitted")
   }

    return(
        <div>
           
           <form onSubmit={postFormData}>
            <input placeholder="FirstName"/><br/><br/>
            <input placeholder="LastName"/><br/><br/>
            <input placeholder="Age" type="Number"/><br/><br/>
                <select>
                 <option>Gender</option>  
                <option>Male</option>
                <option>Female</option>
                <option>Neuter</option>
               
                </select><br/><br/>

                <button style={{color:"white", backgroundColor:"blue"}}>submit</button><br/><br/>
           </form>
          

            
            

        </div>
    )
}

export default FormSubmit;