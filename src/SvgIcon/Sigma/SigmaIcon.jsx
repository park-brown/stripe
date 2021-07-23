import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let SigmaIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='Sigma logo' viewBox='0 0 40 40'>
			<path d='M5 35V7a3 3 0 0 1 5.48-1.69L21.2 21 9.32 38H8a3 3 0 0 1-3-3z' fill='#8e24aa'></path>
			<path d='M8.06 4h25.16a1.5 1.5 0 0 1 1.1 2.51L21.15 21 5.84 4.92A3 3 0 0 1 8.05 4z' fill='#e91e63'></path>
			<path d='M7.88 38H33.2a1.5 1.5 0 0 0 1.11-2.51L21.11 21 7.14 36.33A1 1 0 0 0 7.88 38z' fill='#9A66FF'></path>
		</SvgIcon>
	);
};

SigmaIcon = styled(SigmaIcon, { name: 'sigma-icon' })(({ theme }) => ({
	width: '32px',
	height: '32px'
}));
export default SigmaIcon;
