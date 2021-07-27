import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let ReportSummeryGrossVolumnChart = (props) => {
	return (
		<SvgIcon {...props} titleAccess='gross volumn july to august' viewBox='0 0 202 44'>
			<g fill='none'>
				<path
					stroke='#C5CFD9'
					strokeWidth='1.2'
					d='M1 8.08L8 11l12 6 11 1 12 1 13 7 12-5 12 2 11-9 12 17h12l12 2 13 1 11 3 11.5-10 12.5 1 12-7 11-9'></path>
				<path
					stroke='#515de1'
					strokeWidth='1.2'
					d='M1 14h7l12 7 11 4 12 2 13 2h12l12 5 11.5-6 11.5 7 12-5 12-2 13-2 11 5 11.5 4H175l12-1 11-16'></path>
			</g>
			<circle cx='198' cy='18' r='3' fill='#515de1'></circle>
		</SvgIcon>
	);
};

ReportSummeryGrossVolumnChart = styled(ReportSummeryGrossVolumnChart, { name: 'gross-volumn-july-to-august' })(
	({ theme }) => ({
		width: '202px',
		height: '44px'
	})
);
export default ReportSummeryGrossVolumnChart;
