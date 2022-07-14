import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
class Counter extends Component {
	state = {
		count: 0
	};

	render() {
		return (
			<React.Fragment>
				<span className="Button">{this.format()}</span>
				<h1>Hello World fdsfdsfds</h1>
				<button>Increment</button>
			</React.Fragment>
		);
	}

	format() {
		const { count } = this.state;
		return count === 0 ? <h2>Zero</h2> : count;
	}
}

export default Counter;
