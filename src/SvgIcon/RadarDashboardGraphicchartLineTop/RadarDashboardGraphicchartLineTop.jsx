import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let RadarDashboardGraphicchartLineTop = (props) => {
	return (
		<SvgIcon {...props} titleAccess='RadarDashboardGraphicchartLineTop' viewBox='0 0 319 73'>
			<g fill='none'>
				<polyline
					stroke='#515de1'
					strokeWidth='1.2'
					points='0 1 22.2 3 43.4 6 64.6 10 85.8 14 107 12 128.2 15 149.4 16 170.6 21 191.8 24 213 22 234.2 26 238.971 28.701'></polyline>
				<path
					stroke='#515de1'
					strokeDasharray='4 2'
					strokeWidth='1.2'
					d='M239 28.71L255.4 38l21.2 9 21.2 6 20.7 19.5'></path>
			</g>
		</SvgIcon>
	);
};

RadarDashboardGraphicchartLineTop = styled(RadarDashboardGraphicchartLineTop, {
	name: 'RadarDashboardGraphicchartLineTop'
})(({ theme }) => ({
	width: '319px',
	height: '73px',
	position: 'absolute',
	bottom: 0,
	left: 0
}));
export default RadarDashboardGraphicchartLineTop;
