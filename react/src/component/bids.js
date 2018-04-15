import React from 'react';
import {connect} from "react-redux";
import {actionbidder} from "../actions/loginactions";
import history from "./history";
import { Button } from 'reactstrap';
//import { Card, CardTitle} from 'reactstrap';
class bids extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bid: '',
        };
    }
    navigate()
    {
        history.push('/myproject');
    }
    render()
    {  if (this.props.nav===200){
        this.navigate();
    }
        return (
            <div>
                <form>

                    <div className="form-group">
                        <p>Project name:{this.props.nav.projectname}</p>
                    </div>

                    <div className="form-group">
                        <p>Project Description:{this.props.nav.ProjectDescription}</p>
                    </div>


                    <div className="form-group">
                        <p>Skills Required:{this.props.nav.skills}</p>
                    </div>

                    <div className="form-group">
                        <p>Employer:{this.props.nav.employer}</p>
                    </div>

                    <div className="form-group">
                        <p>Budget: {this.props.nav.budget}</p>
                    </div>
                    <div>

                    <textarea
                        className="form-control"
                        placeholder=" Place your Bid value"
                        value={this.state.bid}
                        onChange={(event) => {
                            this.setState({
                                bid: event.target.value
                            });
                        }}
                    />
                    </div>
                        <div>
                        <Button
                            color="primary"
                            type="button"
                            onClick={() => this.props.bid(this.state)}>
                            Bid done
                        </Button>{' '}
                    </div>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps =(dispatch)=> {
    return {
        bid : (data) => dispatch(actionbidder(data))
    };
}
const mapStateToProps =(stores)=> {
console.log(stores);
    return {
        nav : stores.stores.bids
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(bids);