
import './App.css';
import { Getstrated } from './Component/FirstFile/Getstrated';
import Part1 from './Component/Basicinformation/Part1';
import { Options } from './Component/Optionaldata/Options';
import Summary from './Component/Summary/Summary';
import { BrowserRouter as Router ,Routes  ,Link } from 'react-router-dom';
function App() {
  return (
    
         <div>
                <Router>
                    <Getstrated/> 
                    {/* <Part1/> */}
                        <Routes path='/src/Component/FirstFile/Getstrated.jsx'exact Component={Getstrated}/>
                        <Routes path='./Component/Basicinformation/Part1.jsx' Component={Part1}/>
                        <Routes path='/src/Component/Optionaldata/Options.jsx' Component={Options}/>
                        <Routes path='/src/Component/Summary/Summary.jsx' Component={Summary}/>
                </Router>
                
         </div>
  
  );
  
}
  




export default App;

