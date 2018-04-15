import React from 'react';
import { Button } from 'reactstrap';
import image from './mainlogo.JPG';
import '../index.css';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

class dashboard extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/dashboard"><img src={image} alt="FreeLancer App"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/projbyyou"><Button color="success">Projects Posted by you</Button></NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink href="/projbidon"><Button color="success">projects you bid on</Button></NavLink>
                            </NavItem>
                        </Nav>
                </Navbar>
                <h1 align="center">Welcome to the Dashboard!!!</h1>
            </div>
        );
    }
}
export default dashboard;