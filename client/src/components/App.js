import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import * as actions from '../actions';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component{

    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route path="/" exact={ true } component={ Landing }/>
                        <Route path="/surveys" exact component={ Dashboard }/>
                        <Route path="/surveys/new" component={ SurveyNew } />
                    </div>
                </BrowserRouter>
            </div>
        );
    }    
};

export default connect( null, actions )( App );