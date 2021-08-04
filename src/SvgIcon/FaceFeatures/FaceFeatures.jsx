import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let FaceFeatures = (props) => {
	return (
		<SvgIcon {...props} titleAccess='face features' viewBox='0 0 100 100' width='100px' height='100px'>
			<g className='Face__eyes' data-js-target='FaceIdAnimation.eyes'>
				<path className='Face__eye' d='M33,39 l0,6.5'></path>
				<path className='Face__eye' d='M67,39 l0,6.5'></path>
			</g>
			<path
				className='Face__nose'
				data-js-target='FaceIdAnimation.nose'
				d='M51.5,38.5 L51.5,53.5A4,4,0,0,1,47,57.5L46,57.5'></path>
			<path className='Face__mouth' data-js-target='FaceIdAnimation.mouth' d='M37,68 A20,20,0,0,0,63,68'></path>
		</SvgIcon>
	);
};

FaceFeatures = styled(FaceFeatures, { name: 'face-features' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {},
	[theme.breakpoints.up('tablet')]: {},
	[theme.breakpoints.up('laptop')]: {
		width: '33.75px',
		height: '33.75px',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-56%)',
		'& path': {
			stroke: '#0278fc',
			strokeWidth: '4px',
			fill: 'none',
			strokeLinecap: 'round'
		}
	}
}));
export default FaceFeatures;
