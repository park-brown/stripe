import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let PartnersIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='partners icon' viewBox='0 0 16 16'>
			<path
				d='M15.8 1.96c.12.17.19.37.2.58v8.52c-.02.42-.26.8-.64.97l-6.9 3.2c-.3.13-.63.13-.92 0l-6.9-3.2a1.1 1.1 0 0 1-.64-.97V2.54c0-.2.07-.41.2-.58L8 5.56l7.8-3.6zM4.37 0C4.75.82 6.23 1.43 8 1.43c1.77 0 3.24-.61 3.63-1.43h.1v1.23c0 1.01-1.67 1.84-3.73 1.84-2.07 0-3.74-.83-3.74-1.84V0h.1z'
				fill='#88add2'
				fillRule='nonzero'></path>
		</SvgIcon>
	);
};

PartnersIcon = styled(PartnersIcon, { name: 'partners-icon' })(({ theme }) => ({
	width: '16px',
	height: '16px'
}));
export default PartnersIcon;
