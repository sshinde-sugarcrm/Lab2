import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Router1 from "./component/router1";

class App extends Component {
    render() {
        return (
            <div>
            <BrowserRouter>
                <Router1/>
            </BrowserRouter>
            </div>
        );
    }
}
export default App;