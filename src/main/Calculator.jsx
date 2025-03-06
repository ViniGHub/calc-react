import { Component } from "react"
import "./Calculator.css"
import Button from "../components/Buttons"
import Display from "../components/Display"

const initialState = {
    displayValue: "1000",
    clearDislay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {
    state = {...initialState}

    constructor() {
        super()

        this.clearMemory.bind(this)
        this.setOperation.bind(this)
        this.addDigit.bind(this)
    }

    clearMemory() {
        this.state = {...initialState}
    }

    setOperation(operation) {

    }

    addDigit(n) {
        if (n === "." && this.state.displayValue)
    }

    render() {

        return (
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <Button label="AC" click={this.clearMemory} triple />
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