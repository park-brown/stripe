import React, { useRef, useEffect } from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';

let PostMateStripe = (props) => {
	const { index } = props;
	const postmateSvg = useRef();
	const interval = 300;
	useEffect(() => {
		if (index === 0) {
			const svg = postmateSvg;
			const { childNodes } = svg.current;
			childNodes.forEach((element) => {
				element.style.opacity = 0;
			});
			setTimeout(() => {
				childNodes.forEach((element, index) => {
					setTimeout(() => {
						element.style.opacity = 1;
					}, index * interval);
				});
			}, 525); // 225 transition + 100 delay + 300 interval
		}
	}, [index]);

	return (
		<SvgIcon ref={postmateSvg} {...props} titleAccess='post-mate-stripe' viewBox='0 0 435 134'>
			<path d='M3.84 44.2a3.84 3.84 0 0 0 3.85-3.84v-.64H0v.64a3.84 3.84 0 0 0 3.84 3.85z' fill='#959698'></path>
			<circle fill='#FFF33D' cx='7.37' cy='32.35' r='1.6'></circle>
			<path d='M17.3 32.03a3.84 3.84 0 0 1 3.84 3.85v.64h-7.69v-.64a3.84 3.84 0 0 1 3.85-3.85z' fill='#959698'></path>
			<circle fill='#6E6F71' cx='115.65' cy='19.54' r='2.24'></circle>
			<path d='M105.4 23.38v-8.32h6.08a4.16 4.16 0 0 1 0 8.32h-6.09z' fill='#FFF33D'></path>
			<path d='M94.82 18.95h10.58a4.8 4.8 0 0 0 0-9.61h-2.89a7.69 7.69 0 0 0-7.69 7.69v1.92z' fill='#E8E9E9'></path>
			<path
				d='M167.86 15.37v3.58h21.26a9.47 9.47 0 0 0 0-18.95h-5.9a15.37 15.37 0 0 0-15.36 15.37z'
				fill='#E8E9E9'></path>
			<path
				d='M201.26 21.74h21.26a9.47 9.47 0 0 1 0 18.94h-5.9a15.37 15.37 0 0 1-15.36-15.36v-3.58z'
				fill='#FFF33D'></path>
			<path d='M285.75 19.22H296v7.05a5.13 5.13 0 1 1-10.25 0v-7.05z' fill='#E8E9E9'></path>

			<circle fill='#FFF33D' cx='379.84' cy='60.94' r='54'></circle>
		</SvgIcon>
	);
};

PostMateStripe = styled(PostMateStripe, { name: 'post-mate-stripe' })(({ theme }) => ({
	width: '435px',
	height: '134px',
	position: 'absolute',
	top: '45px',
	right: '-80px',
	'& > *': {
		transition: `${theme.transitions.create(['opacity'], {
			easing: theme.transitions.easing.easeInOut,
			duration: theme.transitions.duration.standard // 300ms,
		})}`
	}
}));
export default PostMateStripe;
