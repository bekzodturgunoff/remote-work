import "./style-navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav>
        <div>
          <img src="./imgs/logo.svg" alt="logo_snap" />
          <a href="#">Features</a>
          <a href="#">Company</a>
        </div>
        <div>
          <button>Login</button>
          <button>Register</button>
        </div>
      </nav>
    </div>
  );
}
