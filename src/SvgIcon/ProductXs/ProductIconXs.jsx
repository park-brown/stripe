import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let ProductIconXs = (props) => {
	return (
		<SvgIcon {...props} titleAccess='Product icon xs' width='13' height='11' viewBox='0 0 13 11'>
			<path
				fill='#525F7F'
				d='M5.51 11V4.87l5.24-2.44a.9.9 0 0 1 .25.55v5.25c0 .28-.32.53-.58.65L5.9 10.94c-.1.04-.4.06-.4.06zM8.8 1.4L7.2.7 1.77 3.15a.35.35 0 0 0-.2.31v1.51l1.58.77V4.18c0-.13.08-.25.2-.31L8.8 1.4z'></path>
			<path
				fill='#AEB8C6'
				d='M5.51 4.87V11s-.43.01-.56-.04L.42 8.91A.7.7 0 0 1 0 8.27V2.85a.7.7 0 0 1 .42-.64L5.22.07c.2-.1.42-.1.61 0l1.38.62-5.44 2.46a.35.35 0 0 0-.2.31v1.51l1.58.77V4.18c0-.13.08-.25.2-.31L8.8 1.4l1.57.71c.14.07.27.2.4.32L5.5 4.87z'></path>
		</SvgIcon>
	);
};

ProductIconXs = styled(ProductIconXs, { name: 'product-icon-xs' })(({ theme }) => ({
	width: '13px',
	height: '11px'
}));
export default ProductIconXs;
