import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let PricingIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='pricing icon' viewBox='0 0 16 16'>
			<path
				d='M7.68.59l8.03 8.04a1 1 0 0 1 0 1.42l-5.68 5.66a1 1 0 0 1-1.42 0L.58 7.66A1.99 1.99 0 0 1 0 6.26V2C0 .9.9 0 2 0h4.27a2 2 0 0 1 1.41.59zM3.5 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z'
				fill='#88add2'
				fillRule='nonzero'></path>
		</SvgIcon>
	);
};

PricingIcon = styled(PricingIcon, { name: 'pricing-icon' })(({ theme }) => ({
	width: '16px',
	height: '16px'
}));
export default PricingIcon;
