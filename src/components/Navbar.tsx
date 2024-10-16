import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <div className="nav-parent">
        <div className="nav-wrapper">
            <Link to="/" className="nav-link left-link">Home</Link>
            <Link to="/resume" className="nav-link middle-link">Resume</Link>
            <Link to="/contact" className="nav-link right-link">Contact</Link>
        </div>
        </div>
    )
}