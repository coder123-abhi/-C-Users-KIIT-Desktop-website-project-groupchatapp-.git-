
import './App.css';
import Heading from './Components/Heading.jsx';
import Chatarea from './Components/Chatarea.jsx';

function App() {
  return (
    <>
    <div className="group-chat">
      <div className="heading">
<Heading/>
</div>
<div className="chat-area">
<Chatarea/>
  </div>
      </div>
    </>
  );
}

export default App;
