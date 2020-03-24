import React from 'react';
import { Button, Form, FormGroup, Input, Label, Alert } from 'reactstrap';
import { BaseComponent } from '../components/BaseComponent';
import { InventoryService } from '../services/InventoryService';
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Modal,
  ModalBody,
  Row,
  Col
} from 'reactstrap';

class InventoryForm extends BaseComponent {

  constructor(props) {
    super(props);
    let inventory = {
      'user_id': '',
      'supply_type': 'mask',
      'quantity': 10,
      'status': '',
      'available_date': '',
      'price': 0,
      'address_line1': '',
      'address_line2': '',
      'city': '',
      'state': '',
      'country': 'US',
      'zipcode': '',
      'latitude': null,
      'longitude': null,
      'phone': null,
      'alternate_phone': null,
      'email': '',
      'alternate_email': ''
    };
    if(props.inventory && props.inventory.user_id) {
      inventory = props.inventory;
    }

    this.state = { ...this.state, saveSuccess: null, isNew: props.isNew, inventory: inventory };

    this.handleChange = this.handleChange.bind(this);
    this.handleInventoryChange = this.handleInventoryChange.bind(this);
    this.saveInventory = this.saveInventory.bind(this);
    this.toggleMessageModal = this.toggleMessageModal.bind(this);
  }

  toggleMessageModal = modalType => () => {
    if (!modalType) {
      return this.setState({
        ...this.state,
        saveModal: !this.state.saveModal,
      });
    }
  }
  handleInventoryChange(event) {
    let Inventory = this.state.inventory;
    Inventory[event.target.name] = event.target.value;
    this.setState({...this.state, Inventory: Inventory});
  }

  handleChange(event) {
    let state = this.state[event.target.name] = event.target.value;
    this.setState({...state});
  }

  saveInventory = event => {
    event.preventDefault();
    this.validate();
    
    if(this.state.isNew) {
      InventoryService.createInventory(this.state.inventory).subscribe(resp => {
        if(resp.status === true) {
          this.setState({...this.state, saveSuccess: true});
        } else {
          this.setState({...this.state, saveSuccess: false});
        }
      });
    } else {
      InventoryService.updateInventory(this.state.inventory).subscribe(resp => {
        if(resp.status === true) {
          this.setState({...this.state, saveSuccess: true});
        } else {
          this.setState({...this.state, saveSuccess: false});
        }
      });
    }
    
  }

  validate() {

  }
  render() {
    
    return (
      <div>
        <Modal
          isOpen={this.state.saveModal}
          toggle={this.toggleMessageModal()}
          >
          <ModalBody>
            <Alert color={this.state.saveSuccess === true ? 'success' : 'danger'}>
              {this.state.saveSuccess === true ? 'Supply Request saved successfully' : 'Unable to save Supply Request.'}
            </Alert>
          </ModalBody>
        </Modal>

        <Form onSubmit={this.createInventory}>
          <FormGroup>
            <Label>Supply Type</Label>
            <Input type="text" name="supply_type" value={this.state.inventory.supply_type} onChange={this.handleInventoryChange}/>
          </FormGroup>
          <FormGroup>
            <Label>Quantity</Label>
            <Input type="number" name="quantity" value={this.state.inventory.quantity} onChange={this.handleInventoryChange}/>
          </FormGroup>
          <FormGroup>
            <Label>Available Date</Label>
            <Input type="date" name="available_date" value={this.state.inventory.available_date} onChange={this.handleInventoryChange}/>
          </FormGroup>

          <Row>
            <Col xl={6} lg={6} md={6}>
              <FormGroup>
                <Label>Address Line 1</Label>
                <Input type="text" name="address_line1" value={this.state.inventory.address_line1} onChange={this.handleInventoryChange} />
              </FormGroup>
            </Col>
            <Col xl={6} lg={6} md={6}>
              <FormGroup>
                <Label>Address Line 2</Label>
                <Input type="text" name="address_line2" value={this.state.inventory.address_line2} onChange={this.handleInventoryChange} />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Row>
              <Col xl={4} lg={4} md={4}>
                <Label>City</Label>
                <Input type="text" name="city" value={this.state.inventory.city} onChange={this.handleInventoryChange} />
              </Col>
              <Col xl={3} lg={3} md={3}>
                <Label>State</Label>
                <Input type="text" name="state" value={this.state.inventory.state} onChange={this.handleInventoryChange} />
              </Col>
              <Col xl={2} lg={2} md={2}>
                <Label>Country</Label>
                <Input type="text" name="country" value={this.state.inventory.country} disabled/>
              </Col>
              <Col xl={3} lg={3} md={3}>
                <Label>Zip Code</Label>
                <Input type="text" name="zipcode" value={this.state.inventory.zipcode} onChange={this.handleInventoryChange} />
              </Col>
            </Row>
          </FormGroup>
          
          <FormGroup>
            <Label>Comments</Label>
            <Input type="textarea" name="comments" value={this.state.inventory.comments} onChange={this.handleInventoryChange}/>
          </FormGroup>
        </Form>
        <hr/>
          <div className="d-flex justify-content-end">
            <Button color="info" className="text-uppercase border-0" outline onClick={this.saveInventory}>
              <FontAwesomeIcon size='md' icon={faSave} className='text-bold'/>&nbsp;&nbsp;{this.state.isNew ? 'Add' : 'Save'}
            </Button>
          </div>
      </div>
      
    );
  }
}

export default InventoryForm;
