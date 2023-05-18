import React from "react";

function Ppp(props){
    return 
    (<div>
    {props.itemlist.map((item)=>
    <p>{item.desc}</p>)}
    </div>)
}

export default Ppp;