import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let APIchangeLog = (props) => {
	return (
		<SvgIcon {...props} titleAccess='api-change-log logo' viewBox='0 0 16 16'>
			<path
				d='M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zM6.58 5.72a.64.64 0 0 0-.92-.91L2.93 7.54a.64.64 0 0 0 0 .91l2.73 2.73a.64.64 0 0 0 .92-.91L4.3 7.99l2.28-2.27zm6.58 1.84l-2.73-2.74a.64.64 0 0 0-.91.91l2.27 2.28-2.27 2.28a.64.64 0 0 0 .9.9l2.74-2.73a.64.64 0 0 0 0-.9z'
				fill='#88add2'
				fillRule='nonzero'></path>
		</SvgIcon>
	);
};

APIchangeLog = styled(APIchangeLog, { name: 'api-change-log-icon' })(({ theme }) => ({
	width: '16px',
	height: '16px',
	'& path': {
		stroke: 'none !important'
	}
}));
export default APIchangeLog;
