import React from 'react';
import { Table, Button } from 'reactstrap';
import {connect} from "react-redux";
import {actionallbids,actionhire} from "../actions/loginactions";
import {
    NavItem,
    NavLink,
} from 'reactstrap';
import { Alert } from 'reactstrap';
class projectdetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hire:'open',
            file:''
        };
    }
    componentWillMount()
    {
        this.props.details();
    }

    render(){
        return (
            <div>
                {this.props.status !== 200?<div>
                        <Table  ref='table'>
                            <thead>
                            <tr>
                                <th>Profile Image</th>
                                <th >Freelancer Name</th>
                                <th>Bid Price</th>
                                <th>Period in Days</th>
                                <th>Hire!!!</th>
                            </tr>
                            </thead>
                            <tbody>
                            {console.log(this.props.allbids)}
                            {this.props.allbids.map(row => {
                                return (
                                    <tr>
                                        <td key={row.projectname}>image</td>
                                        <td key={row.projectDescription}>{row.Bids[0].bidder}</td>
                                        <td key={row.Bids[0].bid}>{row.Bids[0].bid}</td>
                                        <td key={row.skills}>{row.Bids[0].period}</td>
                                        <td><Button color="primary"
                                                    onClick={() => this.props.hire(row, this.state.hire)}>Hire</Button></td>
                                    </tr>
                                )
                            })
                            };
                            </tbody>
                        </Table>
                        <NavItem>
                            <NavLink href="/myproject"><Button color="success">Details View</Button></NavLink>
                        </NavItem>
                    </div>:
                    <div>
                        <div className="row justify-content-lg" align="center">
                            <div className="col-lg-6" align="center">
                                <Alert color="success">
                                    Project Details!!!
                                </Alert>
                                <p>Project Name: {this.props.hires.projectname}</p>
                                <p>Project Status: open {this.props.hires.status}</p>
                                <p>Freelancer Name: {this.props.hires.bidder}</p>
                                <p>Bid value: {this.props.hires.bid}</p>
                                <p>Period: {this.props.hires.period}</p>
                                <Alert color="primary">
                                    Submission panel!!!
                                </Alert>
                                <div className="form-group">
                                    <p>File Download</p>
                                    <input
                                        className="form-control"
                                        type="file"
                                        value={this.state.File}
                                        onChange={(event) => {
                                            this.setState({
                                                File: event.target.value
                                            });
                                        }}
                                    />
                                </div>
                        <NavItem>
                            <NavLink href="/Payment"><Button color="success">Make Payment</Button></NavLink>
                        </NavItem>
                    </div>
                     </div>
                    </div>
                }
            </div>
        );
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        details: (data) => dispatch(actionallbids(data)),
        hire: (data,data2) => dispatch(actionhire(data,data2))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        allbids : stores.stores.allbid,
        status: stores.stores.status,
        hires: stores.stores.hired
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(projectdetails);