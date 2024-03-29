import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let LanguageIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='LanguageIcon' viewBox='0 0 16 16' width='16' height='16'>
			<path
				d='M7.5 2C10.91 2 13 4.01 13 6.5c0 2.07-1.45 3.82-3.92 4.34L6.62 13.3a.66.66 0 0 1-1.12-.46v-2.1C3.29 10.12 2 8.45 2 6.5 2 4.01 4.09 2 7.5 2z'
				fill='#0A2540'></path>
		</SvgIcon>
	);
};

LanguageIcon = styled(LanguageIcon, { name: 'Language-Icon' })(({ theme }) => ({
	width: '16px',
	height: '16px'
}));
export default LanguageIcon;
