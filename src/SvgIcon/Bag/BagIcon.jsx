import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let BagIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='bag icon' viewBox='0 0 16 16'>
			<path
				d='M10.5 3.5a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1V4H4v-.5A2.5 2.5 0 0 1 6.5 1h3A2.5 2.5 0 0 1 12 3.5V4h2.5c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-8C0 4.67.67 4 1.5 4h9v-.5z'
				fill='#88add2'
				fillRule='nonzero'></path>
		</SvgIcon>
	);
};

BagIcon = styled(BagIcon, { name: 'bag-icon' })(({ theme }) => ({
	width: '16px',
	height: '16px'
}));
export default BagIcon;
