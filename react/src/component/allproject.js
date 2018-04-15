import React from 'react';
import { Table, Button } from 'reactstrap';
import {connect} from "react-redux";
import {actionhome} from "../actions/loginactions";
import {
    NavItem,
    NavLink,
} from 'reactstrap';


class allproject extends React.Component {

    componentWillMount()
    {
        this.props.allproj();
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