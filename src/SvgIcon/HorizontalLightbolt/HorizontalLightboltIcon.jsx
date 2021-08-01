import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let HorizontalLightBoltIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='lightbolt' width='14' height='11' viewBox='0 0 14 11'>
			<polyline fill='none' stroke='#515de1' strokeWidth='1.4' points='1 9 3.5 6.5 5.5 8.5 8.5 5.5'></polyline>
		</SvgIcon>
	);
};

HorizontalLightBoltIcon = styled(HorizontalLightBoltIcon, { name: 'lightbolt-icon' })(({ theme }) => ({
	width: '14px',
	height: '11px'
}));
export default HorizontalLightBoltIcon;
