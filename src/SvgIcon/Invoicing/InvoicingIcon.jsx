import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let InvoicingIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='invoicing logo' viewBox='0 0 40 40'>
			<title>Invoicing</title>
			<path
				d='M12.5001 1C11.1194 1 10.0001 2.11929 10.0001 3.5V36.3314C10.0001 37.4628 9.24028 38.4532 8.14746 38.7462L36.1472 31.24C37.2401 30.9472 38.0001 29.9567 38.0001 28.8252V3.5C38.0001 2.11929 36.8808 1 35.5001 1H12.5001Z'
				fill='#00D924'></path>
			<path
				d='M1.25338 24.5476C0.0575759 25.238 -0.352092 26.7668 0.338338 27.9626L5.81522 37.449C6.38097 38.4289 7.53438 38.9067 8.62734 38.6138L34.7744 31.6076L24.5869 13.9626C23.8969 12.7668 22.3676 12.3571 21.1718 13.0476L1.25338 24.5476Z'
				fill='#ffeb3b'></path>
			<path
				d='M8.40173 38.6633C8.4771 38.6504 8.55237 38.6339 8.62737 38.6138L34.7744 31.6076L24.5869 13.9626C23.897 12.7668 22.3677 12.3571 21.1719 13.0476L10.0002 19.4976V36.3314C10.0002 37.3728 9.35638 38.2947 8.40173 38.6633Z'
				fill='#afb42b'></path>
		</SvgIcon>
	);
};

InvoicingIcon = styled(InvoicingIcon, { name: 'invoicing-icon' })(({ theme }) => ({
	width: '32px',
	height: '32px'
}));
export default InvoicingIcon;
