import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let PlatFormIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='Platform icon' viewBox='0 0 16 16'>
			<path
				d='M6.98 0a.52.52 0 0 0-.25.08L.24 4.03a.5.5 0 0 0-.24.43c0 .17.1.33.24.42l6.49 3.95c.17.1.37.1.54 0l6.49-3.95a.5.5 0 0 0 .24-.42.5.5 0 0 0-.24-.43L7.27.08a.52.52 0 0 0-.3-.08zm-5.5 6.82l-1.24.76A.5.5 0 0 0 0 8c0 .17.1.33.24.42l6.49 3.96c.17.1.37.1.54 0l6.49-3.96A.5.5 0 0 0 14 8a.5.5 0 0 0-.24-.42l-1.25-.76-4.7 2.86a1.58 1.58 0 0 1-1.62 0l-4.7-2.86zm0 3.54l-1.24.76a.5.5 0 0 0-.24.43c0 .17.1.33.24.42l6.49 3.95c.17.1.37.1.54 0l6.49-3.95a.5.5 0 0 0 .24-.42.5.5 0 0 0-.24-.43l-1.25-.76-4.7 2.87a1.58 1.58 0 0 1-1.62 0l-4.7-2.87z'
				fill='#88add2'
				fill-rule='nonzero'></path>
		</SvgIcon>
	);
};

PlatFormIcon = styled(PlatFormIcon, { name: 'platform-icon' })(({ theme }) => ({
	width: '16px',
	height: '16px'
}));
export default PlatFormIcon;
