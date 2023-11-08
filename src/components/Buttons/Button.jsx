

//Ternary OPerator


const Button= ()=>{

    let status = true;

    return(
        <div>
           {status?
           <button>logOut</button>:<button>logIn</button>}
          

            
            

        </div>
    )
}

export default Button;