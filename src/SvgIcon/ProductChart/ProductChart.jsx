import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let ProductChart = (props) => {
	return (
		<SvgIcon {...props} titleAccess='Product chart' width='32' height='23' viewBox='0 0 32 23'>
			<path fill='#515de1' d='M2 0h4a2 2 0 0 1 2 2v21H0V2C0 .9.9 0 2 0z'></path>
			<path fill='#0CF' d='M14 11h4a2 2 0 0 1 2 2v10h-8V13c0-1.1.9-2 2-2z'></path>
			<path fill='#00D924' d='M26 17h4a2 2 0 0 1 2 2v4h-8v-4c0-1.1.9-2 2-2z'></path>
		</SvgIcon>
	);
};

ProductChart = styled(ProductChart, { name: 'product-chart' })(({ theme }) => ({
	width: '32px',
	height: '23px'
}));
export default ProductChart;
