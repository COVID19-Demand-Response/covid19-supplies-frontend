import React from 'react';
import LoginForm from 'views/LoginForm';
import { BaseComponent } from '../components/BaseComponent';
import {
    Card,
    Col,
    Row,
  } from 'reactstrap';


class LoginView extends BaseComponent {
  
  render() {
    return (
        <Row 
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Col md={8} lg={6}>
          <Card body>
            <LoginForm/>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default LoginView;
