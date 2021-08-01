import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let DevelopersIconXs = (props) => {
	return (
		<SvgIcon {...props} titleAccess='developers icon xs' width='13' height='9' viewBox='0 0 13 9'>
			<path
				fill='#525F7F'
				d='M12 0a1 1 0 0 1 1 1v6H0V1a1 1 0 0 1 1-1h11zM2.76 1.07l-.52.86L4.03 3 2.24 4.07l.52.86L5.5 3 2.76 1.07z'></path>
			<path fill='#AEB8C6' d='M0 7h13v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7z'></path>
		</SvgIcon>
	);
};

DevelopersIconXs = styled(DevelopersIconXs, { name: 'developers-icon-xs' })(({ theme }) => ({
	width: '13px',
	height: '9px'
}));
export default DevelopersIconXs;
