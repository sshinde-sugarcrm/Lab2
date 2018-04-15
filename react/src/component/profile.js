import React from 'react';
import {connect} from 'react-redux';
import { Button } from 'reactstrap';
import image from './mainlogo.JPG';
import '../index.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import {actionlogout} from "../actions/loginactions";

import history from "./history";
class profile extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    componentDidMount(){
        document.title = `Welcome, ${localStorage.getItem("email")} !!`;
    }

    navigate()
    {
        history.push('/');
    }

    render() {
        // if (this.props.logout==='200'){
        //     this.navigate();
        // }
        return(
<div>
    {this.props.loginstatus?
<div>
            <Navbar color="faded" light expand="md">
                <NavbarBrand href="/profile"><img src={image} alt="FreeLancer App"/></NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                             <NavLink href="/postproject"><Button color="warning">Post a Project</Button></NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/update"><Button color="warning">Update Profile</Button></NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/">
                                <Button color="Danger"
                                     onClick={() => this.props.Logout()}>LogOut
                                </Button>
                            </NavLink>
                        </NavItem>


                        <NavItem>
                            <NavLink href="/myproject"><Button color="primary">My Project</Button></NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/dashboard"><Button color="success">Dashboard</Button></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/details"><Button color="primary">Get Details</Button></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/myprofile"><Button color="success">My Profile</Button></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/Payment">Make Payment</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/freelancerbal"><Button color="Danger">See Balance</Button></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
    <h3 className="headalign">Welcome {this.props.email}!!!</h3>
    <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="card card-inverse">
                    <div className="card-block">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 text-center">
                            </div>
                            <div className="col-md-8 col-sm-8">
                                <p className="card-text"><strong>Email: {this.props.email}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        :
        history.push('/')}
</div>
    );
    }
}

const mapDispatchToProps =(dispatch)=> {
    return {
        Logout : (data) => dispatch(actionlogout(data))
    };
}
const mapstatetoprops=(stores)=>
{
    return {
        logout : stores.stores.status,
        loginstatus : stores.stores.loginstatus,
        username: stores.stores.username,
        email: stores.stores.email
    };
}

export default connect(mapstatetoprops, mapDispatchToProps)(profile);

// {/*<div>*/}
//     {/*<Button color="Danger"*/}
//             {/*type="button"*/}
//             {/*onClick={() => this.props.Logout()}>*/}
//         {/*LogOut</Button>*/}
// {/*</div>*/}