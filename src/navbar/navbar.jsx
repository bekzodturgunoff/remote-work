import "./style-navbar.css";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { supabase } from "./client";
import logo from "../../imgs/logo.svg";

function Navbar() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    checkUser();
    window.addEventListener("hashchange", function () {
      checkUser();
    });
  }, []);
  async function checkUser() {
    const user = supabase.auth.user();
    setUser(user);
  }
  async function signInWithGithub() {
    await supabase.auth.signIn({
      provider: "github",
    });
  }
  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }
  if (user) {
    return (
      <div>
        <nav>
          <div className="left-nav">
            <img src={logo} alt="logo_snap" />
            <a href="#">Features</a>
            <a href="#">Company</a>
          </div>
          <div className="right-nav">
            <p>Hello, {user.email}</p>
            <button onClick={signOut}>
              <FaGithub className="github" /> Sign out
            </button>
          </div>
        </nav>
      </div>
    );
  }

  return (
    <div>
      <nav>
        <div className="left-nav">
          <img src={logo} alt="logo_snap" />
          <a href="#">Features</a>
          <a href="#">Company</a>
        </div>
        <div className="right-nav">
          <button onClick={signInWithGithub}>
            <FaGithub className="github" />
            Login
          </button>

          <button onClick={signInWithGithub}>
            <FaGithub className="github" /> Register
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
