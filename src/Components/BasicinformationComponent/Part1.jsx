import {React,useState }from 'react'
import logo from '../Assets/logo.png'
import './basic.css'
import {Link} from 'react-router-dom'
const Part1 = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [selectedOption1, setSelectedOption1] = useState('');

  const handleSelectChange1 = (event) => {
    setSelectedOption1(event.target.value);
  };
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleSelectChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };
  const [selectedOption0, setSelectedOption0] = useState('');

  const handleSelectChange0 = (event) => {
    setSelectedOption0(event.target.value);
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
             <div className='basic-information'> 
                            {/*spans  */}
                            <div className='spans'>
                                <span className='number'> 2</span>
                                  <span className='text'> BasicInformation</span>
                           </div>
                           {/*  end spans */}
                           <div className='input-1'>
                            <lable className='lable-1'>FirstName </lable>
                            <input className='input-11' name='First name' required ='please fill it' placeholder='first name'></input>
                          </div>
                          {/* middel name */}
                          <div className='input-1'>
                            <lable className='lable-1'>MiddleName </lable>
                            <input className='input-11' name='First name' required ='please fill it' placeholder='first name'></input>
                          </div>
                          {/* surname */}
                          <div className='input-1'>
                            <lable className='lable-1'>Surname </lable>
                            <input className='input-11' name='First name' required ='please fill it' placeholder='first name'></input>
                          </div>
                          {/* third part */}
                          
             </div>
             <div className='email-mobile'>
                                <div className='Em'>
                                    <lable className='lab-em'> email</lable>
                                    <input className='input-em' name="email" required='fill it' placeholder='Email'></input>
                                </div>
                                {/* 2 */}
                                <div className='mob'>
                                    <lable className='lab-em'> MobileNumber</lable>
                                    <input className='input-em' name="email" required='fill it' placeholder='Email'></input>
                                </div>
               </div>
               {/* another em-mobile */}
               <div className='email-mobile'>
                          <div className='Em'>
                                  <lable className='lab-em'> KCSE/KCPE Grade*</lable>
                                  <input className='input-em' name="email" required='fill it' placeholder='Email'></input>
                           </div>
                           {/* 2 */}
                           <div className='mob'>
                                  <lable className='lab-em'> KCSE/KCPE indexNumber</lable>
                                  <input  className='input-em' name="email" required='fill it' placeholder='Email'></input>
                          </div>
               </div>
               {/* another em-mobile */}
               <div className='email-mobile'>
                      {/* start */}
                      <div className='Em'>
                            <lable className='lab-em'> Courses</lable>
                            <select className='input-em' id="dropdown" value={selectedOption} onChange={handleSelectChange} placeholder="courses">
                                  <option value=""></option>
                                  <option value="option1">HTML</option>
                                  <option value="option2">CSS</option>
                                <option value="option3">JavaScript</option>
                          
                            </select>
                    </div>
                    {/* 2 */}
                    <div className='mob'>
                            <lable className='lab-em'> Student categoury</lable>
                            <select className='input-em' id="dropdown" value={selectedOption1} onChange={handleSelectChange1} placeholder="courses">
                                  <option value=""></option>
                                  <option value="option1">A</option>
                                  <option value="option2">B</option>
                                  <option value="option3">C</option>
                          
                            </select>

                    </div>
               </div>
               {/* another em mboile */}
               <div className='email-mobile'>
                  {/* start */}
                  <div className='Em'>
                      <lable className='lab-em'> Academic Year</lable>
                      <select className='input-em' id="dropdown" value={selectedOption2} onChange={handleSelectChange2} placeholder="courses">
                            <option value=""></option>
                            <option value="option1">2020/2021</option>
                            <option value="option2">2021/2022</option>
                           <option value="option3">2022/2023</option>
                    
                       </select>
                    </div>
                    {/* 2 */}
                    <div className='mob'>
                      <lable className='lab-em'> Academic Term</lable>
                      <select className='input-em' id="dropdown" value={selectedOption0} onChange={handleSelectChange0} placeholder="courses">
                            <option value=""> </option>
                            <option value="option1"> Term 1</option>
                            <option value="option2"> Term 2</option>
                           <option value="option3"> Term 3</option>
                    
                       </select>
                    </div>
               </div>
               {/* button */}
               <div className='bbtn'>
                   <button className='btn-1'> back</button>
                    <button className='btn-2'>  Next</button>
                  </div>

                  <div className='VerticalForm'></div>
                  <div className='numiration-info'>
                    <h4 className='numric'>3</h4>
                    <h4 className='texter'>OptionalDetails </h4>
                  </div>
                  <div className='VerticalForm0'></div>
                  <div className='numiration0-info'>
                    <h4 className='numric0'>4</h4>
                    <h4 className='texter0'>Summary </h4>
                  </div>


                          
        </div>
        {/* end content */}
    </div>
  )
}

export default Part1