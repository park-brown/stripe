import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let PaymentIconXs = (props) => {
	return (
		<SvgIcon {...props} titleAccess='Payment' viewBox='0 0 13 9' width='13'>
			<g fillRule='evenodd'>
				<path
					fill='#AEB8C6'
					d='M9 0a1 1 0 0 1 1 1v2H6.5a1.5 1.5 0 0 0-3 0v.13A1 1 0 0 0 3 4v2H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h8z'></path>
				<path
					fill='#525F7F'
					d='M12 3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8zM8 4.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z'></path>
			</g>
		</SvgIcon>
	);
};

PaymentIconXs = styled(PaymentIconXs, { name: 'payment-icon-xs' })(({ theme }) => ({
	width: '13px',
	height: '9px'
}));
export default PaymentIconXs;
