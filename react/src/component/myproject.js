import React from 'react';
import { Table, Button } from 'reactstrap';
import {connect} from "react-redux";
import {actionhome, actionbidon} from "../actions/loginactions";
import history from "./history";
import image from './mainlogo.JPG';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
class myproject extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bid: '',
            search:'',
            period:'',
            currentPage:1,
            current:this.props.homes
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
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
        this.props.home();
    }
    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    navigate()
    {
        history.push('/profile');
    }
    render() {
        if(this.props.Bid===200)
        {
            this.navigate();
        }

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.current.length / 4); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });


        const currentPage = this.state.currentPage;
        const ProjectsPerPage=4;
        const projects=this.state.current;

        // Logic for displaying current todos
        const indexOfLastProject = currentPage * ProjectsPerPage;
        const indexOfFirstProject = indexOfLastProject - ProjectsPerPage;
        const currentProject = projects.slice(indexOfFirstProject, indexOfLastProject);

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
                        <NavItem>
                            <NavLink href="/allproject"><Button color="primary">All Projects</Button></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/relevant"><Button color="primary">Relevant Projects</Button></NavLink>
                        </NavItem>
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
                        <th>Place Bid</th>
                        <th>Period in days</th>
                    </tr>
                    </thead>
                    <tbody>
                    {console.log(this.props.homes)}


                    {currentProject.map(row => {
                        return(
                            <tr>
                                <td key={row.projectname}>{row.projectname}</td>
                                <td key={row.projectDescription}>{row.projectDescription}</td>
                                <td key={row.skills}>{row.skills}</td>
                                <td key={row.employer}>{row.employer}</td>
                                <td key={row.budget}>{row.budget}</td>
                                <td> <input
                                    className="form-control"
                                    type="number"
                                    placeholder=" Place your Bid value"
                                    onChange={(event) => {
                                        this.setState({
                                            bid: event.target.value
                                        });
                                    }}
                                /></td>
                                <td> <input
                                    className="form-control"
                                    type="number"
                                    placeholder=" Period in days"
                                    onChange={(event) => {
                                        this.setState({
                                            period: event.target.value
                                        });
                                    }}
                                /></td>
                                <td><Button color="success"
                                            onClick={() => this.props.bids(row,this.state)}>Bid on!!!</Button></td>
                            </tr>
                        );
                    })
                    };
                    </tbody>
                    <div>
                        {renderPageNumbers}
                    </div>
                </Table>
            </div>
        );
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        home: (data) => dispatch(actionhome(data)),
        bids: (data,data2) => dispatch (actionbidon(data,data2))
        //search: (data)  => dispatch(actionsearch(data))
    };
}
const mapStateToProps =(stores)=> {
    console.log(stores);
    return {
        homes : stores.stores.homes,
        Bid : stores.stores.bids
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(myproject);