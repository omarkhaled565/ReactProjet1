
import './App.css';
import { Getstarted } from './Component/FirstFile/Getstarted';
import Part1 from './Component/Basicinformation/Part1';
import { Options } from './Component/Optionaldata/Options';
import Summary from './Component/Summary/Summary';
import {  BrowserRouter as Router  ,Routes ,Link ,Route} from 'react-router-dom';
function App() {
  return (
    
    
           
     <Router>
            <div className='form'>
                <Options/>
            </div>
                       <div className='applicationRoutes'>
                          <Routes> 
                                    <Route path='/' exact Component={Getstarted}>  </Route>
                                  < Route path='/P'  Component ={Part1}> </Route>
                                  <Route path= '/O'Component={Options}></Route>
                                  <Route path= '/S' Component={Summary}></Route>
                          </Routes>
                       </div>
                        
      </Router>
                
     
  
  );
  
}
  




export default App;

