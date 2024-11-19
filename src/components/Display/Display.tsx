import { FC } from "react";

interface I_Display {
    value: string;
}

const Display: FC<I_Display> = ({ value }) => {
    return (
        <div>
            {value}
        </div>
    ) 
}

export default Display