import { UserStateActions } from "../consts/userStateActions";

import { UserType } from "../types/userType";
import { UserStateActionType } from "../types/userStateActionType";

export default function usersStateReducer(
    state: Array<UserType>,
    action: UserStateActionType
) {
    switch (action.type) {
        case UserStateActions.PAYMENT: {
            const filtredUser = state.find((user) => user.ID === action.ID);

            const userChoosenAccount = filtredUser!.accounts.find(
                (account) => account.name === action.account
            );

            userChoosenAccount!.value = userChoosenAccount!.value + action.amount;

            return [...state];
        }
        case UserStateActions.REPAYMENT:
            return state;
        case UserStateActions.TRANSFER_TO_USER:
            return state;
        case UserStateActions.CURRENCY_EXCHANGE:
            return state;
        default:
            throw new Error();
    }
}