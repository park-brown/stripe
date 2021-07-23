import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let TaxIcon = (props) => {
	return (
		<SvgIcon {...props} titleAccess='Tax logo' viewBox='0 0 40 40'>
			<path
				d='M19.049.00995851C22.4341.325767 25.7367 1.28014 28.7794 2.83046c3.0426 1.55031 5.756 3.66123 8.0012 6.2142.9142 1.03954.6576 2.61624-.4624 3.42994L20.5259 23.9483c-1.6569 1.2039-3.98.0202-3.98-2.0279V2.40011c0-1.38439 1.1247-2.518749 2.5031-2.39015149z'
				fill='#e91e63'></path>
			<circle cx='17.6666' cy='24.3334' transform='rotate(-90 17.6666 24.3334)' fill='#96F' r='15.6666'></circle>
			<path
				d='M31.099 16.2665l-10.5731 7.6818c-1.6569 1.2038-3.98.0201-3.98-2.028V8.70618c.37-.02614.7436-.03943 1.1202-.03943 5.7019 0 10.6924 3.04605 13.4329 7.59975z'
				fill='
        #7b1fa2'></path>
		</SvgIcon>
	);
};

TaxIcon = styled(TaxIcon, { name: 'tax-icon' })(({ theme }) => ({
	width: '32px',
	height: '32px'
}));
export default TaxIcon;
