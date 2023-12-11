import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import MemoryBoard from "./components/MemoryBoard/MemoryBoard";
import "./App.scss";

const App = () => {
  const [score, setScore] = useState(0);

  return (
    <div className="app center-flex">
      <header className="app-header">
        <div className="header-inner-wrapper center-flex full">
          <div className="menu">Your score: {score}</div>

          <div className="user-dropdown">
            <a className="user-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              <UserCircleIcon className="h-6 w-6 text-blue-500" />
            </a>
          </div>
        </div>
      </header>

      <div className="app-body center-flex">
        <MemoryBoard />
      </div>

      <footer className="app-footer center-flex">
        <p>Copyright © 2023 Joanna Hornung</p>
      </footer>
    </div>
  );
};

export default App;
