import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let ExpressCardIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='express logo' viewBox='0 0 17 12'>
			<rect width='17' height='12' fill='#016FD0' rx='2'></rect>
			<polygon
				fill='#FFF'
				points='9.347 10.101 9.347 5.801 17 5.808 17 6.996 16.115 7.941 17 8.895 17 10.108 15.588 10.108 14.837 9.28 14.092 10.111'></polygon>
			<polygon
				fill='#016FD0'
				points='9.858 9.63 9.858 6.275 12.703 6.275 12.703 7.047 10.779 7.047 10.779 7.572 12.657 7.572 12.657 8.332 10.779 8.332 10.779 8.847 12.703 8.847 12.703 9.63'></polygon>
			<polygon
				fill='#016FD0'
				points='12.689 9.63 14.263 7.95 12.689 6.275 13.907 6.275 14.869 7.338 15.834 6.275 17 6.275 17 6.301 15.459 7.95 17 9.582 17 9.63 15.822 9.63 14.843 8.556 13.874 9.63'></polygon>
			<polygon
				fill='#FFF'
				points='9.704 1.985 11.549 1.985 12.197 3.456 12.197 1.985 14.474 1.985 14.867 3.087 15.261 1.985 17 1.985 17 6.285 7.809 6.285'></polygon>
			<path
				fill='#016FD0'
				d='M10.05 2.45L8.56 5.8H9.6l.28-.67h1.52l.28.67h1.05l-1.49-3.35h-1.18zm.13 1.93l.45-1.07.44 1.07h-.89z'></path>
			<polygon
				fill='#016FD0'
				points='12.701 5.804 12.701 2.451 14.137 2.457 14.875 4.517 15.619 2.451 17 2.451 17 5.804 16.111 5.812 16.111 3.509 15.272 5.804 14.461 5.804 13.604 3.501 13.604 5.804'></polygon>
		</SvgIcon>
	);
};

ExpressCardIcon = styled(ExpressCardIcon, { name: 'express-card' })(({ theme }) => ({
	width: '17px',
	height: '12px',
	borderRadius: '4px',
	boxShadow: '0 3px 6px -1px rgb(50 50 93 / 25%), 0 1px 3px 0 rgb(0 0 0 / 20%)'
}));
export default ExpressCardIcon;
