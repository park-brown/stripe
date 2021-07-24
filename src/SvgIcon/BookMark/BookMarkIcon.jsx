import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let BookMarkIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='book-mark logo' viewBox='0 0 16 16'>
			<path
				d='M4.04 2c1.91 0 3.46.9 3.46 2.55V15c-.45 0-.9-.3-1.17-.53-.86-.71-2.52-.75-4.31-.75H.83a.82.82 0 0 1-.59-.25.86.86 0 0 1-.24-.6V2.85C0 2.38.37 2 .83 2h3.2zm11.13 0c.22 0 .43.1.59.25.15.16.24.38.24.6v10.02c0 .23-.09.44-.24.6a.82.82 0 0 1-.6.25h-1.18c-1.8 0-3.45.04-4.3.75-.28.23-.73.53-1.18.53V4.55C8.5 2.91 10.05 2 11.96 2h3.2z'
				fill='#88add2'
				fillRule='evenodd'></path>
		</SvgIcon>
	);
};

BookMarkIcon = styled(BookMarkIcon, { name: 'book-mark-icon' })(({ theme }) => ({
	width: '16px',
	height: '16px'
}));
export default BookMarkIcon;
