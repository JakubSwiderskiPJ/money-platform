import React from 'react';
import { v4 } from "uuid";
import './App.css';
import {Currencies} from "./consts/currencies";
import UserPanel from "./components/UserPanel/UserPanel";
import {CurrenciesSigns} from "./consts/currenciesSigns";
import {Routes, Route } from "react-router-dom";
import { RoutingPaths } from "./consts/RoutingPaths";
import Home from "./views/Home/Home";
import User from "./views/User/User";

export default function App() {
  return (
    <div className="App">
        <h1>Currencies Market</h1>
        <Routes>
            <Route path={RoutingPaths.HOME} element={<Home />} />
            <Route path={RoutingPaths.USER} element={<User />} />
        </Routes>
      <UserPanel
        user={{
          ID: v4(),
          accounts: [
            {name: Currencies.PLN, value: 5,  symbol: CurrenciesSigns.PLN},
            {name: Currencies.EUR, value: 100,  symbol: CurrenciesSigns.EUR},
            {name: Currencies.USD, value: 200, symbol: CurrenciesSigns.USD}
          ]
        }}
        />
    </div>
  );
}


