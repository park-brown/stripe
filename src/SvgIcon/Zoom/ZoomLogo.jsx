import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let ZoomLogo = (props) => {
	return (
		<SvgIcon {...props} titleAccess='Zoom logo' viewBox='0 0 200 40'>
			<g fill='none' fillRule='evenodd'>
				<path
					fill='#2D8CFF'
					d='M71 10l1 .05A3.02 3.02 0 0 1 74.95 13l.05 1-12 12h9l1 .05c1.65.1 2.83 1.3 2.95 2.95l.05 1H61l-1-.05A3.06 3.06 0 0 1 57.05 27L57 26l12-12h-9l-1-.05A3.11 3.11 0 0 1 56.05 11L56 10h15zm66 0a8 8 0 0 1 8 8v12l-1-.05a3.06 3.06 0 0 1-2.95-2.95l-.05-1v-7l-.05-1a4.15 4.15 0 0 0-.47-2 4.02 4.02 0 0 0-6.93-.03c-.35.6-.45 1.28-.5 2.03l-.05 1v11l-1-.05a3.08 3.08 0 0 1-2.95-2.95l-.05-1v-7l-.05-1a4.39 4.39 0 0 0-.5-2 3.98 3.98 0 0 0-6.9 0 4.3 4.3 0 0 0-.5 2l-.05 1v7l-.05 1a3.02 3.02 0 0 1-2.95 2.95l-1 .05V10c1 0 2.75.5 3.53 1.38A8 8 0 0 1 131 12.7a8 8 0 0 1 6-2.7zm-52 0h.32a10.02 10.02 0 0 1 6.75 17.07 10.02 10.02 0 0 1-14.14 0A10.02 10.02 0 0 1 85 10zm21 0a10.02 10.02 0 0 1 7.08 17.07 10.02 10.02 0 0 1-14.16 0A10.02 10.02 0 0 1 106 10zm-16.75 5.78a5.98 5.98 0 0 0-8.47 0 5.98 5.98 0 0 0 0 8.47 5.98 5.98 0 0 0 8.47 0 6.02 6.02 0 0 0 0-8.47zm21 0a5.98 5.98 0 0 0-8.47 0 5.98 5.98 0 0 0 0 8.47 5.98 5.98 0 0 0 8.47 0 6.02 6.02 0 0 0 0-8.47z'></path>
			</g>
		</SvgIcon>
	);
};

ZoomLogo = styled(ZoomLogo, { name: 'Zoom-logo' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '160px',
		height: '40px',
		margin: 0
	},
	[theme.breakpoints.up('laptop')]: {
		width: '200px'
	}
}));
export default ZoomLogo;
