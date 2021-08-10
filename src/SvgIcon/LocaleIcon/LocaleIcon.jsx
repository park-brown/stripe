import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let LocaleIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='LocaleIcon' viewBox='0 0 16 16' width='16' height='16'>
			<path
				d='M3.54 8.04h4.42v4.43c0 .57.76.75 1.01.24l4.96-9.93a.54.54 0 0 0-.72-.72L3.3 7.03c-.5.25-.33 1.01.24 1.01'
				fill='#0A2540'
				fillRule='evenodd'></path>
		</SvgIcon>
	);
};

LocaleIcon = styled(LocaleIcon, { name: 'Locale-Icon' })(({ theme }) => ({
	width: '16px',
	height: '16px'
}));
export default LocaleIcon;
