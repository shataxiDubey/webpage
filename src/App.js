
import './App.css';
import {GiWatch} from 'react-icons/gi'
import SecondComponent from './SecondComponent';
function App() {
  return (
    <div>
    <div id="top">
    <div id="top1"><GiWatch id="logo"/>
    <h1>WATCH</h1>
    </div>
   
    <nav id="nav-bar">
    <li>home</li>
    <li>feedback</li>
    </nav>
    </div>
<SecondComponent/> 
    </div>
  );
}

export default App;
