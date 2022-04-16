import "./App.css";
import { getAuth } from "firebase/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import banner from "./images/Flickr.jpeg";
import user from "./images/login-user.jpeg";
import app from "./firebase.init";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState } from "react";

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    console.log("submitted", email, password);
    event.preventDefault();
  };

  return (
    <div className="App bg-info container rounded mt-4">
      <div className="user-img">
        <img src={user} alt="" />
      </div>
      <div className="banner-img">
        <img src={banner} alt="" />
      </div>

      <div className="registration w-50 mx-auto">
        <h2 className="text-success">Stay Connected!!!</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
