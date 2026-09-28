import {useState} from "react";
function App() {
  const [name,setName]=useState("");
  const [urn,setUrn]=useState("");

  function handleStartExam(){
    window.electron.startExam(name,urn);
  }

  return(<div>

    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
    <input type="text" onChange={(e) => setUrn(e.target.value)} placeholder="Enter your URN" />
    <button onClick={()=>handleStartExam()}>Start</button>
  </div>);
}

export default App;
