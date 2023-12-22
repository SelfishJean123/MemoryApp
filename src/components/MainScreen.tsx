import { useEffect } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import MemoryBoard from "./MemoryBoard/MemoryBoard";
import { useDispatch, useSelector } from "react-redux";
import useGenerateTiles from "../customHooks/useGenerateTiles";
import { setTilesArray } from "../store/actions/tileActions";
const MainScreen = () => {
    const score = useSelector((state: any) => state.scoreReducer.score);
    const tries = useSelector((state: any) => state.scoreReducer.tries);
    const dispatch = useDispatch();
    const { generateTiles } = useGenerateTiles();
  
    useEffect(() => {
      const initialTilesArray = generateTiles();
      dispatch(setTilesArray(initialTilesArray));
    }, []);
  
    const handleLogin = (username: string, password: string) => {
      console.log(`Logged as ${username}`);
    };
    return (
        <div className="app center-flex">
            <header className="app-header">
            <div className="header-inner-wrapper center-flex full">
                <div className="menu">
                <h5>Score: {score}</h5>
                <h5>Tries: {tries}</h5>
                </div>

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
    )
}

export default MainScreen;