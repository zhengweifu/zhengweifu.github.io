import React, { Component, PropTypes } from 'react';

import { Icon } from 'antd';

class CodeBox extends Component {
	constructor(props) {
		super(props);

		this.state={
			open: props.open
		};
	}

	static propTypes = {
		children: PropTypes.node,
		codeComponent: PropTypes.node,
		borderColor: PropTypes.string,
		title: PropTypes.string,
		open: PropTypes.bool
	};

	static defaultProps = {
		open: false,
		borderColor: '#e9e9e9',
		title: 'tile'
	};

	render() {
		const { children, codeComponent, borderColor, title } = this.props;
		const padding = 10;
		return <div style={{
			border: `1px solid ${borderColor}`,
			borderRadius: 4
		}}>
			<div style={{padding: padding}}>{children}</div>
			<div style={{
				borderTop: `1px solid ${borderColor}`,
				padding: padding,
				position: 'relative'
			}}>
				<h3>{title}</h3>
				<span style={{
					position: 'absolute',
					top: padding + 2,
					right: padding + 2
				}} onClick={e => {
					this.setState({open: !this.state.open});
				}}><Icon type={this.state.open ? 'code-o' : 'code'} style={{ fontSize: 16, color: '#08c' }}/></span>
			</div>
			<div style={{
				display: this.state.open ? 'block' : 'none',
				borderTop: `1px dashed ${this.state.open ? borderColor : 'transparent'}`,
				maxHeight: 500,
				overflow: 'auto',
				padding: padding - 6
			}}>
				{codeComponent}
			</div>
		</div>;
	}
}

export default CodeBox;