import { v4 } from "uuid";
import UserPanel from "../../components/UserPanel/UserPanel";
import { Currencies } from "../../consts/currencies";
import { CurrenciesSigns } from "../../consts/currenciesSigns";

export default function User() {
    // const [user]

    return (
        <UserPanel user={{
            ID: v4(),
            accounts: [
                {name: Currencies.PLN, value: 50, symbol: CurrenciesSigns.PLN},
                {name: Currencies.EUR, value: 100, symbol: CurrenciesSigns.EUR},
                {name: Currencies.USD, value: 150, symbol: CurrenciesSigns.USD}
            ]
        }}
        />
    );
}