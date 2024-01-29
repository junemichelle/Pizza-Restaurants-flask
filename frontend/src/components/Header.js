import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>McPizza🍕</h1>
      </div>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Header;