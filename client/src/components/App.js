import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2>;

const App = ( ) => {

    

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
};

export default App;