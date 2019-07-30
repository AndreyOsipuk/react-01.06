import React, { Component, useState } from 'react';
const mapping = {
    plus: 1,
    minus: -1,
};
//statefull
/*
export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }
    handleClick = (event) => {
        const type = event.target.name;
        this.setState((prevState) => ({
            counter: prevState.counter + mapping[type]
        }))
    }

    render() {
        return (
            <div>
                <button name="minus" onClick={this.handleClick}>-</button>
                {this.state.counter}
                <button name="plus" onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
*/
//stateless
export function Counter() {
    const [count, setCount] = useState(0);
    const handleButtonClick = ({ target: { name } }) => setCount(count + mapping[name]);

    return (
        <div>
            {count > 0 && <button name="minus" onClick={handleButtonClick}>-</button>}
            {count}
            <button name="plus" onClick={handleButtonClick}>+</button>
        </div>
    )
}