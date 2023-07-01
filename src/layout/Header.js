import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
                <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0">
                    {/* Uncomment the line below if you also wish to use an image logo */}
                    {/* <img src="assets/img/logo.png" alt=""> */}
                    <h1>
                        Yummy<span>.</span>
                    </h1>
                </Link>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li>
                            {/* <a href="#hero">Home</a> */}
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            {/* <a href="#about">About</a> */}
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                            {/* <a href="#events">Events</a> */}
                            <Link to="/events">Events</Link>
                        </li>
                        <li>
                            {/* <a href="#chefs">Chefs</a> */}
                            <Link to="/chefs">Chefs</Link>
                        </li>
                        <li>
                            {/* <a href="#gallery">Gallery</a> */}
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li className="dropdown">
                            <a href="#">
                                <span>Drop Down</span>{" "}
                                <i className="bi bi-chevron-down dropdown-indicator" />
                            </a>
                            <ul>
                                <li>
                                    <a href="#">Drop Down 1</a>
                                </li>
                                <li className="dropdown">
                                    <a href="#">
                                        <span>Deep Drop Down</span>{" "}
                                        <i className="bi bi-chevron-down dropdown-indicator" />
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#">Deep Drop Down 1</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Drop Down 2</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Drop Down 3</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Drop Down 4</a>
                                        </li>
                                        <li>
                                            <a href="#">Deep Drop Down 5</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Drop Down 2</a>
                                </li>
                                <li>
                                    <a href="#">Drop Down 3</a>
                                </li>
                                <li>
                                    <a href="#">Drop Down 4</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
                {/* .navbar */}
                <Link className="btn-book-a-table" to="/book-a-table">Book a Table</Link>
                <i className="mobile-nav-toggle mobile-nav-show bi bi-list" />
                <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x" />
            </div>
        </header>
    );
}