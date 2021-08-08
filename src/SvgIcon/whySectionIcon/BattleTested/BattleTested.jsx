import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let BattleTested = (props) => {
	return (
		<SvgIcon
			{...props}
			titleAccess='BattleTested'
			width='96'
			height='96'
			preserveAspectRatio='xMinYMin'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 96 96'>
			<defs>
				<circle id='healthIconCircle' cx='35' cy='49' r='19'></circle>
				<path
					id='healthIconCheck'
					d='M47 28a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm3.94 4.73L45 38.78 43.43 37a.83.83 0 0 0-1.3 1L44 41.2a1 1 0 0 0 1.7 0c.3-.41 6-7.57 6-7.57.75-.8-.16-1.51-.76-.9z'></path>
				<clipPath id='healthIconLineClipPath'>
					<circle cx='35' cy='49' r='17'></circle>
				</clipPath>
				<clipPath id='healthIconCircleClipPath'>
					<use href='#healthIconCircle'></use>
				</clipPath>
			</defs>

			<use href='#healthIconCircle' fill='#80e9ff'></use>
			<path
				className='HealthIcon__line'
				d='M16 53h6l2.5-6L29 59l5-20.5L37 53l19 .09'
				clipPath='url(#healthIconLineClipPath)'
				data-js-target='HealthIcon.line'></path>
			<use
				className='HealthIcon__check'
				href='#healthIconCheck'
				fill='#7a73ff'
				data-js-target-list='HealthIcon.checks'></use>
			<use
				className='HealthIcon__check'
				href='#healthIconCheck'
				fill='#0048e5'
				clipPath='url(#healthIconCircleClipPath)'
				data-js-target-list='HealthIcon.checks'></use>
		</SvgIcon>
	);
};

BattleTested = styled(BattleTested, { name: 'BattleTested-icon' })(({ theme }) => ({
	width: '96px',
	height: '96px',
	position: 'absolute',
	top: '-24px',
	left: '-14px',
	'& .HealthIcon__line': {
		stroke: '#fff',
		strokeWidth: '2px',
		strokeLinejoin: 'round',
		strokeDasharray: '81px',
		fill: 'none'
	}
}));
export default BattleTested;
// --#80e9ff: #80e9ff;
//     --#0048e5: #0048e5;
//     --#7a73ff: #7a73ff;
