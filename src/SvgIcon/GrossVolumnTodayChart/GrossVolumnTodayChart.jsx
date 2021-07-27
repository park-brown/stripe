import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let GrossVolumnTodayChart = (props) => {
	return (
		<SvgIcon {...props} titleAccess='gross volumn today' viewBox='0 0 438 73'>
			<g fill='none'>
				<polyline
					stroke='#C5CFD9'
					strokeWidth='1.2'
					points='1 71.5 24.333 68.5 48.667 66.5 73 65.5 97.333 61.5 121.667 60.5 146 56.5 170.333 53.5 194.667 48.5 219 43.5 243.333 37.5 267.667 32.5 292 25.5 316.333 20 340.667 16 365 11 389.333 8 413.667 4 437 1'></polyline>
				<circle cx='292' cy='18.5' r='3' fill='#515de1'></circle>
				<polyline
					stroke='#515de1'
					strokeWidth='1.2'
					points='1 71.5 24.333 67.5 48.667 66.5 73 64.5 97.333 61.5 121.667 60.5 146 55.5 170.333 52.5 194.667 44.5 219 36.5 243.333 29.5 267.667 23.5 292 18.5'></polyline>
			</g>
		</SvgIcon>
	);
};

GrossVolumnTodayChart = styled(GrossVolumnTodayChart, { name: 'gross-volumn-today' })(({ theme }) => ({
	width: '438px',
	height: '73px',
	margin: '45px 0 1px 0'
}));
export default GrossVolumnTodayChart;
