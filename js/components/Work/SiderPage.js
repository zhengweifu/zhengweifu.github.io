import React, { Component, PropTypes } from 'react';

import { Menu, Icon } from 'antd';

const { SubMenu, MenuItemGroup  } = Menu;

class SiderPage extends Component {
	static propTypes = {
		selected: PropTypes.string
	};

	static defaultProps = {
		selected: '1'
	};

	onClickHandle(option) {
		let webPath = '/';
		switch(option.key) {
			case '1':
				webPath = '/work/threemake';
				break;
			case '2-1':
				webPath = '/work/threemodeltool';
				break;
		}
		window.location.href = '#' + webPath;

	}

  	render() {
		return <Menu
			selectedKeys={[this.props.selected]}
			defaultOpenKeys={['2', '3', '4', '5', '6']}
			mode="inline"
			onClick={this.onClickHandle.bind(this)}
		>
			<Menu.Item key="1">
				<Icon type="laptop" />三维制作
			</Menu.Item>
			<SubMenu key="2" title={<span><Icon type="laptop" />三维工具开发</span>}>
	            <Menu.Item key="2-1">模型</Menu.Item>
	            <Menu.Item key="2-2">灯光 / 渲染</Menu.Item>
	            <Menu.Item key="2-3">绑定 / 动画</Menu.Item>
	            <Menu.Item key="2-4">杂项</Menu.Item>
          	</SubMenu>
			<SubMenu key="3" title={<span><Icon type="laptop" />前端开发</span>}>
	            <Menu.Item key="3-1">WebGL</Menu.Item>
	            <Menu.Item key="3-2">React 组件</Menu.Item>
          	</SubMenu>
			<SubMenu key="4" title={<span><Icon type="laptop" />后端开发</span>}>
	            <Menu.Item key="4-1">PHP</Menu.Item>
          	</SubMenu>
          	<SubMenu key="5" title={<span><Icon type="laptop" />引擎开发</span>}>
	            <Menu.Item key="5-1">DVS3D</Menu.Item>
	            <Menu.Item key="5-2">Unity</Menu.Item>
	            <Menu.Item key="5-3">Unreal</Menu.Item>
          	</SubMenu>
          	<SubMenu key="6" title={<span><Icon type="laptop" />平面工具开发</span>}>
	            <Menu.Item key="6-1">AI</Menu.Item>
	            <Menu.Item key="6-2">PS</Menu.Item>
	            <Menu.Item key="6-3">其他</Menu.Item>
          	</SubMenu>
		</Menu>
	}
}

export default SiderPage;