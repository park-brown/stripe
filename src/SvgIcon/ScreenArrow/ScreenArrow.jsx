import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let ScreenArrow = (props) => {
	return (
		<SvgIcon {...props} titleAccess='Saas icon' viewBox='0 0 16 9'>
			<path
				fill='#fff'
				d='M9 1l6.2 6.2a1.05 1.05 0 0 1-.74 1.8H1.54A1.05 1.05 0 0 1 .8 7.2L7 1a1.4 1.4 0 0 1 2 0z'></path>
		</SvgIcon>
	);
};

ScreenArrow = styled(ScreenArrow, { name: 'Saas-icon' })(({ theme }) => ({
	width: '16px',
	height: '9px',
	margin: '23px 0 0 57px',
	animation: `twinkle   ${theme.transitions.duration.standard * 8}ms ${theme.transitions.easing.easeInOut} infinite`,

	'@keyframes twinkle': {
		'0%': {
			opacity: 1,
			transform: 'translateY(0)'
		},
		'50%': {
			opacity: 0.4,
			transform: 'translateY(-5px)'
		},
		'100%': {
			opacity: 1,
			transform: 'translateY(0)'
		}
	}
}));
export default ScreenArrow;
