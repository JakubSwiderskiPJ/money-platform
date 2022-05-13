import React from "react";

type AccountOptionsButtonsWrapperProps = {
    setShowAccountOption: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AccountOptionsButtonsWrapper({
                                                         setShowAccountOption,
                                                     }: AccountOptionsButtonsWrapperProps) {
    const handleAccountOption = () => {
        setShowAccountOption(true);
    };

    return (
        <ul>
            <li>
                <button onClick={handleAccountOption}>Payment</button>
            </li>
            <li>
                <button onClick={handleAccountOption}>Repayment</button>
            </li>
            <li>
                <button onClick={handleAccountOption}>Send To User</button>
            </li>
            <li>
                <button onClick={handleAccountOption}>Exchange</button>
            </li>
        </ul>
    );
}