import React from 'react';
import { Table, Button } from 'reactstrap';
import {connect} from "react-redux";
import image from './mainlogo.JPG';
import {actionhome} from "../actions/loginactions";
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
            current:this.props.homes
        };
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event){
        console.log("project name--->");
        let newDisplay = this.props.homes.filter(project=>project.projectname.includes(event.target.value.toLowerCase()));

        this.setState({
            search:event.target.value,
            current: newDisplay
        });
        console.log(this.state);
    }
    componentWillMount()
    {
        this.props.allproj();
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

                                let newDisplay = this.props.homes.filter(project=>
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
                        <th>ProjectDescription</th>
                        <th>Skills</th>
                        <th>Employer</th>
                        <th>Budget</th>
                    </tr>
                    </thead>
                    <tbody>
                    {console.log(this.props.homes)}
                    {this.state.current.map(row => {
                        return(
                            <tr>
                                <td key={row.projectname}>{row.projectname}</td>
                                <td key={row.projectDescription}>{row.projectDescription}</td>
                                <td key={row.skills}>{row.skills}</td>
                                <td key={row.employer}>{row.employer}</td>
                                <td key={row.budget}>{row.budget}</td>
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
        allproj: (data) => dispatch(actionhome(data)),
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        homes : stores.stores.homes
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(allproject);