import React from 'react';
// import { Table, Button } from 'reactstrap';
import {connect} from "react-redux";
import {actionprof} from "../actions/loginactions";
import history from "./history";
import { Card, CardTitle} from 'reactstrap';
import {NavItem, NavLink, Button
} from 'reactstrap';

class myprofile extends React.Component {

    componentWillMount() {
        this.props.profile();
    }

    navigate() {
        history.push('/profile');
    }

    render() {
        // if (this.props.status === 200) {
        //     this.navigate();
        // }
        return (
            <div className="row justify-content-md-middle">
                <div className="col-md-6">
                    <Card>
                       <CardTitle>User Details</CardTitle>
                        <div className="form-group">
                            Name: {this.props.name}
                        </div>

                        <div className="form-group">
                            Email: {this.props.email}
                        </div>

                        <div className="form-group">
                            Phone Number: {this.props.phones}
                        </div>

                        <div className="form-group">
                            About Yourself: {this.props.aboutme}
                        </div>

                        <div className="form-group">
                            Skills: {this.props.skills}
                        </div>
                        <NavItem>
                            <NavLink href="/profile"><Button color="success">Go To Home</Button></NavLink>
                        </NavItem>
                    </Card>

                </div>
            </div>
        )
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        profile : (data) => dispatch(actionprof(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        status : stores.stores.status,
        name : stores.stores.name,
        email : stores.stores.email,
        phones : stores.stores.phones,
        aboutme : stores.stores.aboutme,
        skills : stores.stores.skills,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(myprofile);