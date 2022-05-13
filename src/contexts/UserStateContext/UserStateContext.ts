import React from "react";

import { UserType } from "../../types/userType";
import { UserStateActionType } from "../../types/userStateActionType";

type UsersStateContextType = {
    state: Array<UserType>;
    dispatch: React.Dispatch<UserStateActionType>;
};

export const UsersStateContext = React.createContext<
    Partial<UsersStateContextType>
    >({});