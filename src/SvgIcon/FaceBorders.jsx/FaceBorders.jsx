import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';

let FaceBorders = (props) => {
	return (
		<SvgIcon {...props} titleAccess='face borders' viewBox='0 0 100 100' width='100px' height='100px'>
			{/* <svg
				className='Face__border--copy'
				data-js-target='FaceIdAnimation.borderCopy'
				width='100'
				height='100'
				style='transform: perspective(500px) rotateZ(0deg) rotateX(0deg) rotateY(0deg);transition: transform 0s ease 0s;opacity: 1;'> */}
			<path
				className='Face__corner Face__corner--tl'
				data-js-target-list='FaceIdAnimation.tl'
				d='M10,30 L10,22 A12,12,0,0,1,22,10L30,10'
				// style='stroke: rgb(2, 120, 252);'
			></path>
			<path
				className='Face__corner Face__corner--tr'
				data-js-target-list='FaceIdAnimation.tr'
				d='M70,10 L78,10 A12,12,0,0,1,90,22L90,30'
				// style='stroke: rgb(2, 120, 252);'
			></path>
			<path
				className='Face__corner Face__corner--br'
				data-js-target-list='FaceIdAnimation.br'
				d='M90,70 L90,78 A12,12,0,0,1,78,90L70,90'
				// style='stroke: rgb(2, 120, 252);'
			></path>
			<path
				className='Face__corner Face__corner--bl'
				data-js-target-list='FaceIdAnimation.bl'
				d='M30,90 L22,90 A12,12,0,0,1,10,78L10,70'
				// style='stroke: rgb(2, 120, 252);'
			></path>
			{/* </svg> */}
		</SvgIcon>
	);
};

FaceBorders = styled(FaceBorders, { name: 'face-borders' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {},
	[theme.breakpoints.up('tablet')]: {},
	[theme.breakpoints.up('laptop')]: {
		width: '33.75px',
		height: '33.75px',
		position: 'relative',
		'& path': {
			stroke: '#0278fc',
			strokeWidth: '4px',
			fill: 'none',
			strokeLinecap: 'round'
		}
	}
}));
export default FaceBorders;
