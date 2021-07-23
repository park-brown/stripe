import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let SaasIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='Saas icon' viewBox='0 0 16 16'>
			<path
				d='M1.88 0h11.25C14.15 0 15 .84 15 1.88v11.25c0 1.03-.84 1.87-1.88 1.87H1.88A1.88 1.88 0 0 1 0 13.12V1.88C0 .83.84 0 1.88 0zm8.97 4.22h.63a.7.7 0 0 0 0-1.4H8.2a.7.7 0 0 0-.7.7v2.34a.7.7 0 0 0 1.4 0V4.53a3.28 3.28 0 0 1 .47 5.66v1.6a4.69 4.69 0 0 0 1.48-7.57zm-6.7 6.64h-.63a.7.7 0 0 0 0 1.4H6.8a.7.7 0 0 0 .7-.7V9.22a.7.7 0 0 0-1.4 0v1.32a3.28 3.28 0 0 1-.47-5.65v-1.6a4.69 4.69 0 0 0-1.48 7.57z'
				fill='#88add2'
				fillRule='evenodd'></path>
		</SvgIcon>
	);
};

SaasIcon = styled(SaasIcon, { name: 'Saas-icon' })(({ theme }) => ({
	width: '16px',
	height: '16px'
}));
export default SaasIcon;
