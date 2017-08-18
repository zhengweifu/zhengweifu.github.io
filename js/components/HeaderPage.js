import React, { Component, PropTypes } from 'react';

import { Menu, Icon } from 'antd';

class HeaderPage extends React.Component {

	static propTypes = {
		selected: PropTypes.string
	};

	static defaultProps = {
		selected: 'main'
	};

  	render() {
		return <Menu
			selectedKeys={[this.props.selected]}
			mode="horizontal"
			style={{ lineHeight: '64px' }}
		>
			<Menu.Item key="main">
				首页
			</Menu.Item>
			<Menu.Item key="work">
				工作
			</Menu.Item>
			<Menu.Item key="mail">
				简历
			</Menu.Item>
		</Menu>
	}
}

export default HeaderPage;