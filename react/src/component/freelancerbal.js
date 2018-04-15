import React from 'react';
import {connect} from "react-redux";
import {actionbal, actionwithdraw} from "../actions/loginactions";
import { Button } from 'reactstrap';
import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
} from 'reactstrap';
import image from './mainlogo.JPG';
class freelancerbal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            withdraw: ''
        };
    }
    // navigate()
    // {
    //     history.push('/myproject');
    // }
    render()
    {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/profile"><img src={image} alt="FreeLancer App"/></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                </Navbar>
                <h1 align="center">Welcome to the Balance Page!!!</h1>
                <div className="row justify-content-lg">
                    <div className="col-lg-12" align="center">

                        <div className="form-group">
                            <Button
                                color="primary"
                                type="button"
                                onClick={() => this.props.bal()}>
                                Check Balance
                            </Button>

                            <p>Current Balance:{this.props.balance}</p>
                        </div>

                    <div className="form-group">
                        <input
                            className="form-control"
                            type="Number"
                            placeholder="Enter Balance to withdraw"
                            value={this.state.withdraw}
                            onChange={(event) => {
                                this.setState({
                                    withdraw: event.target.value
                                });
                            }}
                        />
                        <Button
                            color="primary"
                            type="button"
                            onClick={() => this.props.withdraw(this.state)}>
                            Withdraw Balance
                        </Button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        bal : (data) => dispatch(actionbal(data)),
        withdraw : (data) => dispatch(actionwithdraw(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
       balance : stores.stores.freebal
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(freelancerbal);