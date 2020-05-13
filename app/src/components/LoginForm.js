import React from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { userLogin } from '../store/actions';

import { useForm } from '../hooks/useForm';

const LoginForm = props => {
  const [credentials, setCredentials] = useForm({
    username: "",
    password: "",
  });

  const handleSubmit = () => props.userLogin(credentials);

  return (
    <Form onSubmit={handleSubmit} className="bg-light px-4 py-5 rounded">
      <FormGroup>
        <Label for="username">Username</Label>
        <Input 
          onChange={setCredentials} 
          id="username" 
          name="username" 
          value={credentials.username} 
          placeholder="Enter username" 
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input 
          onChange={setCredentials} 
          id="password" 
          name="password" 
          value={credentials.password} 
          placeholder="Enter password" 
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}

export default connect(null, { userLogin })(LoginForm);