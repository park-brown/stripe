import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let ReportIconXs = (props) => {
	return (
		<SvgIcon {...props} titleAccess='report icon xs' width='13' height='12' viewBox='0 0 13 12'>
			<path
				fill='#AEB8C6'
				d='M2 7h.5a1 1 0 1 0 0-2H2V4h.5a1 1 0 1 0 0-2H2c0-1.1.9-2 2-2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2h.5a1 1 0 1 0 0-2H2V7z'></path>
			<path
				fill='#525F7F'
				d='M1.5 2H2v2h-.5a1 1 0 1 1 0-2zm0 3H2v2h-.5a1 1 0 1 1 0-2zm0 3H2v2h-.5a1 1 0 1 1 0-2z'></path>
			<rect width='1' height='2' x='5' y='8' fill='#525F7F' rx='.5'></rect>
			<rect width='1' height='4' x='7' y='6' fill='#525F7F' rx='.5'></rect>
			<rect width='1' height='7' x='9' y='3' fill='#525F7F' rx='.5'></rect>
		</SvgIcon>
	);
};

ReportIconXs = styled(ReportIconXs, { name: 'report-icon-xs' })(({ theme }) => ({
	width: '13px',
	height: '12px'
}));
export default ReportIconXs;
