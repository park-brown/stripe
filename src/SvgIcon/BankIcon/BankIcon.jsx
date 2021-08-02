import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let BankIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='bank' width='17' height='14' viewBox='0 0 17 14'>
			<path
				fill='#CFD7DF'
				d='M8.84.19l6.3 3.5A.7.7 0 0 1 14.8 5H2.2a.7.7 0 0 1-.34-1.31l6.3-3.5a.7.7 0 0 1 .68 0zM2.58 12h11.84c.05 0 .1.02.14.06l1.6 1.6a.2.2 0 0 1-.14.34H.98a.2.2 0 0 1-.14-.34l1.6-1.6a.2.2 0 0 1 .14-.06zm.92-6h2c.28 0 .5.22.5.5v5H3v-5c0-.28.22-.5.5-.5zm4 0h2c.28 0 .5.22.5.5v5H7v-5c0-.28.22-.5.5-.5zm4 0h2c.28 0 .5.22.5.5v5h-3v-5c0-.28.22-.5.5-.5z'></path>
		</SvgIcon>
	);
};

BankIcon = styled(BankIcon, { name: 'bank-icon' })(({ theme, gridArea }) => ({
	width: '17px',
	height: '14px',
	margin: '0 7px 0 6px'
}));
export default BankIcon;
