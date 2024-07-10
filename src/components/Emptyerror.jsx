const Emptyerror = ({items}) =>{
    return(
        <div  style={{textAlign:"center",marginTop:"20px"}}>
            {items.length == 0 ? <span>Empty</span> : null}
        </div>
    )
}


export default Emptyerror;