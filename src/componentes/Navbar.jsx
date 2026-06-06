import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-brand">
          ShopeHup
        </Link>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/checkout" className="navbar-link">Cart</Link>
        </div>

        <div className="nav-auth">
            <div  className="nav-auth-links">
                <Link to="/auth" className="btn btn-secondary">Login</Link>
                 <Link to="/auth"   className="btn btn-primary">signup</Link>

            </div>
        </div>

      </div>
    </nav>
  );
}