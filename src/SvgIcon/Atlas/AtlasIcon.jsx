import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let AtlasIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='Atlas logo' viewBox='0 0 40 40'>
			<path
				d='M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42 8.65 17.31a2.64 2.64 0 0 1-1.65 3.73l-.17.04c-.12.03-.24.04-.36.05h-.18L20.5 35.99 9.94 18.19l8.2-16.42A2.64 2.64 0 0 1 20.52.3z'
				fill='#ffee58'></path>
			<path
				d='M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42L20.5 35.98 3.65 39.33a2.64 2.64 0 0 1-2.37-3.83l8.66-17.3 8.2-16.43A2.64 2.64 0 0 1 20.52.3z'
				fill='#ffee58'></path>
			<path
				d='M20.51.3c1 0 1.92.57 2.36 1.47l8.22 16.42L20.5 35.98 9.94 18.19l8.2-16.42A2.64 2.64 0 0 1 20.34.3h.18z'
				fill='#fbc02d'></path>
		</SvgIcon>
	);
};

AtlasIcon = styled(AtlasIcon, { name: 'atlas-icon' })(({ theme }) => ({
	width: '32px',
	height: '32px'
}));
export default AtlasIcon;
