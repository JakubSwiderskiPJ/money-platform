import React from "react";

import { UsersStateContext } from "../../contexts/UserStateContext/UserStateContext";

import { UserStateActions } from "../../consts/userStateActions";

import { AccountsType } from "../../types/accountType";
import AccountOptionsPanel from "../AccountOptionsPanel/AccountOptionsPanel";
import AccountOption from "../AccountOption/AccountOption";

type UserAccountsListProps = { ID: string; accounts: Array<AccountsType> };

export default function UserAccountsList({
                                             ID,
                                             accounts,
                                         }: UserAccountsListProps) {
    const { dispatch } = React.useContext(UsersStateContext);

    const [showPayment, setShowPayment] = React.useState<boolean>();

    const [input, setInput] = React.useState<number>();

    /* const [showAccountOption, setShowAccountOption] =
      React.useState<boolean>(false); */

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
                        <li key={symbol}>
              <span>
                {name} Account: {value} {symbol}
              </span>

                            <AccountOptionsPanel />

                            {/* {showAccountOption ? (
                <AccountOption />
              ) : (
                <AccountOptionsPanel
                  setShowAccountOption={setShowAccountOption}
                />
              )} */}

                            {/* {!showPayment && (
                <button onClick={() => setShowPayment(!showPayment)}>
                  Make Payment
                </button>
              )}
              <>
                {showPayment && (
                  <>
                    <input
                      type="number"
                      onInput={(
                        event: React.FormEvent<HTMLInputElement> & {
                          target: HTMLInputElement;
                        }
                      ) => {
                        setInput(Number(event.target.value));
                      }}
                    />
                    <button
                      onClick={() =>
                        dispatch!({
                          type: UserStateActions.PAYMENT,
                          ID: ID,
                          account: name,
                          amount: input!,
                        })
                      }
                    >
                      Payment
                    </button>
                  </>
                )}
              </> */}
                        </li>
                    )
                )}
            </ul>
        </article>
    );
}