import { MdOutlineEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import { useState } from "react";
import "./styles.css";

const CreateAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <form>
        <div id="loginBackgroundBox">
          <div id="logoImg">
            <h1>Create your account</h1>
          </div>
          <div className="inputEmail">
            <div>
              <MdOutlineEmail id="iconEmail" />
              <input
                type="email"
                name="inputEmail"
                id="userEmail"
                placeholder="Email"
                required
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
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" id="btnLogin">
              Sign in
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateAccount;
