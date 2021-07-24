import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let NewsRoomIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='newsroom icon' viewBox='0 0 16 16'>
			<path
				d='M0 13V5a1 1 0 0 1 1-1h1v9a.5.5 0 1 0 1 0V3a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v9a3 3 0 0 1-3 3H2a2 2 0 0 1-2-2zm14-3H5v1h9v-1zm0-6h-4v4h4V4zM8 7H5v1h3V7zm0-3H5v1h3V4z'
				fill='#88add2'
				fillRule='nonzero'></path>
		</SvgIcon>
	);
};

NewsRoomIcon = styled(NewsRoomIcon, { name: 'newsroom-icon' })(({ theme }) => ({
	width: '16px',
	height: '16px'
}));
export default NewsRoomIcon;
