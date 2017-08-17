import React, { Component } from 'react';

import { Menu, Icon } from 'antd';

class HeaderPage extends React.Component {
	state = {
		current: 'mail',
	}

	handleClick = (e) => {
		console.log('click ', e);
		this.setState({
		  current: e.key,
		});
  	}

  	render() {
		return <Menu
			onClick={this.handleClick}
			selectedKeys={[this.state.current]}
			mode="horizontal"
		>
			<Menu.Item key="mail">
				<Icon type="mail" />Navigation One
			</Menu.Item>
			<Menu.Item key="app" disabled>
				<Icon type="appstore" />Navigation Two
			</Menu.Item>
			<Menu.SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
				<Menu.MenuItemGroup title="Item 1">
					<Menu.Item key="setting:1">Option 1</Menu.Item>
					<Menu.Item key="setting:2">Option 2</Menu.Item>
				</Menu.MenuItemGroup>
				<Menu.MenuItemGroup title="Item 2">
					<Menu.Item key="setting:3">Option 3</Menu.Item>
					<Menu.Item key="setting:4">Option 4</Menu.Item>
				</Menu.MenuItemGroup>
			</Menu.SubMenu>
			<Menu.Item key="alipay">
				<a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
			</Menu.Item>
		</Menu>
	}
}

export default HeaderPage;