import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let TerminalIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='terminal logo' viewBox='0 0 40 40'>
			<path
				d='M36.98 14.05l-6.31 1.36L9.33 20l-7.35 1.58A2.52 2.52 0 0 0 0 24.05v13.42C0 38.87 1.12 40 2.5 40h35c1.38 0 2.5-1.13 2.5-2.53V16.53c0-.77-.34-1.49-.93-1.97a2.48 2.48 0 0 0-2.09-.5z'
				fill='#9B66FF'></path>
			<path
				d='M28.59 0H11.58A2.54 2.54 0 0 0 9 2.5v25c0 1.38 1.15 2.5 2.58 2.5h16.84A2.54 2.54 0 0 0 31 27.5v-25A2.5 2.5 0 0 0 28.59 0z'
				fill='#29b6f6'></path>
			<path
				d='M31 15.34V27.5c0 1.38-1.15 2.5-2.58 2.5H11.58A2.54 2.54 0 0 1 9 27.5v-7.43l.33-.07 21.34-4.59.33-.07z'
				fill='#0277bd'></path>
		</SvgIcon>
	);
};

TerminalIcon = styled(TerminalIcon, { name: 'terminal-icon' })(({ theme }) => ({
	width: '32px',
	height: '32px'
}));
export default TerminalIcon;
