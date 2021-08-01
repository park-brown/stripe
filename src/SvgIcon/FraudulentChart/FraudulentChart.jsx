import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let FraudChart = (props) => {
	return (
		<SvgIcon {...props} titleAccess='fraudulent chart' width='32' height='73' viewBox='0 0 32 73'>
			<path fill='#515de1' d='M2 0h4a2 2 0 0 1 2 2v71H0V2C0 .9.9 0 2 0z'></path>
			<path fill='#0CF' d='M14 0h4a2 2 0 0 1 2 2v71h-8V2c0-1.1.9-2 2-2z'></path>
			<path fill='#00D924' d='M26 19h4a2 2 0 0 1 2 2v52h-8V21c0-1.1.9-2 2-2z'></path>
		</SvgIcon>
	);
};

FraudChart = styled(FraudChart, { name: 'fraudulent-chart' })(({ theme }) => ({
	width: '32px',
	height: '73px',
	margin: 0
}));
export default FraudChart;
