import "./Header.css";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top p-3 bg-transparent">
            <div className="container">
                <a className="navbar-brand" href="#home" >Mehmet Sahin</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ flexGrow: 0 }}>
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Timeline</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
