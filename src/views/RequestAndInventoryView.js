import Page from 'components/Page';
import { withRouter } from 'react-router-dom';
import React from 'react';

import {
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table,
  FormGroup,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from 'reactstrap';
import { getColor } from 'utils/colors';
import { BaseComponent } from '../components/BaseComponent';
import { faStethoscope, faIndustry, faCartPlus, faShippingFast, faPlusSquare, faPlusCircle, faList, faSave, faCross, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '../components/Typography';
import SupplyRequestForm from './SupplyRequestForm';
import InventoryForm from './InventoryForm';


class RequestAndInventoryView extends BaseComponent {

  constructor(props) {
    super(props);
    this.state = { ...this.state,
      supplyRequestModal: false
    };
    this.supplyRequestModal = this.supplyRequestModal.bind(this);
    this.inventoryModal = this.inventoryModal.bind(this);
    this.toggleSupplyRequestModal = this.toggleSupplyRequestModal.bind(this);
  }
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  supplyRequestModal(isNew) {
    this.setState({...this.state, isNewSupplyRequest: isNew, supplyRequestModal: true});
  }

  inventoryModal(isNew) {
    this.setState({...this.state, isNewInventory: isNew, inventoryModal: true});
  }

  toggleSupplyRequestModal= modalType => () => {
    if (!modalType) {
      return this.setState({ ...this.state,
        supplyRequestModal: !this.state.supplyRequestModal,
      });
    }
  };

  toggleInventoryModal= modalType => () => {
    if (!modalType) {
      return this.setState({ ...this.state,
        inventoryModal: !this.state.inventoryModal,
      });
    }
  };

  render() {
    return (
      <Page
        className="DashboardPage"
        title=""
        breadcrumbs={[{ name: 'Requests and Inventory', active: true }]}
      >
        <Row>
          <Col lg={8} md={8} sm={8} xs={8}>
          <Card>
            <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                    <span>
                        <FontAwesomeIcon size='lg' icon={faCartPlus} className='text-secondary text-bold' />
                        <strong className="pl-3">Supply requests</strong>
                    </span>
                    <span inline>
                        <FormGroup inline check>
                            <Input type="checkbox" /> My Supply Requests
                        </FormGroup>
                        <Button className="text-uppercase" outline onClick={() => {this.supplyRequestModal(true);}}>
                        <FontAwesomeIcon size='lg' icon={faPlusCircle} className='text-bold'/>&nbsp;Add
                        </Button>
                    </span>
                </div>
            </CardHeader>
            <CardBody>
                <Table>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Supply Type</th>
                        <th>Quantity</th>
                        <th>Urgency</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>UC Medical Center</td>
                        <td>Masks</td>
                        <td>120</td>
                        <td>High</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>UC Medical Center</td>
                        <td>Gloves</td>
                        <td>345</td>
                        <td>High</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>UC Medical Center</td>
                        <td>Face Shields</td>
                        <td>200</td>
                        <td>Medium</td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="4" sm="4" xs="4">
            <Card className="bg-light">
              <CardHeader>
                <div className="align-items-center">
                    <FontAwesomeIcon size='lg' icon={faList} className='text-secondary text-bold' />
                    <strong className="pl-3">Supply request Details</strong>
                </div>
              </CardHeader>
              <CardBody>
                Details
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg={8} md={8} sm={8} xs={8}>
          <Card>
            <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                    <span>
                        <FontAwesomeIcon size='lg' icon={faShippingFast} className='text-info text-bold' />
                        <strong className="pl-3">Inventory</strong>
                    </span>
                    <span inline>
                        <FormGroup inline check>
                            <Input type="checkbox" /> My Inventories
                        </FormGroup>
                        <Button color="info" className="text-uppercase" outline onClick={() => {this.inventoryModal(true);}}>
                        <FontAwesomeIcon size='lg' icon={faPlusCircle} className='text-bold'/>&nbsp;Add
                        </Button>
                    </span>
                </div>
            </CardHeader>
            <CardBody>
                <Table>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Supply Type</th>
                        <th>Quantity</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Masks</td>
                        <td>120</td>
                        <td>In Progress</td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>UC Medical Center</td>
                        <td>Steve</td>
                        <td>500</td>
                        <td>Ready</td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>XYZ Supplies</td>
                        <td>Face Shields</td>
                        <td>130</td>
                        <td>Ready</td>
                        </tr>
                    </tbody>
                </Table>
            </CardBody>
            </Card>
          </Col>

          <Col lg="4" md="4" sm="4" xs="4">
            <Card className="bg-light">
              <CardHeader>
                <div className="align-items-center">
                    <FontAwesomeIcon size='lg' icon={faList} className='text-info text-bold' />
                    <strong className="pl-3">Inventory Details</strong>
                </div>
              </CardHeader>
              <CardBody>
                Details
              </CardBody>
            </Card>
          </Col>
        </Row>
        
        <Modal
          isOpen={this.state.supplyRequestModal}
          toggle={this.toggleSupplyRequestModal()}>
          <ModalHeader toggle={this.toggleSupplyRequestModal()}>Supply Request</ModalHeader>
          <ModalBody>
            <SupplyRequestForm supplyRequest = {{}} isNew = {this.state.isNewSupplyRequest} />
          </ModalBody>
        </Modal>

        <Modal
          isOpen={this.state.inventoryModal}
          toggle={this.toggleInventoryModal()}>
          <ModalHeader toggle={this.toggleInventoryModal()}>Inventory</ModalHeader>
          <ModalBody>
            <InventoryForm inventory = {{}} isNew = {this.state.isNewInventory} />
          </ModalBody>
        </Modal>
      </Page>
    );
  }
}
export default withRouter(RequestAndInventoryView);
