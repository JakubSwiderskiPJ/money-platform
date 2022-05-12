import { AccountsType } from "../../types/accountType";

type UserAccountsListProps = { accounts: Array<AccountsType> };

export default function UserAccountsList(
    { accounts }: UserAccountsListProps
) {
    return (
        <article>
            <h3>Accounts</h3>
            <ul>
                {accounts.map(
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
            </ul>
        </article>
    );
}