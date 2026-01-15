import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/living">Living Languages</Link>
        </nav>
    );
}

export default Navbar;