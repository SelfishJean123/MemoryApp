import { useState } from "react";
import "./MemoryLogin.scss";

interface MemoryLoginProps {
  onLogin: (username: string, password: string) => void;
}

const MemoryLogin: React.FC<MemoryLoginProps> = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeTab = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSignInSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(username, password);
    // Wyczyść pola po zalogowaniu
    setUsername("");
    setPassword("");
  };

  const handleSignUpSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(username, password);
    // Wyczyść pola po zalogowaniu
    setUsername("");
    setPassword("");
  };

  return (
    <div className="memory-login full center-flex" data-testid="memory-login">
      <div className="login-wrapper">
        <div className="login-buttons">
          <button className={`left ${activeTab === 1 ? "active" : ""}`} onClick={() => changeTab(1)}>
            Sign In
          </button>
          <button className={`right ${activeTab === 2 ? "active" : ""}`} onClick={() => changeTab(2)}>
            Sign Up
          </button>
        </div>

        <div className="login-forms">
          {activeTab === 1 && (
            <form className="login-form" onSubmit={handleSignInSubmit}>
              <div className="form-field">
                <label htmlFor="username">Login</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
              </div>
              <div className="form-field">
                <button type="submit">Sign In</button>
              </div>
            </form>
          )}

          {activeTab === 2 && (
            <form className="login-form" onSubmit={handleSignUpSubmit}>
              <div className="form-field">
                <label htmlFor="username">Name</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="username">Login</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
              </div>
              <div className="form-field">
                <label htmlFor="password">Repeat Password</label>
                <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
              </div>
              <div className="form-field">
                <button type="submit">Sign Up</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemoryLogin;
