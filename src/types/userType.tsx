type AccountsType = {
    name: string;
    value: number;
    symbol: string;
};

export type UserType = {
    ID: string;
    accounts: Array<AccountsType>;
};