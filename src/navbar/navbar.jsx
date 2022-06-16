import "./style-navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="left-nav">
          <img src="../imgs/logo.svg" alt="logo_snap" />
          {/* it won't be a link */}
          <a href="#">Features</a>
          <a href="#">Company</a>
        </div>
        <div className="right-nav">
          <button>Login</button>
          <button>Register</button>
        </div>
      </nav>
    </div>
  );
}
