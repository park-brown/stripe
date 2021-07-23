import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let ConnectIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='Connect logo' viewBox='0 0 40 40'>
			<path
				d='M12.47.01a13.01 13.01 0 0 0 .5 25.99h10.55c1.37 0 2.48-1.1 2.48-2.48V13.01a12.99 12.99 0 0 0-13.53-13z'
				fill='#00e5ff'></path>
			<path
				d='M27.53 39.99a13.01 13.01 0 0 0-.5-25.99H16.48A2.48 2.48 0 0 0 14 16.48v10.51a12.99 12.99 0 0 0 13.53 13z'
				fill='#0073E6'></path>
			<path
				d='M26 14v9.52A2.48 2.48 0 0 1 23.52 26H14v-9.52A2.48 2.48 0 0 1 16.32 14l.16-.01H26z'
				fill='#3949ab'></path>
		</SvgIcon>
	);
};

ConnectIcon = styled(ConnectIcon, { name: 'connect-icon' })(({ theme }) => ({
	width: '32px',
	height: '32px'
}));
export default ConnectIcon;
