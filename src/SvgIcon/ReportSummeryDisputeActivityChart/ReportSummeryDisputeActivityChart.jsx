import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let ReportSummeryDisputeActivityChart = (props) => {
	return (
		<SvgIcon {...props} titleAccess='dispute activity' viewBox='0 0 202 44'>
			<g fill='none'>
				<path
					stroke='#C5CFD9'
					strokeWidth='1.2'
					d='M1 42h12L25 9l11-7 12 33 13 7h12l12-9 11-3h12l12 11 12-12 13-21'></path>
				<path stroke='#515de1' strokeWidth='1.2' d='M1 42h60l12-7 12-5 11.5 11H108l12-11h12l13-23'></path>
			</g>
			<circle cx='145' cy='7' r='3' fill='#515de1'></circle>
		</SvgIcon>
	);
};

ReportSummeryDisputeActivityChart = styled(ReportSummeryDisputeActivityChart, { name: 'dispute-activity' })(
	({ theme }) => ({
		width: '202px',
		height: '44px'
	})
);
export default ReportSummeryDisputeActivityChart;
