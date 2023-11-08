// logical Operator
//if condition true, then button will show
//if condition false, do not show anything

const LObtn =()=>{
let isloggedIn = true;
return(
    <div>
        <h1>Logical Opertator Button</h1>
        {isloggedIn && <button>logOut</button>}
    </div>
)

}
export default LObtn;

