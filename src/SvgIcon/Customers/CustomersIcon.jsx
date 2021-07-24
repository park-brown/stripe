import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let CustomerIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='customer icon' viewBox='0 0 16 16'>
			<path
				d='M12 0a2.5 2.5 0 0 1 2.45 2H15a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2v-4h-2v4H9a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h.55A2.5 2.5 0 0 1 12 0zM3.5 4A3.5 3.5 0 0 1 7 7.5V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 3.5 4zm0 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z'
				fill='#88add2'
				fillRule='nonzero'></path>
		</SvgIcon>
	);
};

CustomerIcon = styled(CustomerIcon, { name: 'customer-icon' })(({ theme }) => ({
	width: '16px',
	height: '16px'
}));
export default CustomerIcon;
