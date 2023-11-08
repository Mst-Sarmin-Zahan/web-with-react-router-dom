const IIF =(props)=>{

    let marks= 90;
    return(
        <div>
            <h4>{props.title}</h4>
            <h1>{props.des}</h1>
            {(()=>{
                if(marks>79){
                    return <h4>Your GPA:A+</h4>
                }else{
                    return <h4>You can not achieve A+</h4>
                }
            })()}
        </div>
    )

}
export default IIF;