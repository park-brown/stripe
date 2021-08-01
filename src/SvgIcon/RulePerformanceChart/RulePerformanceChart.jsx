import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let RulePerformanceChart = (props) => {
	return (
		<SvgIcon {...props} titleAccess='RulePerformance Chart' width='319' height='68' viewBox='0 0 319 68'>
			<g fill='none'>
				<polyline
					stroke='#0CF'
					strokeWidth='1.2'
					points='0 27.5 26.5 34.5 53 28.5 79.5 29.5 106 24.5 132.5 29.5 159 21.5 185.5 12.5 212 21.5 238.5 18.5 265 21.5 291.5 26.5 319 38.5'></polyline>
				<polyline
					stroke='#00D924'
					strokeWidth='1.2'
					points='0 65.5 26.5 65.5 53 66.5 79.5 64.5 106 62.5 132.5 63.5 159 57.5 185.5 59.5 212 55.5 238.5 53.5 265 58.5 291.5 59.5 319 55.5'></polyline>
				<polyline
					stroke='#515de1'
					strokeWidth='1.2'
					points='0 7.5 26.5 1.5 53 18.5 79.5 6.5 106 14.5 132.5 4.5 159 11.5 185.5 16.5 212 12.5 238.5 23.5 265 17.5 291.5 9.5 319 28.5'></polyline>
				<polygon fill='#FFF' stroke='#515de1' strokeWidth='1.2' points='51 19 53.5 15 56 19'></polygon>
				<polygon fill='#FFF' stroke='#515de1' strokeWidth='1.2' points='77 9 79.5 5 82 9'></polygon>
				<polygon fill='#FFF' stroke='#00CCFF' strokeWidth='1.2' points='130 30.5 132.5 26.5 135 30.5'></polygon>
				<polygon fill='#FFF' stroke='#00D924' strokeWidth='1.2' points='130 64.5 132.5 60.5 135 64.5'></polygon>
				<polygon fill='#FFF' stroke='#515de1' strokeWidth='1.2' points='236 25 238.5 21 241 25'></polygon>
			</g>
		</SvgIcon>
	);
};

RulePerformanceChart = styled(RulePerformanceChart, { name: 'RulePerformance-Chart' })(({ theme }) => ({
	width: '319px',
	height: '68px',
	position: 'absolute',
	bottom: 0
}));
export default RulePerformanceChart;
