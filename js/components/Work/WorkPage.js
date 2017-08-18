import React, { Component } from 'react';

import { Layout, Breadcrumb, Icon } from 'antd';

const { Header, Content, Sider, Footer } = Layout;

import HeaderPage from '../HeaderPage';

import SiderPage from './SiderPage';

// import 'antd/lib/content/style';

class WorkPage extends React.Component {
	render() {
		return <Layout style={{backgroundColor: 'transparent'}}>
			<Header className="header" style={{
				backgroundColor: 'transparent',
				marginBottom: 20,
				padding: 0
			}}>
				<HeaderPage selected='work'/>
			</Header>
			<Layout>
				<Sider width={200} style={{ background: '#fff' }}>
					<SiderPage />
				</Sider>
				<Layout style={{ padding: 0 }}>
					<Breadcrumb style={{ margin: '12px 24px' }}>
						<Breadcrumb.Item>工作</Breadcrumb.Item>
						<Breadcrumb.Item>三维制作</Breadcrumb.Item>
					</Breadcrumb>
					<Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          				Content
        			</Content>
				</Layout>
			</Layout>
			<Footer style={{ textAlign: 'center' }}>
		    	The Design ©2017 Created by Fun.Zheng
		    </Footer>
		</Layout>
	}
}

export default WorkPage;