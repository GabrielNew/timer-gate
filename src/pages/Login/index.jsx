import { MdOutlineEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import "./styles.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id="loginBackgroundBox">
          <div id="logoImg">
            <h1>LOGO</h1>
          </div>
          <div className="inputEmail">
            <div>
              <MdOutlineEmail id="iconEmail" />
              <input
                type="email"
                name="inputEmail"
                id="userEmail"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <br />
          <div className="inputPassword">
            <GiPadlock id="iconPassword" />
            <input
              type="password"
              name="inputPassword"
              id="userPassword"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" id="btnLogin">
              Sign in
            </button>
          </div>
          <div>
            <a href="" id="createAccountLink">
              Create account
            </a>
            <a href="" id="forgotPassLink">
              Forgot password
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
