import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const HeroContainer = styled(Box, { name: 'hero-section-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		position: 'relative',
		top: '-76px',
		left: 0,
		right: 0,
		overflow: 'hidden',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		zIndex: -1
	},
	[theme.breakpoints.up('laptop')]: {
		top: '-68px'
	}
}));
const HeroSectionLayOutContainer = styled(Box, { name: 'hero-section-layout-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		height: '100%',
		margin: theme.spacing(0, 4, 0, 4)
	},
	[theme.breakpoints.up('laptop')]: {
		maxWidth: '1080px'
	}
}));
const HeroSectionCanvas = styled('canvas', { name: 'hero-section-canvas' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '600px',
		overflow: 'hidden',
		zIndex: -2,
		clipPath: 'polygon(0 0, 100% 0%, 100% 60%, 0% 100%)',
		'--gradient-color-0': theme.palette.canvas.gradientColorZero,
		'--gradient-color-1': theme.palette.canvas.gradientColorOne,
		'--gradient-color-2': theme.palette.canvas.gradientColorTwo,
		'--gradient-color-3': theme.palette.canvas.gradientColorThree
	},

	[theme.breakpoints.up('tablet')]: {
		clipPath: 'polygon(0 0, 100% 0%, 100% 50%, 0% 100%)'
	},
	[theme.breakpoints.up('laptop')]: {
		clipPath: 'polygon(0 0, 100% 0%, 100% 40%, 0% 100%)'
	}
}));
const Hero = () => {
	// run gradient
	useEffect(() => {});
	return (
		<HeroContainer>
			<HeroSectionCanvas id='gradient-canvas' />
			<HeroSectionLayOutContainer></HeroSectionLayOutContainer>
		</HeroContainer>
	);
};

export default Hero;
