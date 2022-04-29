import React from 'react'
import GetParticipants from '../Presentation/GetParticipants'



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
     
       <button className='btnPresentation'> Get Participants </button>
       <button className='btnPresentation'>Choose Participant</button>
       <button className='btnPresentation'>Choose Topic</button>
       <button className='btnPresentation'>Review Presentation</button>
       <button className='btnPresentation'>Presentation History</button>
       <div>
         <br></br>
         <br></br>
         <table>
            <h4 className='topic'>Participants Here</h4>
         </table>
           </div>
       <br></br>
       <br></br>
       <div>
         <table>
           <h4 className='topics'>Topic Here</h4>
         </table>
       </div>
    </div>
  )
}

export default Presentation