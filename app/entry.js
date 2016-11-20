import React,{Component} from 'react';
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Sider from './components/sider';
import Date from './components/date';
import UploadForm from './components/upload';

import 'antd/dist/antd.css';

import './style/base.scss';


import {Menu, Icon} from 'antd';

class Test extends Component {

	constructor(props) {
    super(props);
    this.state = {
      select: '1',
    };
  }

	handleClick(e) {
		this.setState({
			select: e
		});
		alert(JSON.stringify(e));
	}

	render() {
		return (
			<div>
				<Sider update={this.handleClick.bind(this)}/>
				<Router history={hashHistory}>
					<Route path="/" component={this.state.select == '1' ? Date : UploadForm}>
					</Route>
				</Router>
			</div>
	);
}
}

render(<Test />,document.getElementById('container'));
