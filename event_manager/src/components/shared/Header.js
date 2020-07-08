import React from 'react';
import logo from '../../images/toc-long-logo.png';

class Header extends React.Component {

    render() {
        return (
            <header className="banner">
                <nav className="navbar navbar-custom" role="navigation">
                    <div className="container">
                        <div data-scroll-header className="navbar-header">
                            <a  href="index.html"><img src={logo} style={{ width: "60%" }} alt="ToC Logo" /></a>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;