import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';
let VisaLogo = (props) => {
	return (
		<SvgIcon {...props} titleAccess='visa logo' viewBox='0 0 84 27'>
			<path
				fill='#fff'
				d='M42 1l-5.43 26H30l5.43-26H42zm28 17h6L73.8 8 70 18zm7.81 9l-.8-3.88h-8.59L67.02 27H60L70.04 2.9A3.04 3.04 0 0 1 72.89 1h5.7L84 27h-6.19zm-17.09-8.94C60.7 23.5 55.95 27 48.7 27c-3.1-.03-6.07-.66-7.69-1.39l1.25-5.72c1.61.73 3.63 1.7 7.1 1.65 1.99-.03 4.12-.8 4.14-2.56.01-1.14-.9-1.96-3.59-3.24-2.61-1.25-6.09-3.35-6.05-7.1C43.9 3.53 48.7 0 55.53 0c2.67 0 4.8.57 6.47 1.15L60.79 6.7a13.29 13.29 0 0 0-6.82-1.16c-2 .25-2.9 1.25-2.93 2.18-.07 3.08 9.71 3.46 9.68 10.35zM32 1L20.96 27h-7.2L8.35 6.25C8 4.97 7.72 4.51 6.72 3.97A28.75 28.75 0 0 0 0 1.75L.16 1h11.59c1.48 0 2.8.97 3.14 2.65l2.87 15.05L24.85 1H32z'></path>
		</SvgIcon>
	);
};

VisaLogo = styled(VisaLogo, { name: 'visa-logo' })(({ theme }) => ({
	width: '84px',
	height: '27px',
	position: 'absolute',
	bottom: '18px',
	right: '18px'
}));
export default VisaLogo;
