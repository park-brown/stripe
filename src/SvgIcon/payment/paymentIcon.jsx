import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let PaymentIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='SPayments logo' viewBox='0 0 40 40'>
			<title>Payments logo</title>
			<path
				d='M34.61 11.28a2.56 2.56 0 0 0-1.22-1.04L8.54.2A2.57 2.57 0 0 0 5 2.6V15c0 1.05.64 2 1.61 2.4l6.44 2.6 21.56 8.72c.26-.4.4-.88.39-1.36V12.64c0-.48-.13-.96-.39-1.37z'
				fill='#4dd0e1'></path>
			<path
				d='M34.63 11.28L13.06 20l-6.45 2.6A2.58 2.58 0 0 0 5 25v12.42a2.58 2.58 0 0 0 3.54 2.39L33.4 29.76c.5-.21.93-.57 1.21-1.04.26-.41.4-.88.39-1.36V12.64c0-.48-.12-.95-.37-1.36z'
				fill='rgb(153, 102, 255)'></path>
			<path
				d='M34.62 11.28l.1.17c.18.37.28.77.28 1.19v-.03 14.75c0 .48-.13.95-.39 1.36L13.06 20l21.56-8.72z'
				fill='#155fa0'></path>
		</SvgIcon>
	);
};

PaymentIcon = styled(PaymentIcon, { name: 'payment-icon' })(({ theme }) => ({
	width: '32px',
	height: '32px'
}));
export default PaymentIcon;
