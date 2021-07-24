import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let SupportIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='support logo' viewBox='0 0 16 16'>
			<path
				fill='rgb(136, 173, 210)'
				d='M8.9 13.48a5.35 5.35 0 0 1-6.19.5l-2.48.82c-.18.06-.27-.03-.21-.2l.83-2.5A5.37 5.37 0 0 1 5.16 4a6.21 6.21 0 0 0 3.74 9.48z'></path>
			<path
				fill='rgb(136, 173, 210)'
				d='M14.98 10.12a5.37 5.37 0 1 0-1.86 1.86l2.48.83c.18.06.27-.03.21-.2l-.83-2.5z'></path>
		</SvgIcon>
	);
};

SupportIcon = styled(SupportIcon, { name: 'support-icon' })(({ theme }) => ({
	width: '16px',
	height: '16px',
	'& path': {
		stroke: 'none !important'
	}
}));
export default SupportIcon;
