import React from 'react';
import { Button, Form, FormGroup, Input, Label, ButtonGroup, Row, Col, Alert } from 'reactstrap';
import { BaseComponent } from '../components/BaseComponent';
import { UserService } from '../services/UserService';

class AuthForm extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = { ...this.state, retypedPassword:'', userInfo: {
            org_name: '',
            type: 'H',
            user_name: '',
            password: '',
            first_name: '',
            last_name: '',
            description: '',
            address_line1: '',
            address_line2: '',
            city: '',
            state: '',
            country: 'US',
            zipcode: '',
            latitude: null,
            longitude: null,
            phone: null,
            alternate_phone: null,
            email: '',
            alternate_email: ''
        }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleUserInfoChange = this.handleUserInfoChange.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.updateUserType = this.updateUserType.bind(this);
  }

  handleUserInfoChange(event) {
    let userInfo = this.state.userInfo;
    userInfo[event.target.name] = event.target.value;
    this.setState({...this.state, userInfo: userInfo});
  }

  handleChange(event) {
    let state = this.state[event.target.name] = event.target.value;
    this.setState({...state});
  }

  updateUserType(event) {
    let userInfo = this.state.userInfo;
    userInfo.type = event.target.value;
    this.setState({...this.state, userInfo: userInfo});
  }

  registerUser = event => {
    event.preventDefault();
    this.validate();
    console.log(this.state.userInfo);
    UserService.registerUser(this.state.userInfo).subscribe(resp => {
      if(resp.status === true) {
        this.setState({...this.state, registrationSuccess: true});
      } else {
        this.setState({...this.state, registrationSuccess: false});
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
            <h5 className="p-2 text-light bg-gradient-secondary-theme-right">Register</h5>
          </div>
        }
        {
          this.state.registrationSuccess == true ? 
          <Alert color="success">
            You are successfully registered! Please proceed with <Button
              size="sm"
              color="primary"
              outline>
              Login
            </Button>
          </Alert> : '' 
        }
        {
          this.state.registrationSuccess == false ? 
          <Alert color="danger">
            Registration failed.
          </Alert> : '' 
        }
        
        <FormGroup>
          <ButtonGroup>
            <Button
              outline
              color="info"
              name="type"
              value="H"
              onClick={this.updateUserType}
              active={this.state.userInfo.type === 'H'}
            >
              Healthcare Provider
            </Button>
            <Button
              outline
              color="info"
              name="type"
              value="V"
              onClick={this.updateUserType}
              active={this.state.userInfo.type === 'V'}
            >
              Volunteer
            </Button>
          </ButtonGroup>
        </FormGroup>
        <FormGroup>
          <Label>Organization Name</Label>
          <Input type="text" name="org_name" value={this.state.userInfo.org_name} onChange={this.handleUserInfoChange}/>
        </FormGroup>
        <FormGroup>
          <Label>Address Line 1</Label>
          <Input type="text" name="address_line1" value={this.state.userInfo.address_line1} onChange={this.handleUserInfoChange} />
        </FormGroup>
        <FormGroup>
          <Label>Address Line 2</Label>
          <Input type="text" name="address_line2" value={this.state.userInfo.address_line2} onChange={this.handleUserInfoChange} />
        </FormGroup>
        <FormGroup>
          <Row>
            <Col xl={4} lg={4} md={4}>
              <Label>City</Label>
              <Input type="text" name="city" value={this.state.userInfo.city} onChange={this.handleUserInfoChange} />
            </Col>
            <Col xl={3} lg={3} md={3}>
              <Label>State</Label>
              <Input type="text" name="state" value={this.state.userInfo.state} onChange={this.handleUserInfoChange} />
            </Col>
            <Col xl={2} lg={2} md={2}>
              <Label>Country</Label>
              <Input type="text" name="country" value={this.state.userInfo.country} disabled/>
            </Col>
            <Col xl={3} lg={3} md={3}>
              <Label>Zip Code</Label>
              <Input type="text" name="zipcode" value={this.state.userInfo.zipcode} onChange={this.handleUserInfoChange} />
            </Col>
          </Row>
        </FormGroup>

        <Row>
          <Col xl={6} lg={6} md={6}>
            <FormGroup>
              <Label>Password</Label>
              <Input type="password" name="password" value={this.state.userInfo.password} onChange={this.handleUserInfoChange} />
            </FormGroup>
          </Col>
          <Col xl={6} lg={6} md={6}>
            <FormGroup>
              <Label>Retype Password</Label>
              <Input type="password" name="retypedPassword"  value={this.state.retypedPassword} onChange={this.handleChange} />        
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>Email</Label>
          <Input type="email" name="email" value={this.state.userInfo.email} onChange={this.handleUserInfoChange} />
          <Label>Alternate Email</Label>
          <Input type="email" name="alternate_email" value={this.state.userInfo.alternate_email} onChange={this.handleUserInfoChange} />
        </FormGroup>

        <Row>
          <Col xl={6} lg={6} md={6}>
            <FormGroup>
              <Label>Phone</Label>
              <Input type="number" name="phone" value={this.state.userInfo.phone} onChange={this.handleUserInfoChange}/>
            </FormGroup>
            </Col>
            <Col xl={6} lg={6} md={6}>
              <Label>Alternate Phone</Label>
              <Input type="number" name="alternate_phone" value={this.state.userInfo.alternate_phone} onChange={this.handleUserInfoChange} />              
          </Col>
        </Row>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />
            Agree the terms and policy
          </Label>
        </FormGroup>
        <hr />
        <Row>
          <Col xl={6} lg={6} md={6}>
            <Button
              size="md"
              block
              className="bg-gradient-secondary-theme-right border-0"
              onClick={this.registerUser}>
              Signup
            </Button>
          </Col>
          <Col xl={6} lg={6} md={6}>
            Already have account? &nbsp;&nbsp;
            <Button outline color="link" className="text-primary">Login</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default AuthForm;
