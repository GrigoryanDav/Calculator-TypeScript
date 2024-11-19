import { FC, useState } from "react"
import { evaluate } from "mathjs"
import Display from "../Display"
import Button from "../Button"
import './index.css'

const Calculator: FC = () => {
    const [input, setInput] = useState<string>('')
    const [result, setResult] = useState<string>('')

    const handleButtonClick = (value: string) => {
        if (value === 'C') {
            setInput('')
            setResult('')
        } else if (value === '=') {
            try {
                const calcResult = evaluate(input)
                setResult('')
                setInput(calcResult.toString())
            } catch {
                setResult('Error')
            }
        } else {
            setInput((prev) => prev + value)
        }
    }

    return (
        <div className="calculator">
            <Display value={result || input || '0'} />
            <div className="buttons">
                {
                    ['7', '8', '9', '/'].map((btn) => (
                        <Button key={btn} label={btn} onClick={() => handleButtonClick(btn)} />
                    ))
                }

                {
                    ['4', '5', '6', '*'].map((btn) => (
                        <Button key={btn} label={btn} onClick={() => handleButtonClick(btn)} />
                    ))
                }

                {
                    ['1', '2', '3', '-'].map((btn) => (
                        <Button key={btn} label={btn} onClick={() => handleButtonClick(btn)} />
                    ))
                }

                {
                    ['0', '.', '=', '+'].map((btn) => (
                        <Button key={btn} label={btn} onClick={() => handleButtonClick(btn)} />
                    ))
                }

                <Button label="C" onClick={() => handleButtonClick('C')} />
            </div>
        </div>
    )
}


export default Calculator