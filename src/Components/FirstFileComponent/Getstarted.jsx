import  {React,useState} from 'react'
import './master.css'
import logo from '../Assets/logo.png'
export const Getstarted = () => {
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
            <div className='vertical-line0'></div>
            <div className='MoreOptions0'>
                <h4 className='numbers0'> 2</h4>
                <h4 className='texts0'>Basicinformation</h4>
            </div>
            {/* 2 */}
            <div className='vertical-line1'></div>
            <div className='MoreOptions1'>
                <h4 className='numbers1'> 3</h4>
                <h4 className='texts1'>OptionalDetails</h4>
            </div>
            <div className='vertical-line2'></div>
            <div className='MoreOptions2'>
                <h4 className='numbers2'> 3</h4>
                <h4 className='texts2'>Summary</h4>
            </div>
        </div>
        {/* end content */}
    </div>
  )
}
