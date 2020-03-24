import React from 'react';
import Page from 'components/Page';
import { withRouter } from 'react-router-dom';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import { SupplyRequestService } from '../services/SupplyRequestService';
import { InventoryService } from '../services/InventoryService';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

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
      supplyRequestModal: false,
      supplyRequestSearch: {
        "sort": {
          "request_date": -1
        },
        "page": 1,
        "pageSize": 10
      },
      inventorySearch: {
        "sort": {
          "created_date": -1
        },
        "page": 1,
        "pageSize": 10
      },
      supplyRequestTableColumnDefs: [
        { headerName: "Name", field: "org_name", filter: true, sortable: true, resizable: true },
        { headerName: "Supply Type", field: "supply_type", filter: true, sortable: true, resizable: true },
        { headerName: "Quantity", field: "quantity", filter: true, sortable: true, resizable: true },
        { headerName: "Urgency", field: "urgency", filter: true, sortable: true, resizable: true },
        { headerName: "Needed By", field: "needed_by", filter: true, sortable: true, resizable: true },
        { headerName: "Request Date", field: "request_date", filter: true, sortable: true, resizable: true },
        { headerName: "Status", field: "status", filter: true, sortable: true, resizable: true }
      ],
      inventoryTableColumnDefs: [
        { headerName: "Name", field: "org_name", filter: true, sortable: true, resizable: true },
        { headerName: "Supply Type", field: "supply_type", filter: true, sortable: true, resizable: true },
        { headerName: "Quantity", field: "quantity", filter: true, sortable: true, resizable: true },
        { headerName: "Status", field: "status", filter: true, sortable: true, resizable: true }
      ],
      supplyRequestData: [],
      inventoryData: [],
      supplyRequestDetail: {},
      inventoryDetail: {}
    };
    this.supplyRequestModal = this.supplyRequestModal.bind(this);
    this.inventoryModal = this.inventoryModal.bind(this);
    this.toggleSupplyRequestModal = this.toggleSupplyRequestModal.bind(this);
    this.onSRGridReady = this.onSRGridReady.bind(this);
    this.onInventoryGridReady = this.onInventoryGridReady.bind(this);
  }
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  onSRGridReady(params) {
    this.setState({...this.state, supplyRequestTableApi: params.api});
    // Load supply requests
    SupplyRequestService.search(this.state.supplyRequestSearch).subscribe(resp => {
      if(resp.status === true) {
        this.setState({...this.state, supplyRequestData: resp.data});
        params.api.sizeColumnsToFit();
      } else {
        // Show error message
      }
    });
  }

  onInventoryGridReady(params) {
    this.setState({...this.state, inventoryTableApi: params.api});
    // Load inventories
    InventoryService.search(this.state.inventorySearch).subscribe(resp => {
      if(resp.status === true) {
        this.setState({...this.state, inventoryData: resp.data});
        params.api.sizeColumnsToFit();
      } else {
        // Show error message
      }
    });
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
              <div className="ag-theme-material" style={ {height: '300px', width: '100%'} }>
                <AgGridReact
                    onGridReady={this.onSRGridReady}
                    rowData={this.state.supplyRequestData}
                    columnDefs={this.state.supplyRequestTableColumnDefs}>
                </AgGridReact>
              </div>
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
              <div className="ag-theme-material" style={ {height: '300px', width: '100%'} }>
                <AgGridReact
                    onGridReady={this.onInventoryGridReady}
                    rowData={this.state.inventoryData}
                    columnDefs={this.state.inventoryTableColumnDefs}>
                </AgGridReact>
              </div>
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
