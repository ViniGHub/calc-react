import { Component } from "react"
import "./Calculator.css"
import Button from "../components/Buttons"
import Display from "../components/Display"

const initialState = {
    displayValue: "0",
    clearDisplay: false,
    operation: null,
    values: [undefined, undefined],
    current: 0
}

export default class Calculator extends Component {
    state = { ...initialState }

    constructor() {
        super()

        this.clearMemory.bind(this)
        this.setOperation.bind(this)
        this.addDigit.bind(this)
    }

    clearMemory = () => {
        this.setState({ ...initialState })
    }

    setOperation = (operation, instant = false) => {
        if (this.state.current === 0) {
            const values = [...this.state.values]
            if (instant) {
                values[0] = eval(`${this.state.values[0] ?? 0} ${operation}`)

            }
            this.setState({ operation, current: instant ? 0 : 1, clearDisplay: instant ? false : true, values, displayValue: values[0] })
        } else if (this.state.values[1] !== undefined) {
            const equals = operation === "="
            const currentOperation = this.state.operation

            const values = [...this.state.values]

            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                if (isNaN(values[0]) || !isFinite(values[0])) {
                    this.clearMemory();
                    return
                }
            } catch(e) {
                values[0] = this.state.values[0]
            }
            values[1] = undefined

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit = (n) => {
        if (n === "." && this.state.displayValue.includes(".")) {
            return
        }

        const clearDisplay = this.state.displayValue === "0" || this.state.clearDisplay
        const currenValue = clearDisplay ? "" : this.state.displayValue
        const displayValue = currenValue + n

        this.setState({ displayValue, clearDisplay: false })

        if (n !== ".") {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
        }

        
    }

    render() {

        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} />
                <Button text="-/+" label="* -1" click={this.setOperation} operation instant />
                <Button text="%" label="/100" click={this.setOperation} operation instant />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} double />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
            </div>
        )
    }
}