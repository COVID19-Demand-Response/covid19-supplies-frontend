import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import SupportTicket from 'components/SupportTicket';
import { IconWidget } from 'components/Widget';
import { withRouter } from 'react-router-dom';
import {
  supportTicketsData,
} from 'demos/dashboardPage';
import React from 'react';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Table
} from 'reactstrap';
import { getColor } from 'utils/colors';
import { BaseComponent } from '../components/BaseComponent';
import { faStethoscope, faIndustry, faCartPlus, faShippingFast } from '@fortawesome/free-solid-svg-icons';

class RequestAndInventoryView extends BaseComponent {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page
        className="DashboardPage"
        title="Supply Requests and Inventory"
        breadcrumbs={[{ name: 'Requests and Inventory', active: true }]}
      >
        <Row>
          <Col lg={12} md={12} sm={12} xs={12}>
          <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </Table>
          </Col>

          
        </Row>
        
      </Page>
    );
  }
}
export default withRouter(RequestAndInventoryView);
