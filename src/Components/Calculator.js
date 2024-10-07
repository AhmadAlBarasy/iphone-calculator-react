import ValueBar from "./ValueBar"
import Buttons from "./Buttons"
import Button from "./Button"
import { useState } from "react"

export default function Calculator(){
    const [result, setResult] = useState(null);
    const [input, setInput] = useState(null);
    const [operator, setOperator] = useState(null);

    // reset everything
    function handleReset(){
        setResult(null);
        setInput(null);
        setOperator(null);
    }

    function handleSignInverse(){
        if (input){
            if (input.includes('-'))
                return setInput(input => input.slice(1, input.length));
            setInput(`-${input}`);
        }
    }

    function handleNumberClick(value){
        if (!input)
            return setInput(`${value}`);
        const newInput = `${input}${value}`;
        setInput(newInput);
    }

    function handleDecimalPointClick(){
        if(input && !input.includes('.'))
            setInput(`${input}.`);
    }

    function handleOperatorClick(op){
        if (input === null){
            setOperator(op);
            return;
        }
        if (result === null){
            setResult(Number(input));
            setOperator(op);
            setInput(null);
            return;
        }
        handleOperation(op);
    }
    
    function handleOperation(op){
        const temp = input;
        if (operator === '+')
            setResult(result => result + Number(temp));
        if (operator === '-')
            setResult(result => result - Number(temp));
        if (operator === 'x')
            setResult(result => result * Number(temp));
        if (operator === '÷')
            setResult(result => result / Number(temp));
        setInput(null);
        setOperator(op);
    }

    function handleEqualsClick(){
        if (input === null || result === null) return;
        handleOperation(null);
    }

    return <div className="main">
        <ValueBar>{input === null ? (result || 0) : input}</ValueBar>
        <Buttons>
            <Button onClick={handleReset} color={'gray'}>AC</Button>
            <Button onClick={handleSignInverse} color={'gray'}>+/-</Button>
            <Button color={'gray'}>%</Button>
            <Button onClick={() => handleOperatorClick('÷')} color={'orange'}>÷</Button>
            <Button onClick={() => handleNumberClick(7)} color={'gray'}>7</Button>
            <Button onClick={() => handleNumberClick(8)} color={'darkgray'}>8</Button>
            <Button onClick={() => handleNumberClick(9)} color={'darkgray'}>9</Button>
            <Button onClick={() => handleOperatorClick('x')} color={'orange'}>x</Button>
            <Button onClick={() => handleNumberClick(4)} color={'darkgray'}>4</Button>
            <Button onClick={() => handleNumberClick(5)} color={'darkgray'}>5</Button>
            <Button onClick={() => handleNumberClick(6)} color={'darkgray'}>6</Button>
            <Button onClick={() => handleOperatorClick('-')} color={'orange'}>-</Button>
            <Button onClick={() => handleNumberClick(1)} color={'darkgray'}>1</Button>
            <Button onClick={() => handleNumberClick(2)} color={'darkgray'}>2</Button>
            <Button onClick={() => handleNumberClick(3)} color={'darkgray'}>3</Button>
            <Button onClick={() => handleOperatorClick('+')} color={'orange'}>+</Button>
            <Button onClick={() => handleNumberClick(0)} color={'darkgray'}>0</Button>
            <Button onClick={handleDecimalPointClick} color={'darkgray'}>.</Button>
            <Button onClick={() => handleEqualsClick()} color={'orange'}>=</Button>
        </Buttons>
    </div>
}