var React = require('react');
var ReactDOM = require('react-dom');

var Test = React.createClass({

	render: function() {
		var style={
			width: '100px',
			height: '100px',
			backgroundColor: 'red'
		};
		return (
			<div style={style}>
				<p>Hello World</p>
				sdfsd你好sdfs
				sdf 
			</div>
		);
	}
});

ReactDOM.render(<Test />,document.getElementById('container'));
