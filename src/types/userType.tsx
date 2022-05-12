import { AccountsType } from "./accountType";

export type UserType = {
    ID: string;
    accounts: Array<AccountsType>;
};