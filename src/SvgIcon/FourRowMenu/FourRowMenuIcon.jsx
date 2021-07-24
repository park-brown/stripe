import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let FourRowMenuIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='four-row-menu logo' viewBox='0 0 16 16'>
			<path
				d='M1 14.5h14m-14-4h14m-14-4h14m-14-4h14'
				stroke='#88add2'
				stroke-width='2'
				fill='rgb(136, 173, 210)'
				fillRule='evenodd'
				stroke-linecap='round'
				stroke-linejoin='round'></path>
		</SvgIcon>
	);
};

FourRowMenuIcon = styled(FourRowMenuIcon, { name: 'four-row-menu-icon' })(({ theme }) => ({
	width: '16px',
	height: '16px'
}));
export default FourRowMenuIcon;
