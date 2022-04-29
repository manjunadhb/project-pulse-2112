import React from 'react'

function SignUp() {
  return (
    <div className='signup'>
      <div className='imagelogo'>
      <img className='imageMain' src="./images/logo1.png" alt="" />
      </div>
    <div className="app1">
      
      <form>
      <div className="main">
        <h1>Sign Up</h1>

        <p>Enter your name exactly as per your educational certificates.:</p>
        <div className='input1'>
        <input type="text"placeholder="Name as per Certificates"></input>
        </div>
        <br></br>
        <select className="selection">
        <option value="choose gender">Choose Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
       </select>
       <br>
       </br>
       <select className="selection">
        <option value=" choose maritial Staus">Choose Maritial Status</option>
        <option value="singele">Single</option>
        <option value="Married">Married</option>
       </select>
       <br></br>
       <img></img>
       <br></br>
       <button>Select Image</button>
       <br></br>
       <div className='input1'>
       <input type="text"placeholder="Mobile Number"></input>
       </div>
       <br></br>
       <div className='input1'>
       <input type="text"placeholder="City/Town"></input>
       </div>
       <br>
       </br>
       <select className="selection">
        <option value="Select State">Choose Your State</option>
        <option value="ap">Andhra Pradesh</option>
        <option value="arp">Arunachal Pradesh</option>
        <option value="ass">Assam</option>
        <option value="bh">Bihar</option>
        <option value="ka">Karnataka</option>
        <option value="kl">Kerala</option>
        <option value="mh">Maharastra</option>
        <option value="mp">Madhya Pradesh</option>
        <option value="tn">TamilNadu</option>
        <option value="ts">Telangana</option>
        <option value="dl">Delhi</option>
       </select>
       <br></br>
       <p>Enter Your Account Details Below</p>
       <div className='input1'>
        <input type="email"placeholder="Email"></input>
        </div>
        <br></br>
        <div className='input1'>
        <input type="Password"placeholder="Password"></input>
        </div>
        <br></br>
        <div className='input1'>
        <input type="password"placeholder="Re-Type Password"></input>
        </div>
        <br></br>
        <br></br>
        <div className="checkbox">
        <input type="checkbox" className="checkBox"></input>
        <label >I agree to the <a href="https://docs.google.com/document/d/1UNc8jOJtjQJttCxogPfFQcXFl6gNm8iuOwiRfbkmXcw/edit?usp=sharing">Terms of Service & Privacy Policy</a></label>
        </div>
        <br></br>
        <button className="back">Back</button>
        
        <button className="submit">Submit</button>
      </div>
      </form>
      <h3></h3>
     
    </div>
    </div>
  )
}

export default SignUp