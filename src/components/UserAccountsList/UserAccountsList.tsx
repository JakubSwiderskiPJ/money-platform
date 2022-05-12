import { AccountsType} from "../../types/accountType";

// TODO: Find a type for this
export default function UserAccountsList({ accounts }: any/* rray<AccountsType> */) {
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