import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header className="banner">
                <nav className="navbar navbar-custom" role="navigation">
                    <div className="container">
                        <div data-scroll-header className="navbar-header">
                            <button type="button" className="navbar-toggle">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="index.html"><img src="img/toc-long-logo.png" style={{ width: "75%" }} alt="ToC Logo" /></a>
                        </div>

                        <div className="collapse navbar-collapse" id="nav">
                            <ul className="nav navbar-nav navbar-right nav-effect uppercase">
                                <li><a data-scroll href="#about"><span data-hover="About">About</span></a></li>
                                <li><a data-scroll href="#program"><span data-hover="programs">programs</span></a></li>
                                <li><a data-scroll href="#stories"><span data-hover="events">events</span></a></li>
                                {/*<!--<li><a data-scroll href="#on-deck"><span data-hover="on deck">on deck</span></a></li>-->*/}
                                <li><a data-scroll href="http://www.meetup.com/Technologists" target="_blank"><span data-hover="meetup">meetup</span></a></li>
                            </ul>
                        </div> {/*<!-- /.navbar-collapse --> */}
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;