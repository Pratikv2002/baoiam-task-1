import React, { useState } from "react";
import "./Section1.css";
import validator from 'validator'
export default function Section1() {
  // Array of Register Student Details
  const [studentDetails, setStudentDetails] = useState([]);
  // Check Email validation 
  const [emailValid, setEmailValid] = useState(true)
  // Cheak Mobile Number Validation
  const [mobileNoValid, setMobileNoValid] = useState(true);
  // Check all is valid or not
  const [AllValid, setAllValid] = useState(true)
  // send otp clicked or not
  const [sendOtpClicked, setsendOtpClicked] = useState(false)
  //  otp valid or not 
  const [otpValid, setOtpValid] = useState(false)
    // Student details
  const [details, setDetails] = useState({
    childName: "",
    MobileNo: "",
    email: "",
    newState: "",
    studentClass:""
  });
// Handle changes of input
  function handleOnChange(event) {
    const { name, value } = event.target;
    setDetails((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  }
  // Try Now Btn
  function handleOnClick(event) {
    event.preventDefault();
    if(emailValid && mobileNoValid && details.MobileNo!==''&&details.childName!=='' &&otpValid && details.newState!==''&&details.studentClass!==""){
      setAllValid(true)
      setStudentDetails((previous) => {
        return [...previous, details];
      });
    }
   else{
       setAllValid(false)

   }
  }
  // Email Valid or not cheacker
  function cheackValidMail(){
    if (validator.isEmail(details.email) && details.email!=='') {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }
   //Mobile No valid or not checker
  function cheackValidMobile(){
    if (details.MobileNo.length === 9 && details.MobileNo!=='') {
      setMobileNoValid(true);
    } else {
     setMobileNoValid(false);
    }
  }
  // handle onclick send Otp
 function handleSendOtp(){
   if(mobileNoValid && details.MobileNo!==''){
    setsendOtpClicked(true)
   }
   else{
    setsendOtpClicked(false)
    setMobileNoValid(false)
   }
   
 }
 function verifyOtp(event){
  //  console.log(event.target.value)
  if(Number(event.target.value)===123456){
    console.log('valid otp')
    setOtpValid(true)
    setsendOtpClicked(false)
  }
  else{
    setOtpValid(false)
  }
 }
  console.log(studentDetails);
  return (
    <section id="baoiam" className="section1">
      <div className="section1Container">
        <div className="row1">
          <img
            className="imgSection1"
            src="https://cdn1.byjus.com/byjusweb/img/classes/Banner Image 1.png"
            alt=""
          />
        </div>
        <div id="bookClass" className="row1">
          <div className="row1column2">
            <div>
              <h1 className="row1H1">Tuitions Redefined</h1>
              <div className="H6">
                <h6 className="row1H5">
                  Delivering superior learning and results through a{" "}
                </h6>
                <h6 className="row1H5">unique two-teacher model</h6>
              </div>
            </div>
            <div id="bookClass" className="newform ">
              <h4>Book your Free Class</h4>
              <h6>learn from India's best teachers</h6>
              <h5>Enter Your Details</h5>
              <div className="formDiv">
                <form className="form" action="">
                  <input
                    onChange={handleOnChange}
                    type="text"
                    name="childName"
                    placeholder="Enter Name of your Child"
                    pattern="[a-zA-Z]*"
                    required={true}
                  />
                  <div className="mobileNoDiv">
                    <input
                      onChange={(event)=>{handleOnChange(event);cheackValidMobile()}}
                      pattern="^\d{10}$"
                      name="MobileNo"
                      required={true}
                      type="tel"
                      maxLength="10"
                      data-mobile-input
                      data-error-message="Enter a valid 10 digit Mobile Number"
                      placeholder="Enter your Mobile Number"
                    />
                    {!otpValid===true?<button onClick={handleSendOtp}>Send OTP</button>:<button id="verified" disabled href="#">verified</button>}
                   {sendOtpClicked&&<div className="otpDiv" ><p>send OTP on {details.MobileNo}</p>
                       <div className="otp">
                       <input pattern="^\d{6}$" required maxLength={6} onChange={verifyOtp} placeholder="OTP"></input>
                          <h6>30sec</h6></div>
                        {!otpValid&&<h6>Entered otp is incorrect</h6>}
                       </div>}
                  </div>
                  {!mobileNoValid && <div className="error"><p>Please Enter 10 digit valid mobile No</p></div>}
                  <input
                    onChange={(event)=>{handleOnChange(event);cheackValidMail()}}
                    name="email"
                    type="email"
                    placeholder="Email Address"
                  />
                    {!emailValid && <div className="error"><p>Please Enter valid Email</p></div>}
                  <select
                    onChange={handleOnChange}
                    name="newState"
                    id="newState"
                    className="selectTag"
                  >
                    <option value="">Select State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">
                      Dadar and Nagar Haveli
                    </option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Karnataka">Karnataka</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                   </select>
                  {otpValid&&<div className="child class">
                    <h5>Select Class</h5>
                    <div className="studentClassName">
                       <div className="studentClassInside">
                            <input onChange={handleOnChange} type="radio" id="10th" name="studentClass" value="10th"/>
                            <label htmlFor="">10th class</label><br/>
                            <input onChange={handleOnChange} type="radio" id="9th" name="studentClass" value="9th"/>
                            <label htmlFor="">9th class</label><br/>
                            <input onChange={handleOnChange} type="radio" id="8th" name="studentClass" value="8th"/>
                             <label htmlFor="">8th class</label>
                       </div>
                       <div className="studentClassInside">
                            <input onChange={handleOnChange} type="radio" id="7th" name="studentClass" value="7th"/>
                            <label htmlFor="">7th class</label><br/>
                            <input  onChange={handleOnChange} type="radio" id="6th" name="studentClass" value="6th"/>
                            <label htmlFor="">6th class</label><br/>
                            <input  onChange={handleOnChange} type="radio" id="5th" name="studentClass" value="5th"/>
                            <label htmlFor="">5th class</label>
                       </div>
                    </div>
                  </div>}
                  <button
                    onClick={handleOnClick}
                    type="submit"
                    className="tryNowBtn">
                    Try Now
                  </button>
                  {!AllValid && <div className="errorFinal"><p>Please fill required Input*</p></div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
