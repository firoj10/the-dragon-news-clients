import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { useState } from 'react';


const Register = () => {
  const{createUser}= useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);

  const handleSingUp = event =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const photo = form.photo.value
    const email = form.email.value
    const password = form.password.value
    console.log(email,password, name, photo)
    
    createUser(email,password)
    .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      
      })
      .catch((error) => {
        console.log(error)
 
      });
        }



        const handleAccepted = event =>{
          setAccepted(event.target.checked)
        }
    return (
        <Container  className='w-25 mx-auto'>
          <Form onSubmit={handleSingUp}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"  name='name' placeholder="name" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control type="text" name="photo" placeholder="photo" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox"  onClick={handleAccepted} name="accept" label={<> Accept
         <Link to="/terms">Terms and 
        Condition</Link></>}/>
      </Form.Group>
      <Button variant="primary" disabled={!accepted} type="submit">
        Register
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

export default Register;