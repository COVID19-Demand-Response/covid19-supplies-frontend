import React from 'react';
import { Button, Form, FormGroup, Input, Label, Row, Col, Alert } from 'reactstrap';
import { withRouter } from "react-router-dom";
import { BaseComponent } from '../components/BaseComponent';
import { AuthenticationService } from '../services/AuthenticationService';

class AuthForm extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = { ...this.state, loginFailed: false, loginInfo: {
            user_name: '',
            password: ''
        }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLoginInfoChange = this.handleLoginInfoChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleLoginInfoChange(event) {
    let loginInfo = this.state.loginInfo;
    loginInfo[event.target.name] = event.target.value;
    this.setState({...this.state, loginInfo: loginInfo});
  }

  handleChange(event) {
    let state = this.state[event.target.name] = event.target.value;
    this.setState({...state});
  }

  login = event => {
    event.preventDefault();
    this.validate();
    
    AuthenticationService.login(this.state.loginInfo).subscribe(resp => {
      if(resp && resp.status === true) {
        this.props.history.push("/");
      } else {
        this.setState({...this.state, loginFailed: true});
      }
    });
  }

  validate() {

  }
  render() {
    
    return (
      <Form onSubmit={this.handleSubmit}>
        {
          <div className="text-center pb-4">
            <h5 className="p-2 text-light bg-gradient-secondary-theme-right">COVID19 Demand Response</h5>
          </div>
        }
        {
          this.state.loginFailed == true ? 
          <Alert color="danger">
            Login failed due to invalid credentials.
          </Alert> : '' 
        }
        <FormGroup>
          <Label>User Name</Label>
          <Input type="text" name="user_name" value={this.state.loginInfo.user_name} onChange={this.handleLoginInfoChange}/>
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input type="password" name="password" value={this.state.loginInfo.password} onChange={this.handleLoginInfoChange} />
        </FormGroup>
       
        <hr />
        <Row>
          <Col xl={4} lg={4} md={4}>
            <Button
              size="md"
              block
              className="bg-gradient-secondary-theme-right border-0"
              onClick={this.login}>
              Login
            </Button>
          </Col>
          <Col xl={4} lg={4} md={4}>
            Don't have account? &nbsp;&nbsp;
            <Button
              size="sm"
              color="primary"
              outline>
              Register
            </Button>
          </Col>
          <Col xl={4} lg={4} md={4}>
            <Button outline color="link" className="text-primary">Forgot Password?</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default withRouter(AuthForm);
