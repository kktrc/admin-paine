import React,{Component} from 'react';
import {render} from 'react-dom';

class Test extends Component {

	render() {
		return (
			<div>Hello Boy Haha</div>
		);
	}
}

render(<Test />,document.getElementById('container'));
