import React, { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)
  const increase1=()=>{
    setNum(num+1)
  }
  const increase2=()=>{
    setNum2(num2+1)
  }
  useEffect(function () {
    console.log("useEffect is running....");
  },[num]);
  return <div>
    <h1>{num}</h1>
    <button className="p-12 bg-red-700" onMouseEnter={()=>{
      increase1()
    }}
    onMouseLeave={()=>{
      increase2()
    }}
    >Click here</button>
  </div>;
}

export default App;
