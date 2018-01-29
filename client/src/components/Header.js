import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo left">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Login with Google</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;