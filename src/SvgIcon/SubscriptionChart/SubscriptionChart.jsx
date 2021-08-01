import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let SubscriptionChart = (props) => {
	return (
		<SvgIcon {...props} titleAccess='subscription chart' viewBox='0 0 32 68'>
			<path fill='#515de1' d='M2 0h4a2 2 0 0 1 2 2v66H0V2C0 .9.9 0 2 0z'></path>
			<path fill='#0CF' d='M14 23h4a2 2 0 0 1 2 2v43h-8V25c0-1.1.9-2 2-2z'></path>
			<path fill='#00D924' d='M26 45h4a2 2 0 0 1 2 2v21h-8V47c0-1.1.9-2 2-2z'></path>
		</SvgIcon>
	);
};

SubscriptionChart = styled(SubscriptionChart, { name: 'subscription-chart' })(({ theme }) => ({
	width: '32px',
	height: '68px'
}));
export default SubscriptionChart;
