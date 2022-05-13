import React from "react";

import { Link } from "react-router-dom";

import { UsersStateContext } from "../../contexts/UserStateContext/UserStateContext";

export default function Home() {
    const { state } = React.useContext(UsersStateContext);

    return (
        <>
            {state ? (
                <ul>
                    {state.map(({ ID }) => (
                        <Link key={ID} to={`/user/${ID}`}>
                            <li>{ID}</li>
                        </Link>
                    ))}
                </ul>
            ) : (
                <p>There is no users</p>
            )}
        </>
    );
}