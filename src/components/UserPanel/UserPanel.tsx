import { useParams } from "react-router-dom";

import { UsersStateContext } from "../../contexts/UserStateContext/UserStateContext";

import UserAccountsList from "../UserAccountsList/UserAccountsList";

import useUserFilter from "../../hooks/useUserFilter";
import React from "react";

export default function UserPanel() {
    let params = useParams();

    const { state } = React.useContext(UsersStateContext);

    const loggedUser = useUserFilter(params.ID!, state!);

    return (
        <section>
            {loggedUser ? (
                <>
                    <h2>Hello {loggedUser.ID}</h2>
                    <UserAccountsList ID={loggedUser.ID} accounts={loggedUser.accounts} />
                </>
            ) : (
                <p>Something went wrong. No user found!</p>
            )}
        </section>
    );
}