import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faSignOutAlt, faUser, faQuestionCircle, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { UserCard } from 'components/Card';
import React from 'react';
import { AuthenticationService } from '../../services/AuthenticationService';
import { withRouter } from "react-router-dom";

import {
  ListGroup,
  ListGroupItem,
  Nav,
  Navbar,
  NavItem,
  NavLink,
  Popover,
  PopoverBody,
} from 'reactstrap';
import bn from 'utils/bemnames';

const bem = bn.create('header');

class Header extends React.Component {
  state = {
    isOpenUserCardPopover: false,
  };

  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  toggleUserCardPopover = () => {
    this.setState({
      isOpenUserCardPopover: !this.state.isOpenUserCardPopover,
    });
  };

  handleSidebarControlButton = event => {
    event.preventDefault();
    event.stopPropagation();

    document.querySelector('.cr-sidebar').classList.toggle('cr-sidebar--open');
  };

  logout() {
    AuthenticationService.logout();
    this.props.history.push("/login");
  }

  render() {
    
    return (
      <Navbar light expand className={bem.b('bg-white')}>
        <Nav navbar className={bem.e('nav-right')}>
          
          <NavItem>
            <NavLink id="Popover2">
            <FontAwesomeIcon icon={faUserCog} className="text-secondary" size="lg" onClick={this.toggleUserCardPopover}/>
            </NavLink>
            <Popover
              placement="bottom-end"
              isOpen={this.state.isOpenUserCardPopover}
              toggle={this.toggleUserCardPopover}
              target="Popover2"
              className="p-0 border-0"
              style={{ minWidth: 250 }}
            >
              <PopoverBody className="p-0 border-light">
                <UserCard
                  title="Jane"
                  subtitle="jane@jane.com"
                  text="Last updated 3 mins ago"
                  className="border-light"
                >
                  <ListGroup flush>
                    <ListGroupItem tag="button" action className="border-light" onClick={this.toggleUserCardPopover}>
                      <FontAwesomeIcon icon={faUser}/> &nbsp;Profile
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light" onClick={this.toggleUserCardPopover}>
                      <FontAwesomeIcon icon={faEnvelopeSquare}/> &nbsp;Messages
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light" onClick={this.toggleUserCardPopover}>
                      <FontAwesomeIcon icon={faQuestionCircle}/> &nbsp;Help
                    </ListGroupItem>
                    <ListGroupItem tag="button" action className="border-light" onClick={this.logout}>
                      <FontAwesomeIcon icon={faSignOutAlt}/> &nbsp;Sign out
                    </ListGroupItem>
                  </ListGroup>
                </UserCard>
              </PopoverBody>
            </Popover>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default withRouter(Header);
