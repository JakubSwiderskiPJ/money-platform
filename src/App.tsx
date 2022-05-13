import "./App.css";

import { Routes, Route } from "react-router-dom";

import UserStateContextProvider from "./contexts/UserStateContext/UserStateContextProvider";

import Home from "./views/Home/Home";
import User from "./views/User/User";

import { RoutingPaths } from "./consts/RoutingPaths";

export default function App() {
    return (
        <UserStateContextProvider>
            <div className="App">
                <h1>Currencies Market</h1>
                <Routes>
                    <Route path={RoutingPaths.HOME} element={<Home />} />
                    <Route path={RoutingPaths.USER} element={<User />} />
                </Routes>
            </div>
        </UserStateContextProvider>
    );
}