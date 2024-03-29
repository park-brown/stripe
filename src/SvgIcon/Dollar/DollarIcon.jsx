import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let DollarIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='dollar icon' viewBox='0 0 16 16'>
			<path
				d='M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm.17-10.25c.71 0 1.62.26 2.34.65V4.18a6.28 6.28 0 0 0-2.34-.47c-1.9 0-3.21 1-3.21 2.66 0 2.61 3.58 2.19 3.58 3.3 0 .44-.35.59-.88.59-.78 0-1.76-.35-2.55-.78v2.25c.88.37 1.74.56 2.55.56 1.96 0 3.28-.97 3.28-2.67 0-2.8-3.6-2.3-3.6-3.36 0-.36.33-.5.83-.5z'
				fill='#88add2'
				fillRule='nonzero'></path>
		</SvgIcon>
	);
};

DollarIcon = styled(DollarIcon, { name: 'dollar-icon' })(({ theme }) => ({
	width: '16px',
	height: '16px'
}));
export default DollarIcon;
