import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let CustomerIconXs = (props) => {
	return (
		<SvgIcon {...props} titleAccess='customer icon xs' width='13' height='13' viewBox='0 0 13 13'>
			<path fill='#AEB8C6' d='M10.96 10.52a5.98 5.98 0 0 1-8.92 0C2.57 9.53 4.37 8.8 6.5 8.8s3.93.72 4.46 1.7z'></path>
			<path
				fill='#525F7F'
				fillRule='evenodd'
				d='M10.58 10.9A5.98 5.98 0 0 0 6.5.5a6 6 0 0 0-4.08 10.4c.77-.74 2.3-1.24 4.08-1.24 1.77 0 3.31.5 4.08 1.24zM6.5 7.42a2.3 2.3 0 1 0 0-4.61 2.3 2.3 0 0 0 0 4.61z'></path>
		</SvgIcon>
	);
};

CustomerIconXs = styled(CustomerIconXs, { name: 'customer-icon-xs' })(({ theme }) => ({
	width: '13px',
	height: '13px'
}));
export default CustomerIconXs;
