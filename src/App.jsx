import Greeting from "./components/Greeting";
import Jobs from "./components/Jobs";
import Message from "./components/Message";
import './App.css';

function App() {
  const uploading  = true;
  return <h1>
    {
      uploading ? <Loading /> : "No Such File"
    }
  </h1>
}


function Loading(){
  return <span>Files are loading...</span>
}

export default App