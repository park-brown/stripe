import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let VisaPlusIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='visa-plus logo' viewBox='0 0 17 12'>
			<rect width='17' height='12' fill='#0A2540' rx='2'></rect>
			<circle cx='6' cy='6' r='3.6' fill='#ED0006'></circle>
			<circle cx='10.8' cy='6' r='3.6' fill='#F9A000'></circle>
			<path fill='#FF5D00' d='M8.4 3.32a3.6 3.6 0 0 1 0 5.36 3.58 3.58 0 0 1-.08-5.29z'></path>
		</SvgIcon>
	);
};

VisaPlusIcon = styled(VisaPlusIcon, { name: 'visa-plus-card' })(({ theme }) => ({
	width: '17px',
	height: '12px',
	borderRadius: '4px',
	boxShadow: '0 3px 6px -1px rgb(50 50 93 / 25%), 0 1px 3px 0 rgb(0 0 0 / 20%)'
}));
export default VisaPlusIcon;
