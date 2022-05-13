import React from "react";

type AccountOptionProps = {
    setShowAccountOption: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AccountOption({
                                          setShowAccountOption,
                                      }: AccountOptionProps) {
    return (
        <>
            <button>Dispatch</button>
            <input type="number" />
            <button onClick={() => setShowAccountOption(false)}>Return</button>
        </>
    );
}