import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let RockectRidesIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='rocket-rides logo' viewBox='0 0 20 20'>
			<path
				fill='#fff'
				d='M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm3.3 6.11H4.34a.41.41 0 0 0 0 .83h8.94a2.89 2.89 0 0 1 0 5.77H7.65a.41.41 0 0 0 0 .83h5.64a3.71 3.71 0 0 0 0-7.43zm0 1.65a2.06 2.06 0 1 0 2.05 2.06c0-1.13-.92-2.06-2.06-2.06zm-2.83 3.3h-4.7a.41.41 0 0 0 0 .83h4.7a.41.41 0 0 0 0-.83zM13.3 8.6a1.24 1.24 0 1 1 0 2.47 1.24 1.24 0 0 1 0-2.47zm-3.3.8H3.41a.41.41 0 1 0 0 .83h6.6c.22 0 .4-.19.4-.42a.41.41 0 0 0-.41-.4zm.47-1.65H6.24a.41.41 0 1 0 0 .83h4.23a.41.41 0 1 0 0-.83z'></path>
		</SvgIcon>
	);
};

RockectRidesIcon = styled(RockectRidesIcon, { name: 'rocket-rides-icon' })(({ theme }) => ({
	width: '20px',
	height: '20px'
}));
export default RockectRidesIcon;
