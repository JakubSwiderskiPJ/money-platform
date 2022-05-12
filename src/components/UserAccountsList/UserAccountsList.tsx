import { AccountsType } from "../../types/accountsType";

type UserAccountsListProps = { accounts: Array<AccountsType> };

export default function UserAccountsList(
    { accounts }: UserAccountsListProps
) {
    return (
        <article>
            <h3>Accounts</h3>
            <ul>
                {user.accounts.map(({ name, value }) => (
                    <li>
                        {name} Account: {value}
                    </li>
                ))}
            </ul>
        </article>
    )
}