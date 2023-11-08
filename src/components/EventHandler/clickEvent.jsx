
//set event as function causes code execute when user click[best practice]
const Event= ()=>{
    return(
        <button onClick={()=>{alert("It is on click event handler")}}>Event</button>
    )
}
export default Event;