import {React ,useState} from 'react'
import logo from '../Assets/logo.png'
import './Summary.css'
const Summary = () => {
    const [isVisible, setIsVisible] = useState(true);

    // Function to hide the content
    const hideContent = () => {
      setIsVisible(false);
    };
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };
  return (
        <div className='page'>
            {/* strat of sidebar */}
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
                 </div>
            {/* end of side bar */}
            <div className='content'> 
                <div className='Summary'>
                    <div className='Spans'>
                        <span className='number-4'> 4</span>
                    </div>
                    <div className='Spans'>
                        <span className='text-summery'> Summery</span> 
                    </div>
                </div>
                {/* the box of information */}
                <div className='box-info'>
                    {/* 1 */}
                    <div className='first-info'>
                        <h3>Confirm your Details</h3>
                        <h4>Full Name</h4>
                        <p>WQW</p>
                        <h4>Email</h4>
                        <p> jake890@gmail.com</p>
                        <h4>MobileNumber</h4>
                        <p> (+20)=01204565761</p>
                    </div>
                    <div className='secound-info'>
                        <h4> Courses</h4>
                        <p>HTML</p>
                        <h4>Student Categoury</h4>
                        <p>Backalor</p>
                        <h4> Date and Birth</h4>
                        <p>2007/1/1</p>
                    </div>
                </div>
                {/* buttons */}
                <div className='btn'>
                      <button className='btn-1'> back</button>
                      <button className='btn-2'> Next</button>
                    </div>
            </div>
        </div>
  )
}

export default Summary