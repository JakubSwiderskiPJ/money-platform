import React from "react";

import UserAccountsList from "../UserAccountsList/UserAccountsList";

import { UserType } from "../../types/userType";
import { AccountsType} from "../../types/accountType";

type UserPanelProps = { user: UserType };

export default function UserPanel({ user }: UserPanelProps) {
    /* const [loggedUser, setLoggedUser] = React.useState();
    React.useEffect(() => {}) */

    React.useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <section>
            <h2>Hello {user.ID}</h2>
            {/* <UserAccountsList accounts={user.accounts as Array<AccountsType>} /> */}
            {user.accounts.map(
                ({
                     name,
                     value,
                     symbol,
                 }: {
                    name: string;
                    value: number;
                    symbol: string;
                }) => (
                    <li>
                        {name} Account: {value} {symbol}
                    </li>
                )
            )}
        </section>
    );
}