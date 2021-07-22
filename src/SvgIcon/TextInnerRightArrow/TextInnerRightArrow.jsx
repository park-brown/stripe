import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
let TextInnerRightArrow = (props) => {
	return (
		<SvgIcon {...props} titleAccess='inner-right-arrow' viewBox='0 0 10 10'>
			<ArrowForwardIcon />
		</SvgIcon>
	);
};

TextInnerRightArrow = styled(TextInnerRightArrow, { name: 'inner-right-arrow' })(({ theme }) => ({
	width: '15px',
	height: '15px'
}));
export default TextInnerRightArrow;
