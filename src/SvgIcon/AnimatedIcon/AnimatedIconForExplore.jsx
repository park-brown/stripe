import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';

let AnimatedIconForExplore = (props) => {
	return (
		<SvgIcon
			{...props}
			titleAccess='AnimatedIconForExplore'
			width='96'
			height='96'
			preserveAspectRatio='xMinYMin'
			viewBox='0 0 96 96'
			xmlns='http://www.w3.org/2000/svg'>
			<defs>
				<path
					id='blocksIconBack'
					d='M30.68 31.37l9 4.15A4 4 0 0 1 42 39.15v10.89a4 4 0 0 1-2.32 3.63l-9 4.15a4 4 0 0 1-3.36 0l-9-4.15A4 4 0 0 1 16 50.04V39.15a4 4 0 0 1 .35-1.62L29 43.36v-1.54l-11.85-5.47a4 4 0 0 1 1.17-.83l9-4.15a4 4 0 0 1 3.36 0z'></path>
				<path
					id='blocksIconFront'
					d='M55 45.15v10.89a4 4 0 0 1-2.32 3.63l-9 4.15a4 4 0 0 1-3.36 0l-9-4.15A4 4 0 0 1 29 56.04V45.15a4 4 0 0 1 .35-1.62L42 49.37l12.65-5.84a4 4 0 0 1 .35 1.62zm-11.32-7.78l9 4.15a4 4 0 0 1 1.17.83L42 47.82l-11.86-5.47a4 4 0 0 1 1.18-.83l9-4.15a4 4 0 0 1 3.36 0z'></path>
				<clipPath id='blocksIconClipPath'>
					<use
						data-js-target-list='BlocksIcon.firstBackBlocks'
						href='#blocksIconFront'
						transform='translate(-13, -6)'
						data-js-bbox='firstHiddenBlock'></use>
					<use
						data-js-target-list='BlocksIcon.secondBackBlocks'
						href='#blocksIconFront'
						transform='translate(-65, -30)'
						data-js-bbox='secondHiddenBlock'></use>
				</clipPath>
			</defs>

			<use
				data-js-target='BlocksIcon.firstHiddenBlock'
				href='#blocksIconFront'
				transform='translate(-13, -6)'
				// style='visibility: hidden;'
			></use>
			<use
				data-js-target='BlocksIcon.secondHiddenBlock'
				href='#blocksIconFront'
				transform='translate(-65, -30)'
				// style='visibility: hidden;'
			></use>

			<use
				data-js-target-list='BlocksIcon.secondBackBlocks'
				href='#blocksIconFront'
				fill='#00d4ff'
				// style='opacity: 0;'
			></use>
			<use
				data-js-target-list='BlocksIcon.secondFrontBlocks'
				href='#blocksIconFront'
				fill='#7a73ff'
				// style='opacity: 0;'
			></use>
			<use
				data-js-target-list='BlocksIcon.firstBackBlocks'
				href='#blocksIconFront'
				fill='#00d4ff'
				transform='translate(-13, -6)'></use>
			<use data-js-target-list='BlocksIcon.firstFrontBlocks' href='#blocksIconFront' fill='#7a73ff'></use>
			<g clipPath='url(#blocksIconClipPath)'>
				<use data-js-target-list='BlocksIcon.firstFrontBlocks' href='#blocksIconFront' fill='#cff'></use>
				<use
					data-js-target-list='BlocksIcon.secondFrontBlocks'
					href='#blocksIconFront'
					fill='#cff'
					// style='opacity: 0;'
				></use>
			</g>
		</SvgIcon>
	);
};

AnimatedIconForExplore = styled(AnimatedIconForExplore, { name: 'AnimatedIconForExplore' })(({ theme }) => ({
	width: '96px',
	height: '96px'
}));
export default AnimatedIconForExplore;
// animateIcon__explore: {
//   blendForeground: '#7a73ff',
//   blendIntersection: '#cff',
//   blendBackground: '#00d4ff'
// }
