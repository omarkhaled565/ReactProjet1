import  {React,useState} from 'react'
import './master.css'
import logo from '../Assets/logo.png'
import { BrowserRouterasRouter, Route, Link, Routes } from 'react-router-dom';
import Part1 from '../Basicinformation/Part1';
export const Getstrated = () => {
  const [isDevContentVisible, setIsDevContentVisible] = useState(true);

  const HiddenDevContent = () => {
    setIsDevContentVisible((prev) => !prev);
  };
  const [isDevContentinVisible ,setIsDevContentinVisible] =useState(true);
  const showDevContent =() =>{
    setIsDevContentinVisible ((prev) => !prev)
  }
  
  return (
    <div className='page'>
        {/* sidebar */}
        <div className='sidebar'>
                <div className='info'>
                    <img src = {logo} alt="unknown"></img>
                    <h4>Elimupro School of Engineering</h4>
                </div>
                 {/* start of text */}
                <div div className='text'>
                    <h5> Application Form </h5>
                    <h6> Complete all steps to finish the application process. </h6>
                </div>
                {/* end of text */}
        </div>
        {/* end sidebar */}
        {/* start content */}
        <div className='content'>
          <div className='student-info'>
                <div className='spans'>
                            <span className='number'> 1</span>
                            <span className='text'> Get started</span>
              </div>
            </div>
             <div className='input-field'> 
                      <label>Mobile Number*</label>
                      <input   className ="input"name='username' required=' please fill it' placeholder='mobile number' ></input>
                
                  </div> 
             <div className='btn'>
                      <button className='btn-1'> back</button>
                      <button className='btn-2'   >
                        
                            Next
                       </button>

              
                 </div>  
            
        </div>
        {/* end content */}
    </div>
  )
}
