import UserAccountsList from "../UserAccountsList/UserAccountsList";

import { UserType } from "../../types/userType";

type UserPanelProps = { user: UserType };

export default function UserPanel({ user }: UserPanelProps) {
    return (
        <section>
            <h2>Hello {user.ID}</h2>
            <UserAccountsList user={user} />
        </section>
    );
}