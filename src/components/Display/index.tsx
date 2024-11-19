import { FC } from "react";
import './index.css'

interface I_Display {
    value: string;
}

const Display: FC<I_Display> = ({ value }) => {
    return (
        <div className="display">
            {value}
        </div>
    ) 
}

export default Display