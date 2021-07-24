import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let APIStatusIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='api-status logo' viewBox='0 0 16 16'>
			<path
				stroke='#88add2'
				strokeWidth='2'
				fill='#88add2'
				d='M1 8.07h2.75L6.55 2l2.8 11.2 2.8-5.09L15 8.07'
				fillRule='evenodd'
				strokeLinecap='round'
				strokeLinejoin='round'></path>
		</SvgIcon>
	);
};

APIStatusIcon = styled(APIStatusIcon, { name: 'api-status-icon' })(({ theme }) => ({
	width: '16px',
	height: '16px'
}));
export default APIStatusIcon;
