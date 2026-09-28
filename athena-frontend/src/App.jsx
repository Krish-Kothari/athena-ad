import {useState} from "react";
function App() {
  const [name,setName]=useState("");
  const [urn,setUrn]=useState("");
  const [sessionId,setSessionId]=useState("");
  const [loading,setLoading]=useState(false);
  const [totalMCQ,setTotalMCQ]=useState(0);

  async function getTotalMCQ(){
      const total=await window.electron.getTotalMCQ();
      setTotalMCQ(total);
      console.log(total)
  }
    };

  async function handleStartExam(){
    const id=await window.electron.startExam(name,urn);
    setSessionId(id);
    setLoading(false);
  }

  return(<div>

    <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
    <input type="text" onChange={(e) => setUrn(e.target.value)} placeholder="Enter your URN" />
    <button onClick={()=>handleStartExam()}>Start</button>
  </div>);

export default App;
