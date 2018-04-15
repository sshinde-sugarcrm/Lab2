import React from 'react';
import { Table, Button } from 'reactstrap';
import {connect} from "react-redux";
import {actiondetails} from "../actions/loginactions";
import {
    NavItem,
    NavLink,
} from 'reactstrap';

class projectdetails extends React.Component {

    componentWillMount()
    {
        this.props.detail();
    }
    render() {
        return (
            <div>
                <Table>
                    <thead>
                    <tr>
                        <th>Project Names</th>
                        <th>ProjectDescription</th>
                        <th>Files</th>
                        <th>Skills</th>
                        <th>Budget Range</th>
                        <th>Average Bid</th>
                    </tr>
                    </thead>
                    <tbody>
                    {console.log(this.props.details)}
                    {this.props.details.map(row => {
                        return(
                            <tr>
                                <td key={row.projectname}>{row.projectname}</td>
                                <td key={row.projectDescription}>{row.projectDescription}</td>
                                <td key={row.files}>files</td>
                                <td key={row.skills}>{row.skills}</td>
                                <td key={row.budget}>{row.budget}</td>
                                <td key={row.employer}>654</td>
                            </tr>
                        )
                    })
                    };
                    </tbody>
                </Table>
                <NavItem>
                    <NavLink href="/myproject"><Button color="success">Details View</Button></NavLink>
                </NavItem>
            </div>
        );
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        detail: (data) => dispatch(actiondetails(data)),
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        details : stores.stores.detailed
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(projectdetails);