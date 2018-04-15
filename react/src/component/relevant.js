import React from 'react';
import { Table, Button } from 'reactstrap';
import {connect} from "react-redux";
import {actionrelevant} from "../actions/loginactions";
import {
    NavItem,
    NavLink,
} from 'reactstrap';


class relevant extends React.Component {

    componentWillMount()
    {
        this.props.relevants();
    }
    render() {
        return (
            <div>
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
                    {this.props.homes.map(row => {
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
                    <NavLink href="/myproject"><Button color="primary">Return to Home</Button></NavLink>
                </NavItem>
            </div>
        );
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        relevants: (data) => dispatch(actionrelevant(data)),
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        homes : stores.stores.matched
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(relevant);