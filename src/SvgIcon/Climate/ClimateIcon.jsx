import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let ClimateIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='Climate logo' viewBox='0 0 40 40'>
			<path
				d='M33.24 21.09c-4.28 0-9.09-2.96-13.24-5.81-4.4-3.04-9.24-7.05-13.24-7.05C2.68 8.23 0 11.96 0 15.28v.28a20 20 0 1 0 40 0c-.13 2.68-2.03 5.53-6.76 5.53z'
				fill='#ffff00
       '></path>
			<path
				d='M33.24 8.24c-4 0-8.84 4-13.24 7.04-4.15 2.85-8.96 5.8-13.24 5.8-4.73 0-6.63-2.84-6.76-5.52a20 20 0 1 0 40 0v-.28c0-3.32-2.67-7.05-6.76-7.04z'
				fill='#00c853'></path>
			<path
				d='M20 15.28c4.15 2.85 8.96 5.8 13.24 5.8 4.73 0 6.63-2.84 6.76-5.52a20 20 0 1 1-40 0c.13 2.68 2.03 5.53 6.76 5.53 4.28 0 9.09-2.96 13.24-5.81z'
				fill='#00e676'></path>
		</SvgIcon>
	);
};

ClimateIcon = styled(ClimateIcon, { name: 'Climate-icon' })(({ theme }) => ({
	width: '32px',
	height: '32px'
}));
export default ClimateIcon;
