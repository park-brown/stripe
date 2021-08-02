import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let CardIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='card' width='16' height='12' viewBox='0 0 16 12'>
			<path d='M13.44 0c.89 0 1.21.1 1.54.27.32.17.58.43.75.75.18.33.27.65.27 1.54v6.88c0 .89-.1 1.21-.27 1.54a1.8 1.8 0 0 1-.75.75c-.33.18-.65.27-1.54.27H2.56c-.89 0-1.21-.1-1.54-.27a1.82 1.82 0 0 1-.75-.75C.09 10.65 0 10.33 0 9.44V2.56c0-.89.1-1.21.27-1.54C.44.7.7.44 1.02.27 1.35.09 1.67 0 2.56 0h10.88zm.16 2H2.4a.4.4 0 0 0-.4.4v1.2c0 .22.18.4.4.4h11.2a.4.4 0 0 0 .4-.4V2.4a.4.4 0 0 0-.4-.4z'></path>
		</SvgIcon>
	);
};

CardIcon = styled(CardIcon, { name: 'card-icon' })(({ theme, gridArea }) => ({
	width: '16px',
	height: '12px',
	margin: '0 7px 0 6px'
}));
export default CardIcon;
