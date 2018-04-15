import React from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import {actionsign} from '../actions/loginactions';
import {connect} from 'react-redux';
import history from "./history";
import image from './mainlogo.JPG';
//import axios from 'axios';
class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            UserName: '',
            Password: '',
          // File:null,
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
        history.push('/');
    }


    render() {
        if (this.props.signin){
            this.navigate();
        }
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalBody>
                        <div className="row justify-content-lg-center">
                            <div className="col-lg-6">
                                <p id="col1">
                                </p>
                                <form>
                                    <div className="form-group">
                                        <img src={image} alt="FreeLancer App"/>
                                        <h5>Sign up for free today!</h5>
                                    </div>


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
                                            type="text"
                                            placeholder="Username"
                                            value={this.state.UserName}
                                            onChange={(event) => {
                                                this.setState({
                                                    UserName: event.target.value
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
                                    {/*<div className="form-group">*/}
                                        {/*<p>Profile Pic Upload</p>*/}
                                        {/*<input*/}
                                            {/*className="form-control"*/}
                                            {/*type="file"*/}
                                            {/*value={this.state.File}*/}
                                            {/*onChange={(event) => {*/}
                                                {/*this.setState({*/}
                                                    {/*File: event.target.value*/}
                                                {/*});*/}
                                            {/*}}*/}
                                        {/*/>*/}
                                    {/*</div>*/}
                                </form>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="primary"
                            type="button"
                            onClick={() => this.props.SignUp(this.state)}>
                            Create Account
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
        SignUp : (data) => dispatch(actionsign(data)),
    };
}
 const mapStateToProps =(stores)=> {

    return {
        signin : stores.stores.signup
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Signup);