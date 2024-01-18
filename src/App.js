
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
              <Getstarted/>
            </div>
                       <div className='applicationRoutes'>
                          <Routes> 
                                  < Route path='/P' exact element ={<Part1/>}> </Route>
                                  <Route path= '/O' element={<Options/>}></Route>
                                  <Route path= '/S' element={<Summary/>}></Route>
                          </Routes>
                       </div>
                        
      </Router>
                
     
  
  );
  
}
  




export default App;

