import React, {Component} from 'react';

import Header from "./Header";

class  Home extends Component {

    render() {
        console.log("Im here in home");
        return (
            <div>
                <Header/>
            </div>
        );
    }
}
export default Home;