import React, { useState, useEffect } from 'react';
import { Box, Fade } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import WarbyParkerCheckoutGraphicWrapper from './WarbyParkerCheckoutGraphicWrapper';
import AwayCheckoutGraphicWrapper from './AwayCheckoutGraphicWrapper';
import GlossierCheckoutGraphicWrapper from './GlossierCheckoutGraphicWrapper';

const Container = styled(Box, { name: 'animated-apple-pay-graphic' })(({ theme, gridArea }) => ({
	[theme.breakpoints.up('mobile')]: {
		position: 'relative',
		width: '301px',
		height: '615px',
		borderRadius: '42px',
		padding: theme.spacing(2),
		background: '#f6f9fc',
		boxShadow:
			'0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%)',
		gridArea: gridArea,
		transform: 'scale(0.372093)',
		transformOrigin: 'top left'
	},
	[theme.breakpoints.up('tablet')]: {
		transform: 'scale(0.840532)'
	},
	[theme.breakpoints.up('laptop')]: {
		transform: 'scale(0.912116)'
	}
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
	const interval = 20000;
	const [index, setIndex] = useState(0);

	//shuffle effect
	useEffect(() => {
		switch (index) {
			case 0:
				setTimeout(
					() => {
						setIndex((prev) => prev + 1);
					},

					interval
				);
				break;
			case 1:
				setTimeout(
					() => {
						setIndex((prev) => prev + 1);
					},

					interval
				);
				break;
			case 2:
				setTimeout(
					() => {
						setIndex(0);
					},

					interval
				);
				break;
			default:
				setIndex(0);
		}
	}, [index]);

	return (
		<Container gridArea={gridArea}>
			<Screen>
				<Fade in={index === 0}>
					<Box>
						<WarbyParkerCheckoutGraphicWrapper index={index} />
					</Box>
				</Fade>
				<Fade in={index === 1}>
					<Box>
						<AwayCheckoutGraphicWrapper index={index} />
					</Box>
				</Fade>
				<Fade in={index === 2}>
					<Box>
						<GlossierCheckoutGraphicWrapper index={index} />
					</Box>
				</Fade>
			</Screen>
		</Container>
	);
};

export default AnimatedApplePayGraphic;
