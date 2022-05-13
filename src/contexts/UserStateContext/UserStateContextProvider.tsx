import React from "react";

import { users } from "../../mocks/users";

import usersStateReducer from "../../reducers/usersStateReducers";

import { UsersStateContext } from "./UserStateContext";

type UserStateContextProviderProps = { children: React.ReactNode };

export default function UserStateContextProvider({
                                                     children,
                                                 }: UserStateContextProviderProps) {
    const [state, dispatch] = React.useReducer(
        usersStateReducer,
        users,
        (init) => init
    );

    return (
        <UsersStateContext.Provider value={{ state: state, dispatch: dispatch}}>
            {children}
        </UsersStateContext.Provider>
    );
}