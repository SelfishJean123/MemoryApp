import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import MemoryLogin from "./components/MemoryLogin/MemoryLogin";
import MemoryBoard from "./components/MemoryBoard/MemoryBoard";
import "./App.scss";
import { useSelector } from "react-redux";

const App = () => {
  //const score = useSelector((state: { score: number }) => state.score);

  const handleLogin = (username: string, password: string) => {
    console.log(`Logged as ${username}`);
  };

  return (
    <div className="app center-flex">
      <header className="app-header">
        <div className="header-inner-wrapper center-flex full">
          <div className="menu">Your score: {0}</div>

          <div className="user-dropdown">
            <a className="user-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              <UserCircleIcon className="h-6 w-6 text-blue-500" />
            </a>
          </div>
        </div>
      </header>

      <div className="app-body center-flex">
        {/* <BrowserRouter>
          <Routes>
            <Route path="/"> */}
        {/* <MemoryLogin onLogin={handleLogin} /> */}
        {/* </Route>
            <Route path="/memory"> */}
        <MemoryBoard />
        {/* </Route>
          </Routes>
        </BrowserRouter> */}
      </div>

      <footer className="app-footer center-flex">
        <p>Copyright © 2023 Joanna Hornung</p>
      </footer>
    </div>
  );
};

export default App;
