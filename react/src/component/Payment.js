import React from 'react';
import {connect} from "react-redux";
import {actionpay} from "../actions/loginactions";
import history from "./history";
import { Card, CardTitle} from 'reactstrap';
import {Button
} from 'reactstrap';

import { Alert } from 'reactstrap';
class Payment extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        name: '',
        creditcard: '',
        cvv:'',
        expdate:'',
        amounts:'',
        freelancer:''
    };
}

    navigate() {
        history.push('/myproject');
    }

    render() {
       if (this.props.status === 200) {
            this.navigate();
        }
        return (
            <div className="row justify-content-lg">
                <div className="col-lg-12" align="center">
                    {/*<Card>*/}
                        <Alert color="success">
                            Make Payment to Freelancer!!!
                        </Alert>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            style={{width:400}}
                            placeholder="Enter Name of freelancer"
                            value={this.state.freelancer}
                            onChange={(event) => {
                                this.setState({
                                    freelancer: event.target.value
                                });
                            }}
                        />
                    </div>
                        <CardTitle color={"Orange"}>Make Payment Credit/Debit</CardTitle>
                        <div className="form-group">
                            Enter Name:<input
                                className="form-control"
                                type="text"
                                placeholder="Enter Name as on Card"
                                value={this.state.name}
                                style={{width:400}}
                                onChange={(event) => {
                                    this.setState({
                                        name: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div>
                        <tr>
                            <td>
                                CreditCard Number: <input
                                    className="form-control"
                                    type="text"
                                    placeholder="Enter CreditCard Number"
                                    value={this.state.creditcard}
                                    style={{width:300}}
                                    onChange={(event) => {
                                        this.setState({
                                            creditcard: event.target.value
                                        });
                                    }}
                                />
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                CVV: <input
                                className="form-control"
                                type="number"
                                placeholder="CVV"
                                style={{width:100}}
                                value={this.state.cvv}
                                onChange={(event) => {
                                    this.setState({
                                        cvv: event.target.value
                                    });
                                }}
                            />
                          </td>
                            </tr>
                        </div>

                        <div>
                            MM/YY: <input
                                className="form-control"
                                type="text"
                                placeholder="MM/YY"
                                value={this.state.expdate}
                                style={{width:400}}
                                onChange={(event) => {
                                    this.setState({
                                        expdate: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <div>
                            Amount:<input
                                className="form-control"
                                type="number"
                                placeholder="Amount"
                                value={this.state.amounts}
                                style={{width:400}}
                                onChange={(event) => {
                                    this.setState({
                                        amounts: event.target.value
                                    });
                                }}
                            />
                        </div>
                        <Button align="centre" color="success" onClick={() => this.props.pay(this.state)}>Make Payment</Button>
                    {/*</Card>*/}
                </div>
            </div>
        )
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        pay : (data) => dispatch(actionpay(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        status : stores.stores.status,
        message : stores.stores.message
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Payment);