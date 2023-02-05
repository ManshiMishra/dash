import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Dashheader from './Components/Dashheader';
import Dashcontent from './Components/Dashcontent';
import Dashsidebar from './Components/Dashsidebar';
import './App.css';
import PieChart from './Components/PieChart';


const App=()=> {
  return (
    <>
    <div className="App">
    <Dashheader/>
      <div className='dashmain'>
      <Dashsidebar/>
      <div className='temp'><Dashcontent /></div>
      </div>
    
    </div>
    </>
  );
}

export default App;
