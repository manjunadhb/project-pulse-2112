import Header from "./Header";
import Table from 'react-bootstrap/Table'
const Tasks = () => {
  return (
    <>
      <Header />
      <div class="alert" role="alert">
        <spam style={{fontSize:'2rem'}}>Tasks</spam><spam>Tasks assigned to you for completion and upload</spam>
        
        <div className="container-12 mx-2 my-2">
          <div className="card">
          <div className="card-header" style={{backgroundColor:'rgba(92, 176, 230, 0.99)',color:'white'}}>💬Tasks Assigned to You</div>
          <div className="row">
           
          <select className="col-1 my-4 mx-4" style={{padding:'8px'}}>
            <option>5</option>
            <option>15</option>
            <option>20</option>
            <option selected>All</option>
            
          </select>
          
          </div>
          <table>
            <th>
              <thead>
              <td>#</td>
              <td>UID</td>
              <td>ID</td> 
              <td>Type</td>
              <td>Title</td>
              <td>Requirements</td>
              <td>issues</td>
              <td>Build to Store</td>
              <td>Deadline</td>
              <td>Max.File Size</td>
              <td>Status</td>
              <td>Points Earned</td>
              </thead>
            </th>
            <tr>
              <tbody className="success">
                <td>1</td>
                <td>BTT1</td>
                <td>46457</td>
                <td>Technical Task-Theory()</td>
                <td>Variables and Datatypes</td>
                <td>Please go thru variables, datatypes and its memory allocations and ranges.</td>
                <td>Open : 0
                Fixed : 0
                Closed : 0</td>
                <td>NA</td>
                <td>Before 11:00 am on 28 January 2021</td>
                <td>Not more than 0 MB</td>
                <td><a href='#'>Review Pending  </a></td>
                <td>0/100</td>
              </tbody>
            </tr>
            <tr>
              <tbody>
                <td>2</td>
                <td>BTT1</td>
                <td>46457</td>
                <td>Technical Task-Theory()</td>
                <td>Variables and Datatypes</td>
                <td>Please go thru variables, datatypes and its memory allocations and ranges.</td>
                <td>Open : 0
                Fixed : 0
                Closed : 0</td>
                <td>NA</td>
                <td>Before 11:00 am on 28 January 2021</td>
                <td>Not more than 0 MB</td>
                <td><a href='#'>Review Pending  </a></td>
                <td>0/100</td>
              </tbody>
            </tr>
            <tr>
              <tbody>
                <td>3</td>
                <td>BTT1</td>
                <td>46457</td>
                <td>Technical Task-Theory()</td>
                <td>Variables and Datatypes</td>
                <td>Please go thru variables, datatypes and its memory allocations and ranges.</td>
                <td>Open : 0
                Fixed : 0
                Closed : 0</td>
                <td>NA</td>
                <td>Before 11:00 am on 28 January 2021</td>
                <td>Not more than 0 MB</td>
                <td><a href='#'>Review Pending  </a></td>
                <td>0/100</td>
              </tbody>
            </tr>
            <tr>
              <tbody>
                <td>4</td>
                <td>BTT1</td>
                <td>46457</td>
                <td>Technical Task-Theory()</td>
                <td>Variables and Datatypes</td>
                <td>Please go thru variables, datatypes and its memory allocations and ranges.</td>
                <td>Open : 0
                Fixed : 0
                Closed : 0</td>
                <td>NA</td>
                <td>Before 11:00 am on 28 January 2021</td>
                <td>Not more than 0 MB</td>
                <td><a href='#'>Review Pending  </a></td>
                <td>0/100</td>
              </tbody>
            </tr>
            <tr>
              <tbody>
                <td>1</td>
                <td>BTT1</td>
                <td>46457</td>
                <td>Technical Task-Theory()</td>
                <td>Variables and Datatypes</td>
                <td>Please go thru variables, datatypes and its memory allocations and ranges.</td>
                <td>Open : 0
                Fixed : 0
                Closed : 0</td>
                <td>NA</td>
                <td>Before 11:00 am on 28 January 2021</td>
                <td>Not more than 0 MB</td>
                <td><a href='#'>Review Pending  </a></td>
                <td>0/100</td>
              </tbody>
            </tr>
            <tr>
              <tbody>
                <td>1</td>
                <td>BTT1</td>
                <td>46457</td>
                <td>Technical Task-Theory()</td>
                <td>Variables and Datatypes</td>
                <td>Please go thru variables, datatypes and its memory allocations and ranges.</td>
                <td>Open : 0
                Fixed : 0
                Closed : 0</td>
                <td>NA</td>
                <td>Before 11:00 am on 28 January 2021</td>
                <td>Not more than 0 MB</td>
                <td><a href='#'>Review Pending  </a></td>
                <td>0/100</td>
              </tbody>
            </tr>
            <tr>
              <tbody>
                <td>1</td>
                <td>BTT1</td>
                <td>46457</td>
                <td>Technical Task-Theory()</td>
                <td>Variables and Datatypes</td>
                <td>Please go thru variables, datatypes and its memory allocations and ranges.</td>
                <td>Open : 0
                Fixed : 0
                Closed : 0</td>
                <td>NA</td>
                <td>Before 11:00 am on 28 January 2021</td>
                <td>Not more than 0 MB</td>
                <td><a href='#'>Review Pending  </a></td>
                <td>0/100</td>
              </tbody>
            </tr>
            <tr>
              <tbody>
                <td>1</td>
                <td>BTT1</td>
                <td>46457</td>
                <td>Technical Task-Theory()</td>
                <td>Variables and Datatypes</td>
                <td>Please go thru variables, datatypes and its memory allocations and ranges.</td>
                <td>Open : 0
                Fixed : 0
                Closed : 0</td>
                <td>NA</td>
                <td>Before 11:00 am on 28 January 2021</td>
                <td>Not more than 0 MB</td>
                <td><a href='#'>Review Pending  </a></td>
                <td>0/100</td>
              </tbody>
            </tr>
            <tr>
              <tbody>
                <td>1</td>
                <td>BTT1</td>
                <td>46457</td>
                <td>Technical Task-Theory()</td>
                <td>Variables and Datatypes</td>
                <td>Please go thru variables, datatypes and its memory allocations and ranges.</td>
                <td>Open : 0
                Fixed : 0
                Closed : 0</td>
                <td>NA</td>
                <td>Before 11:00 am on 28 January 2021</td>
                <td>Not more than 0 MB</td>
                <td><a href='#'>Review Pending  </a></td>
                <td>0/100</td>
              </tbody>
            </tr>
            <tr>
              <tbody>
                <td>1</td>
                <td>BTT1</td>
                <td>46457</td>
                <td>Technical Task-Theory()</td>
                <td>Variables and Datatypes</td>
                <td>Please go thru variables, datatypes and its memory allocations and ranges.</td>
                <td>Open : 0
                Fixed : 0
                Closed : 0</td>
                <td>NA</td>
                <td>Before 11:00 am on 28 January 2021</td>
                <td>Not more than 0 MB</td>
                <td><a href='#'>Review Pending  </a></td>
                <td>0/100</td>
              </tbody>
            </tr>
            <tr>
              <tbody>
                <td>1</td>
                <td>BTT1</td>
                <td>46457</td>
                <td>Technical Task-Theory()</td>
                <td>Variables and Datatypes</td>
                <td>Please go thru variables, datatypes and its memory allocations and ranges.</td>
                <td>Open : 0
                Fixed : 0
                Closed : 0</td>
                <td>NA</td>
                <td>Before 11:00 am on 28 January 2021</td>
                <td>Not more than 0 MB</td>
                <td><a href='#'>Review Pending  </a></td>
                <td>0/100</td>
              </tbody>
            </tr>
            <tr>
              <tbody>
                <td>1</td>
                <td>BTT1</td>
                <td>46457</td>
                <td>Technical Task-Theory()</td>
                <td>Variables and Datatypes</td>
                <td>Please go thru variables, datatypes and its memory allocations and ranges.</td>
                <td>Open : 0
                Fixed : 0
                Closed : 0</td>
                <td>NA</td>
                <td>Before 11:00 am on 28 January 2021</td>
                <td>Not more than 0 MB</td>
                <td><a href='#'>Review Pending  </a></td>
                <td>0/100</td>
                
              </tbody>
            </tr>
          </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tasks;
