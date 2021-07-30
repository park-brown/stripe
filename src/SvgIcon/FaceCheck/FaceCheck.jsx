import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let FaceCheck = (props) => {
	return (
		<SvgIcon {...props} titleAccess='face check' viewBox='0 0 100 100' width='100px'>
			<path d='M34,52,43,61,66,39'></path>
		</SvgIcon>
	);
};

FaceCheck = styled(FaceCheck, { name: 'face-check' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {},
	[theme.breakpoints.up('tablet')]: {},
	[theme.breakpoints.up('laptop')]: {
		width: '33.75px',
		height: '33.75px',
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%,-50%)',
		'& path': {
			strokeLinecap: 'square',
			strokeWidth: '6px',
			strokeDashoffset: '60px',
			strokeDasharray: ' 60px 60px',
			stroke: '#999',
			fill: 'none'
		}
	}
}));
export default FaceCheck;
