import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let CloudCard = (props) => {
	return (
		<SvgIcon {...props} titleAccess='cloud card' viewBox='0 0 460 700'>
			<defs>
				<linearGradient id='HomepageIncrementPhone__imageGradientA' x1='50%' x2='50%' y1='0%' y2='88.24%'>
					<stop offset='0%' stopColor='#AC9CC0'></stop>
					<stop offset='100%' stopColor='#F2D6DF'></stop>
				</linearGradient>
				<linearGradient id='HomepageIncrementPhone__imageGradientB' x1='50%' x2='50%' y1='0%' y2='100%'>
					<stop offset='0%' stopColor='#6F74A9'></stop>
					<stop offset='80%' stopColor='#515997'></stop>
					<stop offset='100%' stopColor='#323C83'></stop>
				</linearGradient>
				<linearGradient id='HomepageIncrementPhone__imageGradientC' x1='0%' x2='100%' y1='50%' y2='50%'>
					<stop offset='0%' stopColor='#B1AFCC'></stop>
					<stop offset='100%' stopColor='#7B80B1'></stop>
				</linearGradient>
				<linearGradient id='HomepageIncrementPhone__imageGradientD' x1='0%' x2='100%' y1='0%' y2='0%'>
					<stop offset='0%' stopColor='#EB938A'></stop>
					<stop offset='90%' stopColor='#E6887F'></stop>
					<stop offset='100%' stopColor='#B74840'></stop>
				</linearGradient>
				<linearGradient id='HomepageIncrementPhone__imageGradientE' x1='0%' x2='100%' y1='50%' y2='50%'>
					<stop offset='0%' stopColor='#FFF' stopOpacity='0'></stop>
					<stop offset='100%' stopColor='#FFF' stopOpacity='.5'></stop>
				</linearGradient>
				<linearGradient id='HomepageIncrementPhone__imageGradientF' x1='50%' x2='50%' y1='60%' y2='100%'>
					<stop offset='0%' stopColor='#4FBED4'></stop>
					<stop offset='100%' stopColor='#439CCA'></stop>
				</linearGradient>
				<linearGradient id='HomepageIncrementPhone__imageGradientG' x1='50%' x2='50%' y1='0%' y2='100%'>
					<stop offset='0%' stopColor='#52468C' stopOpacity='.8'></stop>
					<stop offset='100%' stopColor='#52468C' stopOpacity='.2'></stop>
				</linearGradient>
				<linearGradient id='HomepageIncrementPhone__imageGradientH' x1='50%' x2='50%' y1='0%' y2='100%'>
					<stop offset='0%' stopColor='#F2B532'></stop>
					<stop offset='100%' stopColor='#EB9234'></stop>
				</linearGradient>
			</defs>
			<path
				fill='url(#HomepageIncrementPhone__imageGradientA)'
				d='M0 239h460v421a40 40 0 0 1-40 40H40a40 40 0 0 1-40-40V239z'></path>
			<rect width='460' height='28' x='.01' y='211' fill='url(#HomepageIncrementPhone__imageGradientB)'></rect>
			<path fill='#52468C' d='M40 0h380a40 40 0 0 1 40 40v171H0V40A40 40 0 0 1 40 0z'></path>
			<path
				fill='url(#HomepageIncrementPhone__imageGradientC)'
				d='M459 155.88l1 .88V211H0V40a39.86 39.86 0 0 1 10.46-26.96C134.2 29 289.04 127.07 459 155.88z'></path>
			<path fill='#8888B5' d='M460 60H231.5c36.15 0 151.64-18.83 214.75-50.2A39.9 39.9 0 0 1 460 40v20z'></path>
			<rect width='75' height='461' x='128' y='239' fill='url(#HomepageIncrementPhone__imageGradientD)'></rect>
			<path
				fill='url(#HomepageIncrementPhone__imageGradientE)'
				d='M319 79c72.35 0 131 58.65 131 131v1H188.01v-1c0-71.63 57.48-129.83 128.83-130.98L319 79z'></path>
			<path
				fill='url(#HomepageIncrementPhone__imageGradientF)'
				d='M452.5 239c0 36.46-16.76 79.52-44.74 113-32.25 38.58-76.16 61.5-126.26 61.5-86.47 0-151.19 66.96-152.48 153.38L129.01 700H99V569.5c0-103.94 78.25-186 182.5-186 40.68 0 76.4-18.65 103.24-50.75 23.37-27.96 37.47-63.86 37.75-92.87V239h30z'></path>
			<path
				fill='#000'
				d='M263.5 547.13c10.65 0 18.6-5.02 20.18-16.73h-9.75c-.98 6-4.2 8.48-10.28 8.48-6.15 0-11.02-4.5-11.02-10.65v-15.6c0-6.38 4.5-10.5 10.72-10.5 5.78 0 9.23 2.7 9.75 8.1h9.75c-.67-10.05-8.32-16.35-18.82-16.35-14.78 0-21.9 10.57-21.9 26.77 0 15.38 6.67 26.48 21.37 26.48zm32.95-1.13v-51h-9.37v51h9.37zm21.93.9c11.47 0 17.92-8.02 17.92-20.02s-6.45-20.02-17.92-20.02c-11.48 0-17.93 8.02-17.93 20.02s6.45 20.02 17.93 20.02zm0-7.27c-4.65 0-8.18-2.63-8.18-7.2v-11.1c0-4.58 3.53-7.2 8.18-7.2s8.17 2.55 8.17 7.2v11.1c0 4.65-3.52 7.2-8.17 7.2zm33.85 7.27c5.4 0 8.92-2.32 11.25-6.44V546h9.37v-38.25h-9.37v22.13c0 5.55-3.15 9.38-8.18 9.38-4.42 0-6-2.7-6-7.13v-24.38h-9.37v25.05c0 8.86 4.12 14.1 12.3 14.1zm39.92 0a12.3 12.3 0 0 0 11.03-6.07V546h9.37v-51h-9.37v17.93c-2.4-3.82-6.15-6.07-11.18-6.07-10.27 0-15.07 8.92-15.07 20.02s5.02 20.02 15.22 20.02zm2.4-7.27c-4.8 0-7.87-3.08-7.87-7.35v-10.8c0-4.27 3-7.35 7.87-7.35 6 0 8.63 3.9 8.63 9.9v5.7c0 6-2.63 9.9-8.63 9.9z'></path>
			<path fill='#fff' d='M383.32 211H0V90.88c104.75 9.6 237.36 95.4 383.32 120.12z'></path>
			<polygon fill='#000' points='.005 91.138 203.005 48 203.005 102.028 .005 145.271'></polygon>
			<path
				fill='#fff'
				d='M21.57 102.77l-9.2 2v3.07l5.82-1.27v19.67l9.2-2v-3.08l-5.82 1.27v-19.66zm38.7-5.5c2.85-.63 3.91.85 4.02 3.7l3.38-.74c-.32-4.97-2.43-7.19-7.3-6.13-4.54.95-7.6 4.12-7.6 9.62v7.72c0 4.97 2.43 7.3 7.6 6.13 4.87-1.06 7.09-3.7 7.3-8.46l-3.28.74c-.1 2.64-1.48 4.13-4.01 4.65-3.18.64-4.34-.63-4.23-3.7v-7.72c-.1-3.59 1.27-5.18 4.12-5.81zm-13.85 19.88v-13.11c0-3.92-1.7-6.45-5.5-5.71-2.43.53-5.07 2.53-5.7 4.86v-3.28l-7.2 1.48v3.07l3.8-.85v19.56l3.4-.74v-16.49c1.58-3.07 3.27-4.02 4.86-4.34 1.8-.42 3.06.43 3.06 2.97v16.28l7.2-1.48v-3.07l-3.92.85zM189.47 70.2v-3.17l-11.95 2.54v3.17l3.39-.74v19.56l8.56-1.8V86.7l-5.18 1.05V71.26l5.18-1.06zM92.1 107.84c-3.06.64-4.22-.74-4.22-3.8v-3.18l11.63-2.43V94.2c0-4.86-2.65-7.71-7.51-6.66-4.76 1.06-7.5 4.76-7.5 9.52v7.72c0 4.86 2.85 7.19 7.6 6.23 5.93-1.26 7.62-5.6 7.62-8.56l-3.17.53c-.22 3.07-2.01 4.33-4.45 4.86zm-4.22-11.63c0-2.96 1.16-5.18 4.12-5.81 3.07-.64 4.12 1.27 4.12 4.44V96l-8.24 1.8v-1.6zm56.88.43c-3.07.63-4.23-.74-4.23-3.81v-3.17l11.63-2.43V83c0-4.87-2.64-7.72-7.5-6.66-4.77 1.05-7.51 4.75-7.51 9.51v7.72c0 4.86 2.85 7.19 7.6 6.24 5.93-1.27 7.62-5.6 7.62-8.57l-3.07.64c-.42 2.96-2.22 4.23-4.54 4.76zm-4.23-11.53c0-2.96 1.16-5.18 4.12-5.81 3.07-.64 4.13 1.26 4.13 4.44v1.16l-8.25 1.8v-1.6zm32.77 4.97V76.97c0-3.7-2.11-6.45-5.7-5.6-2.44.52-4.87 2.53-5.6 4.86v-3.28l-7.2 1.48v3.07l3.8-.85v19.56l3.4-.74v-16.5c1.58-3.06 3.27-4 4.86-4.33 1.8-.42 3.06.43 3.06 2.96v16.3l7.2-1.48v-3.07l-3.82.74zm-42.71 9.1V85.52c0-3.49-2.33-5.81-5.7-5.18-2.12.43-4.87 2.86-5.3 4.97-.42-1.69-2.74-3.17-5.18-2.64-2.11.42-4.44 2.54-4.86 4.65v-3.28l-7.19 1.48v3.07l3.8-.85v19.56l3.39-.74V90.2c.95-2.01 2.43-3.92 4.44-4.34 1.27-.21 2.75.21 2.75 3.17v16.18l3.38-.74v-16.4c.95-2 2.43-3.91 4.44-4.33 1.27-.21 2.75.2 2.75 3.17v16.17l7.2-1.48v-3.06l-3.92.63zm-58.36-7.2v22.74l3.38-.75V94.42l5.82-1.27v-3.07l-9.2 1.9z'></path>
			<path
				fill='url(#HomepageIncrementPhone__imageGradientG)'
				d='M361.5 239c0 46.23-17.56 99.17-47.13 142.65-33.51 49.28-79.68 83.15-132.66 91.37l-4.29.66c-4.1.6-16.41 2.3-36.95 5.05a1106.44 1106.44 0 0 0-39.46 6.02c-35.16 6.44-61.21 15.33-82.22 29.1a125.89 125.89 0 0 0-18.79 15V431.6c24.8-12.05 52.5-20.22 85.07-26.27l4.18-.76 3.02-.54c9.86-1.74 17.98-2.95 34.57-5.19l23.68-3.16a931.3 931.3 0 0 0 18.77-2.7c28.52-4.42 56.28-24.79 78.1-56.87 20.54-30.21 32.87-67.03 33.11-96.22V239h81z'></path>
			<path
				fill='url(#HomepageIncrementPhone__imageGradientH)'
				d='M22.18 561.36c23.26 23.48 58.34 36.87 104.91 37.14H340c46.1 0 90.76 22.88 120 57.03V660a40.02 40.02 0 0 1-27.94 38.15c-18.82-29.08-54.21-51-90.45-51.64l-213.1-.01c-52.72 0-96.33-14.18-128.5-40.52V528.2a105.93 105.93 0 0 0 22.17 33.17z'></path>
		</SvgIcon>
	);
};

CloudCard = styled(CloudCard, { name: 'cloud-image-card' })(({ theme }) => ({
	width: '46px',
	height: '70px',
	borderRadius: '4px',
	boxShadow: '0 3px 6px -1px rgb(50 50 93 / 25%), 0 1px 3px 0 rgb(0 0 0 / 20%)'
}));
export default CloudCard;
