import { FC } from "react";
import './index.css'

interface I_Button {
    label: string;
    onClick: () => void;
}

const Button: FC<I_Button> = ({ label, onClick }) => {
    return (
        <button className="button" onClick={onClick}>
            {label}
        </button>
    )
}

export default Button