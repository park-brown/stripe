import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let PenIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='pen icon' viewBox='0 0 16 16'>
			<path
				d='M12 14.2a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2h8zM8.5 0L13 7.2l-1.71 6H4.7L3 7.2 7.5 0v6.29a1.5 1.5 0 1 0 1 0V0z'
				fill='#88add2'
				fillRule='nonzero'></path>
		</SvgIcon>
	);
};

PenIcon = styled(PenIcon, { name: 'pen-icon' })(({ theme }) => ({
	width: '16px',
	height: '16px',
	position: 'relative',
	top: '-2px'
}));
export default PenIcon;
