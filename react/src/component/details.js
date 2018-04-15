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

class details extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/dashboard"><img src={image} alt="FreeLancer App"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/projectdetails"><Button color="success">Project Details</Button></NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/listbids"><Button color="success">List of all Bids</Button></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
                <h1 align="center">Welcome to the Details View!!!</h1>
            </div>
        );
    }
}
export default details;