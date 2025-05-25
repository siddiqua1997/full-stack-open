const Notifications = ({ message, className}) =>{
    if(!message){
        return null
    }
    return(
        <div className={className}>
            <h2>{message}</h2>
        </div>
    )
}

export default Notifications