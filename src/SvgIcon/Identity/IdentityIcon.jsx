import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let IdentityIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='identity logo' viewBox='0 0 40 40'>
			<path
				d='M13.9 5.93A3.87 3.87 0 0 1 17.54 3h19.99c1.66 0 2.72 1.31 2.38 2.93l-6.2 29.11A2.58 2.58 0 0 1 31.3 37H7.32L13.9 5.93z'
				fill='#e91e63'></path>
			<path
				d='M.1 21.93C-.24 20.31.82 19 2.48 19h19.99a3.87 3.87 0 0 1 3.62 2.93l2.79 13.11A2.58 2.58 0 0 0 31.29 37H5.31c-1.1 0-2.19-.88-2.42-1.96L.1 21.94z'
				fill='#9A66FF'></path>
			<path
				d='M31.3 37c-1.11 0-2.2-.88-2.42-1.96l-2.79-13.1A3.87 3.87 0 0 0 22.47 19H11.14L7.33 37h23.96z'
				fill='#7b1fa2'></path>
		</SvgIcon>
	);
};

IdentityIcon = styled(IdentityIcon, { name: 'identity-icon' })(({ theme }) => ({
	width: '32px',
	height: '32px'
}));
export default IdentityIcon;
