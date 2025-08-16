function Navbar() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#intro">
                    OKIROR SAMUEL VINALD
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#intro">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#experience">
                                Experience
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#education">
                                Education
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#skills">
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">
                                Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#certificates">
                                Certificates
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
