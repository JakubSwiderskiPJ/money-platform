import { users } from "../../mocks/users";

import { Link } from "react-router-dom";

export default function Home() {
    return (
        <ul>
            {users.map(({ ID }) => (
                <Link key={ID} to={`/user/${ID}`}>
                    <li>{ID}</li>
                </Link>
            ))}
        </ul>
    );
}