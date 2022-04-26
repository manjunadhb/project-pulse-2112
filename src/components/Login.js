import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  
const [loggedIn,setLoggedIn] = useState(true)
let navigation=useNavigate();
 const  studentHandler = (e)=>{
             e.preventDefault();
             if(loggedIn){
                 navigation("/home")
             }
}
 const  adminHandler = (e)=>{
             e.preventDefault();
             if(loggedIn){
                 navigation("/Admin")
             }
}

const changeHandler =(e)=>{
      console.log(e.target.value)
      
}
  return (
    <div className="col-4 offset-4 " style={{ marginTop: "12%" }}>
      <h1>Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" autoFocus onChange={changeHandler} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password"  onChange={changeHandler}/>
        </Form.Group>

        <Button
          
          variant="primary"
          type="submit"
          onClick={studentHandler}
        >
          Student
        </Button>

        <Button
           className="mx-2"
          variant="primary"
          type="submit"
          onClick={adminHandler}
        >
          Admin
        </Button>
      </Form>
    </div>
  );
};

export default Login;
