import MapWithBubbles from 'components/MapWithBubbles';
import Page from 'components/Page';
import SupportTicket from 'components/SupportTicket';
import { IconWidget } from 'components/Widget';
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
} from 'reactstrap';
import { getColor } from 'utils/colors';
import { BaseComponent } from '../components/BaseComponent';
import { faStethoscope, faIndustry, faCartPlus, faShippingFast } from '@fortawesome/free-solid-svg-icons';

class HomeView extends BaseComponent {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
            <IconWidget
                color= 'primary'
                icon={faStethoscope}
                title='Healthcare Providers'
                subtitle='245'
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
          <IconWidget
                color= 'success'
                icon={faIndustry}
                title='Volunteers'
                subtitle='1346'
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
          <IconWidget
                color= 'danger'
                icon={faCartPlus}
                title='Supply requests'
                subtitle='960'
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
          <IconWidget
                color= 'info'
                icon={faShippingFast}
                title='Inventory'
                subtitle='122'
            />
          </Col>
        </Row>
        <Row>
          <Col lg="9" md="9" sm="9" xs="9">
            <Card>
              <CardHeader>
                Supply requests and Inventories
              </CardHeader>
              <CardBody>
                <MapWithBubbles />
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="3" sm="3" xs="3">
          <Card>
              <CardHeader>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Announcements</span>
                  <Button>
                    <small>View All</small>
                  </Button>
                </div>
              </CardHeader>
              <CardBody>
                {supportTicketsData.map(supportTicket => (
                  <SupportTicket key={supportTicket.id} {...supportTicket} />
                ))}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}
export default HomeView;
