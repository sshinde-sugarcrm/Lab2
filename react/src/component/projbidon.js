import React from 'react';
import { Table, Button } from 'reactstrap';
import {connect} from "react-redux";
import image from './mainlogo.JPG';
import {actionprojbidon} from "../actions/loginactions";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';


class allproject extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            search:'',
            current:this.props.projects
        };
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event){
        console.log("project name--->");
        let newDisplay = this.props.projects.filter(project=>project.projectname.includes(event.target.value.toLowerCase()));

        this.setState({
            search:event.target.value,
            current: newDisplay
        });
        console.log(this.state);
    }
    componentWillMount()
    {
        this.props.projbidon();
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/myproject"><img src={image} alt="FreeLancer App"/></NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <input
                            className="form-control"
                            style={{width:400}}
                            type="text"
                            placeholder="Search Project using Technology Stack /Project name"
                            value={this.state.search}
                            onChange={(event) => {

                                let newDisplay = this.props.projects.filter(project=>
                                    project.projectname.includes(event.target.value));
                                this.setState({
                                    search:event.target.value,
                                    current: newDisplay
                                });
                            }}
                        />
                    </Nav>
                </Navbar>
                <Table>
                    <thead>
                    <tr>
                        <th>Project Names</th>
                        <th>Average Bid</th>
                        <th>Freelancer Name</th>
                        <th>Project Completion Date</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {console.log(this.props.projects)}
                    {this.state.current.map(row => {
                        return(
                            <tr>
                                <td key={row.projectname}>{row.projectname}</td>
                                <td key={row.employer}>746</td>
                                <td key={row.Bids.bidder}>{row.Bids[0].bidder}</td>
                                <td key={row.Bids.period}>{row.Bids[0].period}</td>
                                <td key={row.status}>{row.status}</td>
                            </tr>
                        )
                    })
                    };
                    </tbody>
                </Table>
                <NavItem>
                    <NavLink href="/myproject"><Button color="warning">Return to Home</Button></NavLink>
                </NavItem>
            </div>
        );
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        projbidon: (data) => dispatch(actionprojbidon(data)),
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        projects : stores.stores.ubidon
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(allproject);