import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let DebitCardChip = (props) => {
	return (
		<SvgIcon {...props} titleAccess='debit card chip' viewBox='0 0 51 45'>
			<defs>
				<linearGradient id='chip-gradient' y1='10%' y2='88%' data-js-target='CardGraphic.chipGradient'>
					<stop offset='0%' stopColor='#FFF'></stop>
					<stop offset='18%' stopColor='#CFCFCF'></stop>
					<stop offset='50%' stopColor='#FAFCFF'></stop>
					<stop offset='68%' stopColor='#CFCFCF'></stop>
					<stop offset='100%' stopColor='#FFF'></stop>
				</linearGradient>
				<mask id='chip-mask'>
					<path
						d='M12 36v9H7.7c-2.68 0-3.65-.28-4.63-.8A5.45 5.45 0 0 1 .8 41.93c-.52-.98-.8-1.95-.8-4.62V36h12zm21.07-6a7 7 0 0 0 4.68 5.63l.25.08V45H13v-9.29a7.01 7.01 0 0 0 4.89-5.45l.04-.26h15.14zM51 36v1.3c0 2.68-.28 3.65-.8 4.63a5.45 5.45 0 0 1-2.27 2.27c-.98.52-1.95.8-4.62.8H39v-9h12zm0-13v12H40a6 6 0 0 1-6-6v-6h17zm-34 0v6a6 6 0 0 1-5.78 6H0V23h17zm16-7v13H18V16h15zm18-6v12H34v-6a6 6 0 0 1 5.78-6H51zm-40 0a6 6 0 0 1 6 6v6H0V10h11zM38 0v9.29A7 7 0 0 0 33.07 15H17.93A7 7 0 0 0 13 9.29V0h25zm5.3 0c2.68 0 3.65.28 4.63.8a5.45 5.45 0 0 1 2.27 2.27c.52.98.8 1.95.8 4.62V9H39V0h4.3zM12 0v9H0V7.7c0-2.68.28-3.65.8-4.63A5.45 5.45 0 0 1 3.07.8C4.05.28 5.02 0 7.69 0H12z'
						fill='#fff'></path>
				</mask>
			</defs>

			<rect x='0' y='0' width='51' height='45' fill='#828396' rx='6'></rect>
			<rect
				x='0'
				y='0'
				width='102'
				height='98'
				fill='url(#chip-gradient)'
				mask='url(#chip-mask)'
				data-js-target='CardGraphic.chip'></rect>
		</SvgIcon>
	);
};

DebitCardChip = styled(DebitCardChip, { name: 'debit-card-chip' })(({ theme }) => ({
	width: '51px',
	height: '45px'
}));
export default DebitCardChip;
