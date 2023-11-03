import React, { useState, useRef } from 'react';
import { Icon } from './Icon';

function Document({ title, icon, color, children }) {
	const [collapsed, setCollapsed] = useState(false);
	const collapsible = useRef(null);

	return (
		<div className="document">
			<div className="card" style={{ backgroundColor: collapsed ? '#000' : '#111' }}>
				<button
					className="header-button"
					onClick={() => setCollapsed(!collapsed)}
					style={{ borderRadius: '0.5rem', boxShadow: '0 0.1rem 0.3rem rgba(0, 0, 0, 0.1)' }}
				>
					<p className="element-icon" style={{ backgroundColor: color }}>
						{icon}
					</p>
					<p>{title}</p>
					<Icon>{collapsed ? 'expand_more' : 'expand_less'}</Icon>
				</button>
				<div
					style={{
						margin: 'auto',
						padding: collapsed ? '0.5rem' : 0,
						backgroundColor: collapsed ? '#000' : '#111',
					}}
				>
					<p
						ref={collapsible}
						style={{
							backgroundColor: '#010101',
							maxHeight: collapsed ? null : 0,
							maxWidth: '100%',
							overflowX: 'auto',
						}}
					>
						{children}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Document;
