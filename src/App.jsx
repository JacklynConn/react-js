import Greeting from "./components/Greeting";
import Jobs from "./components/Jobs";
import Message from "./components/Message";
import './App.css';

function App() {
  return (
    <div className="container">
      <Greeting />
      <Jobs />
      <Message />
    </div>
  )
}

export default App