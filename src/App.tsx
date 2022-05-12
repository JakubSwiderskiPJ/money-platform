import React from 'react';
import { v4 } from "uuid";
import './App.css';
import {Currencies} from "./consts/currencies";
import UserPanel from "./components/UserPanel/UserPanel";
import {CurrenciesSigns} from "./consts/currenciesSigns";

export default function App() {
  return (
    <div className="App">
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


