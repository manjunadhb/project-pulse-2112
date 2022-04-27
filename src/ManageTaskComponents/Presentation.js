import React from 'react'



function Presentation() {
  return (

    <div className="divPresentation">
       <label className="divPresentation">Choose Current Batch</label>
      <select className="divPresentation">
           <option onClick={()=>{}}>2112</option>
           <option>2111</option>
           <option>2110</option>
           <option>2109</option>
       </select>
     
       <button className='btnPresentation'>Get Participants</button>
       <button className='btnPresentation'>Choose Participant</button>
       <button className='btnPresentation'>Choose Topic</button>
       <button className='btnPresentation'>Review Presentation</button>
       
    </div>
  )
}

export default Presentation