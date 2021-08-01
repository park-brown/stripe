import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let HomeIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='home' viewBox='0 0 13 11' width='13px'>
			<path
				fillRule='evenodd'
				fill='#AEB8C6'
				d='M6.52.43L2 4.23V10c0 .41.33 1 .73 1H5.4V8.2c0-.24.2-.45.44-.45h1.32c.24 0 .44.2.44.45V11h2.67c.4 0 .73-.59.73-1V4.23L6.52.43zm-.02 5.7c.53 0 .96-.44.96-.98a.96.96 0 0 0-.96-.97.96.96 0 0 0-.95.97c0 .54.43.98.95.98z'></path>
			<path
				fill='#525F7F'
				d='M6.5.25a.33.33 0 0 0-.24.07L.62 4.65c-.14.1-.16.3-.05.42l.6.7c.1.12.3.14.44.04L6.5 2.06l4.89 3.75c.13.1.34.08.45-.05l.59-.69a.29.29 0 0 0-.05-.42L6.74.32A.33.33 0 0 0 6.5.25z'></path>
		</SvgIcon>
	);
};

HomeIcon = styled(HomeIcon, { name: 'home-icon' })(({ theme }) => ({
	width: '13px',
	height: '11px'
}));
export default HomeIcon;
