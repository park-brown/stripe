import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let BillingIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='Billing logo' viewBox='0 0 40 40'>
			<path
				d='M26 2.46C26 1.1 24.9 0 23.53 0H2.47A2.47 2.47 0 0 0 0 2.46v30.08a2.46 2.46 0 0 0 3.47 2.25l10.2-4.53 10.86-4.83c.9-.4 1.47-1.27 1.47-2.25V2.46z'
				fill='
        #ffee58'></path>
			<path d='M26.5 39a13.5 13.5 0 1 0 0-27 13.5 13.5 0 0 0 0 27z' fill='#00D924'></path>
			<path d='M26 12v11.18c0 .98-.57 1.86-1.47 2.25l-10.7 4.76A13.5 13.5 0 0 1 26 12z' fill='#afb42b'></path>
		</SvgIcon>
	);
};

BillingIcon = styled(BillingIcon, { name: 'billing-icon' })(({ theme }) => ({
	width: '32px',
	height: '32px'
}));
export default BillingIcon;
