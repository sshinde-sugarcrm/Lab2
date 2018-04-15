import React, {Component} from 'react';
import history from "./history";
import {actionupdate} from "../actions/loginactions";
import {connect} from "react-redux";

class update extends Component {
    constructor(props) {
        super(props);


        this.state = {

            old_email:'',
            old_password:'',
            name: '',
            email: '',
            phones: '',
            aboutme: '',
            skills: ''
        };
    }
        navigate()
        {
            history.push('/profile');
        }

        render()
        {
            if (this.props.update===200){
            this.navigate();
            }
           // this.props.updated;
            return (
                <div className="row justify-content-md-center">
                    <div className="col-md-3">
                        <form>
                            <div className="form-group">
                                <h1>Update Profile</h1>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Old Email"
                                    placeholder="Enter Old Email"
                                    value={this.state.old_email}
                                    onChange={(event) => {
                                        this.setState({
                                            old_email: event.target.value
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="password"
                                    label="Old Password"
                                    placeholder="Enter Old Password"
                                    value={this.state.old_password}
                                    onChange={(event) => {
                                        this.setState({
                                            old_password: event.target.value
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={(event) => {
                                        this.setState({
                                            email: event.target.value
                                        });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Name"
                                    placeholder="Enter Name"
                                    value={this.state.name}
                                    onChange={(event) => {
                                        this.setState({
                                            name: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="Email"
                                    placeholder="Enter Phone Number"
                                    value={this.state.phones}
                                    onChange={(event) => {
                                        this.setState({
                                            phones: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="About Me"
                                    placeholder="Enter About Your Self"
                                    value={this.state.aboutme}
                                    onChange={(event) => {
                                        this.setState({
                                            aboutme: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    className="form-control"
                                    type="text"
                                    label="skills"
                                    placeholder="Enter Skills"
                                    value={this.state.skills}
                                    onChange={(event) => {
                                        this.setState({
                                            skills: event.target.value
                                        });
                                    }}
                                />
                            </div>

                            <div className="form-group">
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={() => this.props.update(this.state)}>
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
}
    const mapDispatchToProps =(dispatch)=> {
    return {
        update : (data) => dispatch(actionupdate(data))
    };
}
    const mapStateToProps =(stores)=> {
    return {
        updated : stores.stores.updated

    };
}
export default connect(mapStateToProps, mapDispatchToProps)(update);