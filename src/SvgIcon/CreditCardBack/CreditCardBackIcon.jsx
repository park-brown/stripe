import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let CreditCardBackIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='credit back logo' viewBox='0 0 19 14'>
			<rect width='17' height='12' y='2' fill='#E6EBF1' rx='2'></rect>
			<rect width='13' height='2' x='2' y='4' fill='#FFF' rx='1'></rect>
			<circle cx='14.5' cy='4.5' r='4.5' fill='#B4C2D0'></circle>
			<path
				fill='#FFF'
				d='M12.5 5.96V3.03H12c-.04.33-.2.46-.58.5l-.24.01v.51h.66v1.9h.67zm1.61.04c.65 0 1.07-.4 1.07-.87 0-.36-.2-.57-.46-.67a.65.65 0 0 0 .4-.62c0-.48-.38-.84-.99-.84-.63 0-1.02.4-1.09.92l.62.07c.04-.25.2-.43.44-.43.23 0 .37.13.37.32 0 .22-.17.32-.42.32h-.26v.54h.27c.27 0 .46.1.46.33 0 .24-.18.37-.42.37-.25 0-.44-.16-.48-.45l-.65.1c.08.6.54.91 1.14.91zm2.53 0c.6 0 1.07-.43 1.07-1.02 0-.56-.36-.98-.95-.98-.2 0-.37.07-.48.16l.05-.54h1.2v-.58h-1.7l-.14 1.6.6.07c.07-.1.2-.18.37-.18.26 0 .42.2.42.46 0 .27-.2.45-.45.45s-.42-.17-.46-.44l-.65.1c.09.58.52.9 1.12.9z'></path>
		</SvgIcon>
	);
};

CreditCardBackIcon = styled(CreditCardBackIcon, { name: 'credit-card-back' })(({ theme }) => ({
	width: '19px',
	height: '14px',
	borderRadius: '4px',
	boxShadow: '0 3px 6px -1px rgb(50 50 93 / 25%), 0 1px 3px 0 rgb(0 0 0 / 20%)'
}));
export default CreditCardBackIcon;
