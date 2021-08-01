import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let BlueRect = (props) => {
	return (
		<SvgIcon {...props} titleAccess='blue rect' width='14' height='11' viewBox='0 0 14 11'>
			<rect width='6' height='6' x='1' y='4' fill='#515de1' rx='1'></rect>
		</SvgIcon>
	);
};

BlueRect = styled(BlueRect, { name: 'blue rect' })(({ theme }) => ({
	width: '14px',
	height: '11px'
}));
export default BlueRect;
