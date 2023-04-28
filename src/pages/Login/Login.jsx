import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext } from 'react';

const Login = () => {
  const {singIn}= useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/category/0';

  const handleSingin = event =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email,password)


    singIn(email, password)
    .then((result) => {
        const loggerSingIn = result.user;
        console.log(loggerSingIn)
        navigate(from ,{replace: true})
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      })
}
    return (
    
          <Container  className='w-25 mx-auto'>
          <Form onSubmit={handleSingin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button> <br/>
      <Form.Text className="text-muted text-success">
        Dont't Have an Account? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-muted">
     
        </Form.Text>
        <Form.Text className="text-muted">
    
        </Form.Text>
    </Form>
          </Container>
     
    );
};

export default Login;