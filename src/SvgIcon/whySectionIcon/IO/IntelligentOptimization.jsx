import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let IntelligentOptimization = (props) => {
	return (
		<SvgIcon
			{...props}
			titleAccess='IntelligentOptimization'
			width='96'
			height='96'
			preserveAspectRatio='xMinYMin'
			viewBox='0 0 96 96'
			xmlns='http://www.w3.org/2000/svg'>
			<defs>
				<path
					id='gearsIconSmall'
					d='M29.5 28l1.13 3.13.64.13 2.24-2.46.93.38-.16 3.33c.19.11.37.23.54.36l3.02-1.42.7.71-1.41 3.02c.13.17.25.35.36.54l3.33-.16.38.93-2.46 2.24c.05.21.1.42.13.64L42 40.5v1l-3.13 1.13c-.04.25-.1.5-.15.73l2.48 2.15-.38.93-3.28-.24c-.14.24-.3.47-.47.7l1.48 2.94-.71.7-2.94-1.47c-.23.17-.46.33-.7.47l.24 3.28-.93.38-2.15-2.48c-.27.06-.54.12-.82.16L29.5 54h-1l-1.04-3.12c-.28-.04-.55-.1-.82-.16l-2.15 2.48-.93-.38.24-3.28c-.24-.14-.47-.3-.7-.47l-2.94 1.48-.7-.71 1.47-2.94c-.17-.23-.33-.46-.47-.7l-3.28.24-.38-.93 2.48-2.15a9.95 9.95 0 0 1-.16-.82L16 41.5v-1l3.12-1.04c.04-.25.08-.49.14-.73l-2.46-2.24.38-.93 3.33.16c.11-.19.23-.37.36-.54l-1.42-3.02.71-.7 3.02 1.41c.17-.13.35-.25.54-.36l-.16-3.33.93-.38 2.24 2.46s.42-.1.64-.13L28.5 28h1zM29 39a2 2 0 1 0 0 4 2 2 0 0 0 0-4z'></path>
				<path
					id='gearsIconLarge'
					d='M41.8 38l.88 3.12c.28.03.56.08.83.14l1.9-2.63 1.5.55-.24 3.22c.25.13.49.27.73.42L50.08 41l1.24 1.02-1.35 2.95c.19.2.37.42.54.64l3.16-.8.8 1.38-2.27 2.31c.1.26.2.52.28.79l3.24.32.28 1.57-2.94 1.4v.84l2.94 1.4-.28 1.57-3.24.32c-.08.27-.18.53-.28.79l2.27 2.3-.8 1.4-3.16-.81c-.17.22-.35.43-.54.64l1.35 2.95L50.08 65l-2.68-1.82c-.24.15-.48.29-.73.42l.25 3.22-1.52.55-1.9-2.63c-.26.06-.54.1-.82.14L41.8 68h-1.6l-.88-3.12a12.1 12.1 0 0 1-.83-.14l-1.9 2.63-1.5-.55.24-3.22c-.25-.13-.49-.27-.73-.42L31.92 65l-1.24-1.02 1.35-2.95c-.19-.2-.37-.42-.54-.64l-3.16.8-.8-1.38 2.27-2.31c-.1-.26-.2-.52-.28-.79l-3.24-.32-.28-1.57 2.94-1.4v-.84L26 51.18l.28-1.57 3.24-.32c.08-.27.18-.53.28-.79l-2.27-2.3.8-1.4 3.16.81c.17-.22.35-.43.54-.64l-1.35-2.95L31.92 41l2.68 1.82c.24-.15.48-.29.73-.42l-.25-3.22 1.52-.55 1.9 2.63c.26-.06.54-.1.82-.14L40.2 38h1.6zM41 50a3 3 0 0 0-3.02 3A3 3 0 0 0 41 56a3 3 0 0 0 3.02-3A3 3 0 0 0 41 50z'></path>
				<clipPath id='gearsIconClipPath'>
					<use
						className='GearsIcon__gear--small'
						href='#gearsIconSmall'
						data-js-target-list='GearsIcon.smallGears'></use>
				</clipPath>
			</defs>

			<use
				className='GearsIcon__gear--small'
				href='#gearsIconSmall'
				fill='#80e9ff'
				data-js-target-list='GearsIcon.smallGears'></use>
			<use
				className='GearsIcon__gear--large'
				href='#gearsIconLarge'
				fill='#7a73ff'
				data-js-target-list='GearsIcon.largeGears'></use>
			<g clipPath='url(#gearsIconClipPath)'>
				<use
					className='GearsIcon__gear--large'
					href='#gearsIconLarge'
					fill='#0048e5'
					data-js-target-list='GearsIcon.largeGears'></use>
			</g>
		</SvgIcon>
	);
};

IntelligentOptimization = styled(IntelligentOptimization, { name: 'IntelligentOptimization-icon' })(({ theme }) => ({
	width: '96px',
	height: '96px',
	position: 'absolute',
	top: '-24px',
	left: '-14px'
}));
export default IntelligentOptimization;
// --#80e9ff: #80e9ff;
//     --#0048e5: #0048e5;
//     --#7a73ff: #7a73ff;
