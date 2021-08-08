import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let FastestImprovingPlatform = (props) => {
	return (
		<SvgIcon
			{...props}
			titleAccess='FastestImprovingPlatform'
			width='96'
			height='96'
			preserveAspectRatio='xMinYMin'
			viewBox='0 0 96 96'
			xmlns='http://www.w3.org/2000/svg'>
			<defs>
				<path
					id='fastForwardIconArrow'
					d='M19.15 31.36l21.53 15.15a2 2 0 0 1 0 3.27L19.15 64.93A2 2 0 0 1 16 63.29V33a2 2 0 0 1 3.15-1.64z'></path>
				<clipPath id='fastForwardIconClipPath'>
					<use
						href='#fastForwardIconArrow'
						fill='var(--#80e9ff)'
						data-js-target-list='FastForwardIcon.firstBackArrows'
						data-js-bbox='firstHiddenArrow'></use>
					<use
						href='#fastForwardIconArrow'
						transform='translate(-42, 0)'
						fill='var(--#80e9ff)'
						data-js-target-list='FastForwardIcon.secondBackArrows'
						data-js-bbox='secondHiddenArrow'></use>
				</clipPath>
			</defs>

			<use
				href='#fastForwardIconArrow'
				fill='#80e9ff'
				data-js-target='FastForwardIcon.firstHiddenArrow'
				style={{ visibility: 'hidden' }}></use>
			<use
				href='#fastForwardIconArrow'
				transform='translate(-42, 0)'
				fill='#80e9ff'
				data-js-target='FastForwardIcon.secondHiddenArrow'
				style={{ visibility: 'hidden' }}
				// style='visibility: hidden;'
			></use>

			<use
				href='#fastForwardIconArrow'
				fill='#80e9ff'
				data-js-target-list='FastForwardIcon.firstBackArrows'
				style={{ transform: 'translateX(14px)' }}></use>
			<use
				href='#fastForwardIconArrow'
				fill='#80e9ff'
				data-js-target-list='FastForwardIcon.secondBackArrows'
				// style='opacity: 0;'
				style={{ transform: 'translateX(42px)', opacity: 0 }}></use>
			<use
				href='#fastForwardIconArrow'
				// transform='translate(14, 0)'
				fill='#7a73ff'
				data-js-target-list='FastForwardIcon.firstFrontArrows'></use>
			<use
				href='#fastForwardIconArrow'
				fill='#7a73ff'
				data-js-target-list='FastForwardIcon.secondFrontArrows'
				style={{ transform: 'translateX(42px)', opacity: 0 }}
				// style='opacity: 0;'
			></use>
			<g clipPath='url(#fastForwardIconClipPath)'>
				<use
					href='#fastForwardIconArrow'
					style={{ transform: 'translateX(14px)' }}
					// transform='translate(14, 0)'
					fill='#0048e5'
					data-js-target-list='FastForwardIcon.firstFrontArrows'></use>
				<use
					href='#fastForwardIconArrow'
					fill='#0048e5'
					data-js-target-list='FastForwardIcon.secondFrontArrows'
					style={{ opacity: 0 }}></use>
			</g>
		</SvgIcon>
	);
};

FastestImprovingPlatform = styled(FastestImprovingPlatform, { name: 'FastestImprovingPlatform-icon' })(({ theme }) => ({
	width: '96px',
	height: '96px',
	position: 'absolute',
	top: '-24px',
	left: '-14px'
}));
export default FastestImprovingPlatform;
// --#80e9ff: #80e9ff;
//     --#0048e5: #0048e5;
//     --#7a73ff: #7a73ff;
