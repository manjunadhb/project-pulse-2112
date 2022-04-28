import React from 'react'

function TaskReview() {
  return (
    <div>
        <table>
            
           <h6 id="table1">2112 Batch  1.20|15|75 2.15|0|0 3.15|0|0 4.15|0|0</h6>
         <h6 id="table2">Time Up and 50 sessions left</h6>
        
            <table>
            <tr>
                <th>Type</th>
                <th>Allocations</th>
                <th>Consumed</th>
                <th>Overall</th>
                <th>Overall %</th>
            </tr>
            <tr>
                <td>Class Lab</td>
                <td>0</td>
                <td>0</td>
                <td>15</td>
                <td>23%</td>
            </tr>

            <tr>
                <td>Only Lab</td>
                <td>0</td>
                <td>0</td>
                <td>83</td>
                <td>237%</td>
            </tr>

            <tr>
                <td>Holidays</td>
                <td>0</td>
                <td>0</td>
                <td>24</td>
                <td>120%</td>
            </tr>

            <tr>
                <td>Total Holidays</td>
                <td>0</td>
                <td>2</td>
                <td>122</td>
                <td>102%</td>
            </tr>
            </table>
            </table>  
       
    </div>
  )
}

export default TaskReview