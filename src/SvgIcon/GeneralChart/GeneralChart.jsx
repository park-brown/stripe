import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let GeneralChart = (props) => {
	return (
		<SvgIcon {...props} titleAccess='general chart' width='32' height='45' viewBox='0 0 32 45'>
			<path fill='#515de1' d='M2 0h4a2 2 0 0 1 2 2v43H0V2C0 .9.9 0 2 0z'></path>
			<path fill='#0CF' d='M14 12h4a2 2 0 0 1 2 2v31h-8V14c0-1.1.9-2 2-2z'></path>
			<path fill='#00D924' d='M26 32h4a2 2 0 0 1 2 2v11h-8V34c0-1.1.9-2 2-2z'></path>
		</SvgIcon>
	);
};

GeneralChart = styled(GeneralChart, { name: 'general-chart' })(({ theme }) => ({
	width: '32px',
	height: '45px',
	margin: 0
}));
export default GeneralChart;
