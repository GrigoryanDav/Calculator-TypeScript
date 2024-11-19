import { FC } from "react";

interface I_Button {
    label: string;
    onClick: () => void;
}

const Button: FC<I_Button> = ({ label, onClick }) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    )
}

export default Button