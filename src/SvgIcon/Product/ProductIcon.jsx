import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let ProductIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='Product icon' viewBox='0 0 16 16'>
			<path
				fill='#88add2'
				fill-rule='evenodd'
				d='M5.43 6L5.1 7.22a3 3 0 0 0 5.8 1.56L11.64 6H15a1 1 0 0 1 0 2l-.9 7.11a1 1 0 0 1-1 .89H2.9a1 1 0 0 1-1-.89L1 8a1 1 0 1 1 0-2h4.43zM9.61.02l.97.26a.5.5 0 0 1 .35.6L9.57 6l-.6 2.26a1 1 0 0 1-1.94-.52l2-7.45a.5.5 0 0 1 .58-.27z'></path>
		</SvgIcon>
	);
};

ProductIcon = styled(ProductIcon, { name: 'atlas-icon' })(({ theme }) => ({
	width: '16px',
	height: '16px'
}));
export default ProductIcon;
