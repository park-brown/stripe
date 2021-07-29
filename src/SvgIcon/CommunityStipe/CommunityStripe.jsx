import React, { useEffect, useRef } from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let CommunityStripe = (props) => {
	const { index } = props;
	const CommunitySvg = useRef();
	const interval = 225;
	useEffect(() => {
		const svg = CommunitySvg;
		const { childNodes } = svg.current;

		childNodes.forEach((element) => {
			element.style.opacity = 0;
		});
		if (index === 1) {
			setTimeout(() => {
				childNodes.forEach((element, index) => {
					setTimeout(() => {
						element.style.opacity = 0.5;
					}, index * interval);
				});
			}, 1000);
		}
	}, [index]);
	return (
		<SvgIcon ref={CommunitySvg} {...props} titleAccess='community-stripe' viewBox='0 0 103 107'>
			<circle cx='10.2' cy='52.83' r='10.2'></circle>
			<circle cx='30.59' cy='30.59' r='10.2'></circle>
			<circle cx='50.98' cy='10.2' r='10.2'></circle>
			<circle cx='91.76' cy='52.83' r='10.2'></circle>
			<circle cx='50.98' cy='95.46' r='10.2'></circle>
			<circle cx='30.59' cy='75.07' r='10.2'></circle>
			<path d='M71.37 20.39a10.2 10.2 0 0 1 0 20.39c-1.73 0-3 1.26-5.12 2.7-5.1 3.5-4.56 9.08-4.99 9.36.43.28-.1 5.87 5 9.35 2.11 1.46 3.38 2.71 5.1 2.71a10.2 10.2 0 1 1-10.19 10.2c0-1.9-.06-3.1-1.57-6.04-1.35-2.64-5.9-6.01-8.62-6.01-.03 0-.04-.01-.03-.02a10.2 10.2 0 0 1 .03-20.4h.2c2.75-.16 7.1-3.44 8.42-6.01 1.51-2.94 1.57-4.15 1.57-6.03a10.2 10.2 0 0 1 10.2-10.2z'></path>
		</SvgIcon>
	);
};

CommunityStripe = styled(CommunityStripe, { name: 'community-stripe' })(({ theme }) => ({
	width: '103px',
	height: '107px',
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%,-50%)',
	'& > *': {
		fill: '#fff',
		transition: `${theme.transitions.create(['opacity'], {
			easing: theme.transitions.easing.easeInOut,
			duration: theme.transitions.duration.standard // 300ms,
		})}`
	}
}));
export default CommunityStripe;
