import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';

let AlwayKnowWhatYouPay = (props) => {
	return (
		<SvgIcon
			{...props}
			titleAccess='AlwayKnowWhatYouPay'
			width='96'
			height='96'
			preserveAspectRatio='xMinYMin'
			viewBox='0 0 96 96'
			xmlns='http://www.w3.org/2000/svg'>
			<defs>
				<path
					id='pricingIconTag'
					d='M41.4 30.38l8.4 8.27A4 4 0 0 1 51 41.5V62a3 3 0 0 1-3 3H32a3 3 0 0 1-3-3V41.5a4 4 0 0 1 1.2-2.85l8.4-8.27a2 2 0 0 1 2.8 0zM40 36a3 3 0 1 0 0 6 3 3 0 0 0 0-6z'></path>
				<clipPath id='pricingClipPath'>
					<use
						href='#pricingIconTag'
						// style='transform-origin: 40px 39px; transform: rotate(45deg)'
						style={{ transform: 'rotate(45deg)', transformOrigin: '40px 39px' }}
						data-js-target-list='PricingIcon.tagBacks'></use>
				</clipPath>
			</defs>

			<use
				href='#pricingIconTag'
				fill='#00d4ff'
				// style='transform-origin: 40px 39px; transform: rotate(45deg)'
				style={{ transform: 'rotate(45deg)', transformOrigin: '40px 39px' }}
				data-js-target-list='PricingIcon.tagBacks'></use>
			<use
				className='PricingIcon__tag'
				href='#pricingIconTag'
				fill='#7a73ff'
				// style='transform-origin: 40px 39px;'
				style={{ transformOrigin: '40px 39px' }}
				data-js-target-list='PricingIcon.tagFronts'></use>
			<g clipPath='url(#pricingClipPath)'>
				<use
					className='PricingIcon__tag'
					href='#pricingIconTag'
					fill='rgb(0, 72, 229)'
					// style='transform-origin: 40px 39px;'
					style={{ transformOrigin: '40px 39px' }}
					data-js-target-list='PricingIcon.tagFronts'></use>
			</g>
		</SvgIcon>
	);
};

AlwayKnowWhatYouPay = styled(AlwayKnowWhatYouPay, { name: 'AlwayKnowWhatYouPay' })(({ theme }) => ({
	width: '96px',
	height: '96px',
	position: 'absolute',
	top: '-24px',
	left: '-14px'
}));
export default AlwayKnowWhatYouPay;
// animateIcon__explore: {
//   blendForeground: '#7a73ff',
//   blendIntersection: '#cff',
//   blendBackground: '#00d4ff'
// }
