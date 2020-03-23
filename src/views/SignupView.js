import React from 'react';
import AuthForm from 'views/AuthForm';
import { BaseComponent } from '../components/BaseComponent';
import {
    Card,
    Col,
    Row,
  } from 'reactstrap';


class SignupView extends BaseComponent {
  
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
            <AuthForm/>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default SignupView;
