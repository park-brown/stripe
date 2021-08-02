import { Box } from '@material-ui/core';
import { styled } from '@material-ui/system';

const TestIconXs = styled(Box, { name: 'test-icon-xs' })(({ theme }) => ({
	width: '17px',
	height: '11px',
	border: '1px solid #c5cfd9',
	borderRadius: '6px',
	position: 'absolute',
	top: '50%',
	transform: 'translateY(-50%)',
	'&::before': {
		position: 'absolute',
		top: 0,
		left: 0,
		content: '""',
		display: 'block',
		width: '9px',
		height: '9px',
		borderRadius: '50%',
		background: '#fff',
		boxShadow: '0 1px 3px 0 rgb(6 24 44 / 40%)'
	}
}));
export default TestIconXs;
