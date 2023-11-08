

//if-else conditional rendering

const Button1= ()=>{

    const btn = (status)=>{
        if(status){
           return <button>logOut</button>
        }else{
          return <button>logIn</button>
        }
    }

    return(
        <div>
            <h1>it is Button</h1>
            {btn(false)}
          

            
            

        </div>
    )
}

export default Button1;