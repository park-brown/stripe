import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let AwayLogo = (props) => {
	return (
		<SvgIcon {...props} titleAccess='away logo' viewBox='0 0 74 26'>
			<path
				fill='#000'
				fillRule='nonzero'
				d='M0 0v26h74V0H0zm18.7 17.94l-.72-1.56h-4.87l-.71 1.56H9.93l4.68-9.95h1.88l4.67 9.95H18.7zm18.1.07h-1.88l-3.18-6.83-3.18 6.83h-1.88L22 8.06h2.4l3.11 6.76 3.12-6.76h1.88l3.18 6.76 3.18-6.83v.07h2.6l-4.67 9.95zm13.96-.07l-.71-1.56h-4.87l-.72 1.56H42l4.67-9.95h1.88l4.68 9.95h-2.47zm5.65-9.95l2.47 3.71L61.34 8h2.8l-4.1 6.04v3.97h-2.2v-3.97l-4.1-6.05h2.67zm-40.83 2.74l1.62 3.64h-3.24l1.62-3.64zm32.07 0l1.62 3.64h-3.25l1.63-3.64z'></path>
		</SvgIcon>
	);
};

AwayLogo = styled(AwayLogo, { name: 'away-icon' })(({ theme, gridArea }) => ({
	width: '74px',
	height: '26px',
	margin: '0 auto'
}));
export default AwayLogo;
