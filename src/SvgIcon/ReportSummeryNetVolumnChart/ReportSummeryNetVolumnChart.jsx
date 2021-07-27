import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let ReportSummeryNetVolumnChart = (props) => {
	return (
		<SvgIcon {...props} titleAccess='net volumn july to august' viewBox='0 0 202 44'>
			<g fill='none'>
				<path
					stroke='#C5CFD9'
					strokeWidth='1.2'
					d='M1 14.1L8 17l12 6h11l12 4 13 2 12-2 12 3 11-9 12 16h12l12 4 13 1 11-1 11.5-7 12.5 2 12-9 11-7'></path>
				<path
					stroke='#515de1'
					strokeWidth='1.2'
					d='M1 20h7l12 7 11 1 12 3 13 3 12 1 12 6 11-4 12 4 12-2 12-4 13-2 11 4 11.5 5L175 31l12-11 11-9'></path>
			</g>
			<circle cx='198' cy='11' r='3' fill='#515de1'></circle>
		</SvgIcon>
	);
};

ReportSummeryNetVolumnChart = styled(ReportSummeryNetVolumnChart, { name: 'net-volumn-july-to-august' })(
	({ theme }) => ({
		width: '202px',
		height: '44px'
	})
);
export default ReportSummeryNetVolumnChart;
