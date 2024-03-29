import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let MarketPlaceIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='market-place icon' viewBox='0 0 16 16'>
			<path
				d='M13.57 7.65c-.71 0-1.4-.27-1.94-.74-.52.46-1.2.74-1.93.74s-1.42-.27-1.94-.74c-.54.46-1.23.74-1.94.74-.74 0-1.43-.27-1.95-.74a3.02 3.02 0 0 1-2.86.59 1.86 1.86 0 0 1-.49-.21v7.17c0 .32.28.6.6.6h7.55V9.8c0-.11.1-.2.2-.2h3.14c.11 0 .2.1.2.2v5.26h2.15c.33 0 .6-.28.6-.6V7.29c-.14.1-.3.16-.49.2-.27.1-.58.16-.9.16zM6.83 11.7c0 .12-.1.2-.2.2H3.51a.2.2 0 0 1-.2-.2v-1.9c0-.12.1-.2.2-.2h3.1c.12 0 .2.1.2.2v1.9h.02zM15.14 3.38L13.04.42c-.2-.26-.5-.42-.82-.42h-8.9a1 1 0 0 0-.82.42L.38 3.38c-.25.34-.38.77-.38 1.2 0 .86.5 1.7 1.32 1.94.92.28 1.78-.1 2.24-.79.15-.22.47-.22.64 0 .34.53.95.89 1.62.89a1.9 1.9 0 0 0 1.61-.89c.15-.22.48-.22.64 0 .34.53.95.89 1.62.89a1.9 1.9 0 0 0 1.61-.89c.15-.22.48-.22.64 0 .44.69 1.3 1.07 2.24.79.82-.25 1.32-1.1 1.32-1.95.02-.42-.11-.83-.36-1.19z'
				fill='#88add2'
				fillRule='evenodd'></path>
		</SvgIcon>
	);
};

MarketPlaceIcon = styled(MarketPlaceIcon, { name: 'market-place-icon' })(({ theme }) => ({
	width: '16px',
	height: '16px'
}));
export default MarketPlaceIcon;
