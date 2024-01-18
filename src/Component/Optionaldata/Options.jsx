import {React ,useState} from 'react'
import logo from '../Assets/logo.png'
import './Option.css'
export const Options = () => {
    
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
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

            <div className='optional-details'>
                        {/* start of span */}
                        <span className='spans'>
                                <span className='number'> 3</span>
                                <span className='text'>OptionalDetails</span>
                        </span>
                        {/* end of span */}
                        <div className='options'>
                                    {/* 1 */}
                                <div className='date-1'>
                                        <label className='lable' > DateOfBirth</label>
                                        <input className='dateof-birth' placeholder='Date of birth' ></input>
                                </div>
                                {/* 2 */}
                                <div className='data-2'>
                                        <label className='lable' > Gender</label>
                                        <select className='gender-1' id="dropdown" value={selectedOption} onChange={handleSelectChange} placeholder="courses">
                                                <option value=""></option>
                                                <option value="option1">male</option>
                                                <option value="option2">female</option>
                                            <option value="option3">another</option>
                                        </select>
                    
                                 </div>
                            
                          </div>
                          {/* secound */}
                          <div className='optioner'>
                                     {/* 1 */}
                                    <div className='date-1'>
                                        <label className='lable' > postal Address</label>
                                        <input className='dateof-birth' placeholder='Address' ></input>
                                    </div>
                                    {/* 2 */}
                                    <div className='data-2'>
                                                <label className='lable' > Town</label>
                                                <select className='gender-1' id="dropdown" value={selectedOption} onChange={handleSelectChange} placeholder="courses">
                                                        <option value=""></option>
                                                        <option value="option1">cairo</option>
                                                        <option value="option2">Giza</option>
                                                    <option value="option3">suez</option>
                                                </select>
                                                
                                     </div>
                          </div>
                          {/* third */}
                          <div className='optioner'>
                                {/* 1 */}
                                <div className='date-1'>
                                        <label className='lable' > country</label>
                                        <select className='gender-1' id="dropdown" value={selectedOption} onChange={handleSelectChange} placeholder="courses">
                                                    <option value=""></option>
                                                    <option value="option1">lebannon</option>
                                                    <option value="option2">syria</option>
                                                <option value="option3">egypt</option>
                                            </select>
                  
                                 </div>
                          </div>
                          {/* button */}
                         
                
                 </div>
























             {/* start of button */}
             <div className='btn'>
                      <button className='btn-1'> back</button>
                      <button className='btn-2'> Next</button>
            </div>      
        </div>
        {/* end content */}
    </div>
  )
}
