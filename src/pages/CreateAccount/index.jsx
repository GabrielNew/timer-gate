import { MdOutlineEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import "./styles.css";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <>
      <form>
        <div id="loginBackgroundBox">
          <div id="logoImg">
            <h2 id="createAccountText">Create your account</h2>
          </div>
          <div className="inputUsername">
            <div>
              <FaRegUser id="iconUser" />
              <input
                type="text"
                name="inputUsername"
                id="userName"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
          <div className="inputConfirmPassword">
            <GiPadlock id="iconPassword" />
            <input
              type="password"
              name="inputConfirmPassword"
              id="userConfirmPassword"
              placeholder="confirm your password"
              required
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
            />
          </div>
          <div>
            <button type="submit" id="btnCreateAccount">
              Create account
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default CreateAccount;
