import React,{Component} from 'react';
import {render} from 'react-dom';
import Sider from './components/sider';
import Date from './components/date';
import UploadForm from './components/upload';

import 'antd/dist/antd.css';

import './style/base.scss';


import {Menu, Icon} from 'antd';

class Test extends Component {

	handleClick(e) {
		alert(JSON.stringify(e));
	}
	render() {
		return (
			<div>
				<div>
					<Menu mode="horizontal">
						<Menu.Item key="mail">
          		<Icon type="mail" />Navigation One
        		</Menu.Item>
						<Menu.Item key="mail2">
          		<Icon type="mail" />Navigation One
        		</Menu.Item>
						<Menu.Item key="mail3">
          		<Icon type="mail" />Navigation One
        		</Menu.Item>
					</Menu>
				</div>
				<Sider update={this.handleClick}/>
				<Date />
			  <UploadForm />
			</div>
		);
	}
}

render(<Test />,document.getElementById('container'));
