import { UserStateActions } from "../consts/userStateActions";

export type UserStateActionType =
    | {
    type: UserStateActions.PAYMENT;
    ID: string;
    account: string;
    amount: number;
}
    | { type: UserStateActions.REPAYMENT }
    | { type: UserStateActions.TRANSFER_TO_USER }
    | { type: UserStateActions.CURRENCY_EXCHANGE };