import React from 'react';
import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import WarbyParkerCheckoutGraphicWrapper from './WarbyParkerCheckoutGraphicWrapper';
import AwayCheckoutGraphicWrapper from './AwayCheckoutGraphicWrapper';
import GlossierCheckoutGraphicWrapper from './GlossierCheckoutGraphicWrapper';

const Container = styled(Box, { name: 'animated-apple-pay-graphic' })(({ theme, gridArea }) => ({
	position: 'relative',
	width: '301px',
	height: '615px',
	borderRadius: '42px',
	padding: theme.spacing(2),
	background: '#f6f9fc',
	boxShadow:
		'0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%)',
	gridArea: gridArea
}));
const Screen = styled(Box, { name: 'animated-apple-pay-graphic-screen' })(({ theme }) => ({
	position: 'relative',
	height: '100%',
	width: '100%',
	borderRadius: '34px',
	background: '#fff',
	maskImage: 'radial-gradient(#fff,#000)'
}));

const AnimatedApplePayGraphic = ({ gridArea }) => {
	return (
		<Container gridArea={gridArea}>
			<Screen>
				{/* <WarbyParkerCheckoutGraphicWrapper /> */}
				{/* <AwayCheckoutGraphicWrapper /> */}
				{/* <GlossierCheckoutGraphicWrapper /> */}
			</Screen>
		</Container>
	);
};

export default AnimatedApplePayGraphic;
