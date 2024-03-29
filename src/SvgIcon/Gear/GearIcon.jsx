import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let GearIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='Gear icon' viewBox='0 0 12 12'>
			<path
				fill='#425466'
				d='M10.15 4.76c-.17 0-1.2 0-1.64-.52 0-.08-.08-.08-.08-.17-.09-.6.69-1.39.77-1.48.17-.17.17-.43.09-.52a3.75 3.75 0 0 1-.52-.6c-.09-.18-.34-.1-.52.08-.17.17-.86.87-1.46.78-.08 0-.08-.08-.17-.08C6.1 1.9 6.1.85 6.1.68c0-.26-.08-.43-.26-.43h-.86c-.17 0-.25.17-.25.43 0 .18 0 1.22-.52 1.65-.09 0-.09.09-.17.09-.6 0-1.3-.7-1.47-.87-.17-.17-.43-.17-.51-.08-.09.17-.43.52-.6.6-.1.09-.1.35.08.52.17.18.86.87.78 1.48 0 .09-.1.09-.1.17-.34.52-1.37.52-1.54.52-.26 0-.43.09-.43.26v.78c0 .18.17.35.43.35.17 0 1.2 0 1.64.52 0 .09.08.09.08.17.09.61-.69 1.4-.77 1.48-.18.17-.18.43-.09.52a4 4 0 0 1 .52.6c.08.1.34.1.51-.08.18-.17.86-.87 1.47-.78.08 0 .08.09.17.09.52.43.52 1.39.52 1.65 0 .17.17.43.34.43h.77c.18 0 .35-.17.35-.43 0-.18 0-1.22.52-1.65.08 0 .08-.09.17-.09.6-.09 1.37.7 1.46.78.17.18.43.18.52.09l.6-.6c.08-.1.08-.36-.09-.53-.17-.17-.86-.87-.77-1.48 0-.08.08-.08.08-.17.44-.52 1.38-.52 1.64-.52.17 0 .43-.17.43-.35v-.78a.78.78 0 0 0-.6-.26zM5.4 7.36c-1.03 0-1.89-.86-1.89-1.9s.86-1.91 1.9-1.91c1.03 0 1.89.87 1.89 1.9 0 1.05-.86 1.92-1.9 1.92z'></path>
		</SvgIcon>
	);
};

GearIcon = styled(GearIcon, { name: 'Gear-icon' })(({ theme }) => ({
	width: '12px',
	height: '12px',
	margin: 0
}));
export default GearIcon;
