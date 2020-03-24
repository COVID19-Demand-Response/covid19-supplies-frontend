import React from 'react';
import { Button, Form, FormGroup, Input, Label, Alert } from 'reactstrap';
import { BaseComponent } from '../components/BaseComponent';
import { SupplyRequestService } from '../services/SupplyRequestService';
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Modal,
  ModalBody
} from 'reactstrap';

class SupplyRequestForm extends BaseComponent {

  constructor(props) {
    super(props);
    let supplyRequest = {
      'user_id': '',
      'supply_type': 'mask',
      'quantity': 10,
      'request_date': '',
      'fulfillment_date': null,
      'urgency': 'high',
      'needed_by': '',
      'status': 'open'
    };
    if(props.supplyRequest && props.supplyRequest.user_id) {
      supplyRequest = props.supplyRequest;
    }

    this.state = { ...this.state, saveSuccess: null, isNew: props.isNew, supplyRequest: supplyRequest };

    this.handleChange = this.handleChange.bind(this);
    this.handlesupplyRequestChange = this.handlesupplyRequestChange.bind(this);
    this.saveSupplyRequest = this.saveSupplyRequest.bind(this);
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
  handlesupplyRequestChange(event) {
    let supplyRequest = this.state.supplyRequest;
    supplyRequest[event.target.name] = event.target.value;
    this.setState({...this.state, supplyRequest: supplyRequest});
  }

  handleChange(event) {
    let state = this.state[event.target.name] = event.target.value;
    this.setState({...state});
  }

  saveSupplyRequest = event => {
    event.preventDefault();
    this.validate();
    
    if(this.state.isNew) {
      SupplyRequestService.createSupplyRequest(this.state.supplyRequest).subscribe(resp => {
        if(resp.status === true) {
          this.setState({...this.state, saveSuccess: true});
        } else {
          this.setState({...this.state, saveSuccess: false});
        }
      });
    } else {
      SupplyRequestService.updateSupplyRequest(this.state.supplyRequest).subscribe(resp => {
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

        <Form onSubmit={this.createSupplyRequest}>
          <FormGroup>
            <Label>Supply Type</Label>
            <Input type="text" name="supply_type" value={this.state.supplyRequest.supply_type} onChange={this.handlesupplyRequestChange}/>
          </FormGroup>
          <FormGroup>
            <Label>Quantity</Label>
            <Input type="number" name="quantity" value={this.state.supplyRequest.quantity} onChange={this.handlesupplyRequestChange}/>
          </FormGroup>
          <FormGroup>
            <Label>Needed By</Label>
            <Input type="date" name="needed_by" value={this.state.supplyRequest.needed_by} onChange={this.handlesupplyRequestChange}/>
          </FormGroup>
          <FormGroup>
            <Label>Urgency</Label>
            <Input type="text" name="urgency" value={this.state.supplyRequest.urgency} onChange={this.handlesupplyRequestChange}/>
          </FormGroup>
          <FormGroup>
            <Label>Comments</Label>
            <Input type="textarea" name="comments" value={this.state.supplyRequest.comments} onChange={this.handlesupplyRequestChange}/>
          </FormGroup>
        </Form>
        <hr/>
          <div className="d-flex justify-content-end">
            <Button className="text-uppercase border-0" outline onClick={this.saveSupplyRequest}>
              <FontAwesomeIcon size='md' icon={faSave} className='text-bold'/>&nbsp;&nbsp;{this.state.isNew ? 'Create' : 'Save'}
            </Button>
          </div>
      </div>
      
    );
  }
}

export default SupplyRequestForm;
