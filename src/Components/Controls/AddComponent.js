import React, { useState } from 'react'

let AddComponent = () => {
    let [Component , setComponent] = useState([1,2,3]);
    let addComponent =()=>{
        let newComponent  = [...Component , Component.length + 1];
        setComponent(newComponent);
    };
    let removeComponent = ()=>{
        let newComponent = Component.filter((value , i )=> i !== Component.length - 1);
         setComponent(newComponent);
    };

    let button = Component.map((value) => <button>{value}</button>);
    
  return (
    <div>
      <button onClick={addComponent}>ADD</button>
      <button onClick={removeComponent}>REMOVE</button>
      <hr />
      {button}
    </div>
  );
}

export default AddComponent
