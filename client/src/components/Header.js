import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

    renderContent(){
        switch( this.props.auth ){
            case null:
                return;
            case false:
                return (
                    <li><a href="/auth/google">Login with Google</a></li>
                );
            default:
                return (
                    <li><a href="/api/logout">Logout</a></li>   
                );
        }
    }

    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        { this.renderContent() }
                    </ul>
                </div>
            </nav>
        );
    }
}

const mapsStateToProps = ( state ) => {
    return {
        auth: state.auth
    };
}

export default connect( mapsStateToProps )( Header );