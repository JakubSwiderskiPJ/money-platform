import React from "react";

import { UserType } from "../types/userType";

export default function useUserFilter(ID: string, users: Array<UserType>){
    const [user, setUser] = React.useState<UserType>();

    React.useEffect(() => {
        const filtredUser = users.find((user) => user.ID === ID);

        setUser(filtredUser)
    }, [ID, users]);

    return user;
}