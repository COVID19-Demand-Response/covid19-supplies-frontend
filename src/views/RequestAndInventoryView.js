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
  FormGroup
} from 'reactstrap';
import { getColor } from 'utils/colors';
import { BaseComponent } from '../components/BaseComponent';
import { faStethoscope, faIndustry, faCartPlus, faShippingFast, faPlusSquare, faPlusCircle, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from '../components/Typography';

class RequestAndInventoryView extends BaseComponent {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

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
                        <Button className="text-uppercase" outline>
                        <FontAwesomeIcon size='lg' icon={faPlusCircle} className='text-bold' />&nbsp;Add
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
                        <Button color="info" className="text-uppercase" outline>
                        <FontAwesomeIcon size='lg' icon={faPlusCircle} className='text-bold' />&nbsp;Add
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
        
      </Page>
    );
  }
}
export default withRouter(RequestAndInventoryView);
