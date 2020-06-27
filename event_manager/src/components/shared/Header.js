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

                        <div className="collapse navbar-collapse" id="nav">
                            <ul className="nav navbar-nav navbar-right nav-effect uppercase">
                                <li><a data-scroll href="#about"><span data-hover="About">About</span></a></li>
                                <li><a data-scroll href="#program"><span data-hover="programs">programs</span></a></li>
                                <li><a data-scroll href="#stories"><span data-hover="events">events</span></a></li>
                                <li><a data-scroll href="http://www.meetup.com/Technologists" target="_blank"><span data-hover="meetup">meetup</span></a></li>
                            </ul>
                        </div> 
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;