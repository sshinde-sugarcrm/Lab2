import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import {actionlogin} from '../actions/loginactions';
import {connect} from 'react-redux';
import history from "./history";
import image from './mainlogo.JPG';
import { Alert } from 'reactstrap';

class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            UserName: '',
            Password: '',
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    navigate()
    {
        history.push('/profile');
    }

    

    render() {
if (this.props.loggedin===200){

    this.navigate();
}
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        <div className="row justify-content-lg-center">
                            <div className="col-lg-6">
                                <p id="col2">
                                </p>
                                <form>
                                    <div className="form-group">
                                        <img src={image} alt="FreeLancer App"/>
                                        <h5>Login</h5>
                                    </div>
                                    <Alert color="danger">
                                        Please enter credentials!
                                    </Alert>
                                    <div className="form-group">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Email"
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
                                            type="password"
                                            placeholder="Password"
                                            value={this.state.Password}
                                            onChange={(event) => {
                                                this.setState({
                                                    Password: event.target.value
                                                });
                                            }}
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            type="button"
                            onClick={() => this.props.Login(this.state)}>
                            Login
                        </Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        Login : (data) => dispatch(actionlogin(data))
    };
}
const mapStateToProps =(stores)=> {
console.log(stores);
    return {
        loggedin : stores.stores.login,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(login);