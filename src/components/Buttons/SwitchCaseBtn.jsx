

// conditional rendering using switch case


const SCBtn= ()=>{

    let isloggedIn = true;

 
       switch(isloggedIn) {
        case true:
            return <button>logOut</button>
            
        case false:
            return <button>logIn</button>
                  
       
        default:
            return null;
       }
            
            

    

}

export default SCBtn;