import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let VisaIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='visa logo' viewBox='0 0 17 12'>
			<path
				fill='#FFF'
				stroke='#000'
				strokeOpacity='.2'
				strokeWidth='.5'
				d='M1.6.18h13.8c.79 0 1.42.63 1.42 1.41v8.74c0 .78-.63 1.42-1.41 1.42H1.59c-.78 0-1.41-.64-1.41-1.42V1.6C.18.81.8.18 1.59.18z'></path>
			<path
				fill='#171E6C'
				d='M1.98 4.39A5.1 5.1 0 0 0 .7 3.9l.02-.09h1.93c.27 0 .48.1.55.37l.42 2.01.13.6 1.18-2.97h1.28l-1.9 4.35H3.05l-1.07-3.8zm5.17 3.8h-1.2l.75-4.37h1.2l-.75 4.37zm4.37-4.26l-.16.95-.11-.05c-.21-.09-.5-.18-.9-.17-.48 0-.69.19-.7.38 0 .2.27.33.68.54.7.3 1.02.69 1.02 1.19-.01.9-.83 1.48-2.1 1.48-.54 0-1.06-.1-1.34-.22l.16-.99.17.07c.39.17.64.24 1.13.24.34 0 .71-.14.72-.43 0-.19-.16-.33-.63-.54-.45-.22-1.06-.57-1.05-1.2 0-.84.85-1.44 2.03-1.44.47 0 .85.1 1.08.19zm1.6 2.72h1l-.27-1.27-.09-.38-.15.43-.48 1.22zm1.5-2.83l.96 4.37h-1.12l-.14-.65h-1.54l-.26.65h-1.26l1.79-4c.13-.3.34-.36.63-.36h.93v-.01z'></path>
		</SvgIcon>
	);
};

VisaIcon = styled(VisaIcon, { name: 'serene-image-card' })(({ theme }) => ({
	width: '17px',
	height: '12px',
	borderRadius: '4px',
	boxShadow: '0 3px 6px -1px rgb(50 50 93 / 25%), 0 1px 3px 0 rgb(0 0 0 / 20%)'
}));
export default VisaIcon;
