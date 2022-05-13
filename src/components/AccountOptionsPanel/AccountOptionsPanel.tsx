import React from "react";

import AccountOption from "../AccountOption/AccountOption";
import AccountOptionsButtonsWrapper from "../AccountOptionButtonsWrapper/AccountOptionsButtonsWrapper";

export default function AccountOptionsPanel() {
    const [showAccountOption, setShowAccountOption] =
        React.useState<boolean>(false);

    return (
        <>
            {showAccountOption ? (
                <AccountOption setShowAccountOption={setShowAccountOption} />
            ) : (
                <AccountOptionsButtonsWrapper
                    setShowAccountOption={setShowAccountOption}
                />
            )}
        </>
    );
}