import AdminHeader from "./AdminHeader"
 
import { Dropdown, Nav } from "react-bootstrap"
import DropdownItem from "react-bootstrap/esm/DropdownItem"

const Ranking=()=>{
   
    return(
        <>
        <AdminHeader/>
        <ul className="col-sm-12 mx-2 my-4">
            <li><p>Report For</p></li>
            <li><select >
               <option> <div className="ui search">
                    <div className="ui icon input">
                        <input type='text' placeholder=" Search" className="prompt"></input>
                        <i className="search icon"></i>
                    </div>
                </div>
                </option>
                <option>2114</option>
                <option>2113</option>
                <option>2112</option>
                <option>2111</option>
                <option>2110</option>
                <option>2109</option>
                <option>2108</option>
                <option disabled>Completed Batches</option>
                </select>
            </li>
            <li><button type="button" className="btn btn-primary">Get Report</button></li>
        </ul>
        

        </>

    )
}

export default Ranking