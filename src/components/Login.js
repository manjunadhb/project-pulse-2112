import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(true);
  let navigation = useNavigate();

  const changeHandler = (e) => {
    const name = e.target.name;

    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email === "student210101@gmail.com" && password === "abc") {
      setLoggedIn(true);
      navigation("/home");
    } else if (email === "pulseadmin@gmail.com" && password === "pulseadmin") {
      setLoggedIn(true);
      navigation("/admin");
    }
  };
  return (
    <div className="col-4 offset-4 " style={{ marginTop: "12%" }}>
      <h1>Login</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            value={data.email}
            autoFocus
            onChange={changeHandler}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>{" "}
          <Link className="offset-6" to="/forget">
            Forget password?
          </Link>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={changeHandler}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitHandler}>
          LogIn
        </Button>
      </Form>
    </div>
  );
};

export default Login;
