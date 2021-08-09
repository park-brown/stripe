import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

const FooterContainer = styled(Box, { name: 'footer-container' })(({ theme }) => ({
	width: '100%',
	height: '100vh',
	position: 'relative',
	zIndex: 0,
	overflow: 'hidden'
}));
const BackgroundMask = styled(Box, { name: 'footer-background-mask' })(({ theme }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0
}));
const Background = styled(Box, { name: 'background' })(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '100%',
	backgroundColor: '#f6f9fc',
	transform: 'skewY(-6deg)',
	transformOrigin: 'top right',
	overflow: 'hidden',
	zIndex: 1
}));
const TopLeftRibbon = styled(Box, { name: 'top-left-ribbton-container' })(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '40px',
	transform: 'skewY(-6deg)',
	transformOrigin: 'top right',
	zIndex: 2
}));
const TopleftRibbonBlue = styled(Box, { name: 'top-left-ribbon-blue' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '80px',
		height: '40px',
		backgroundColor: '#7a73ff',
		position: 'absolute',
		top: 0,
		left: 0
	},
	[theme.breakpoints.up('tablet')]: {
		width: '160px'
	}
}));
const TopLeftRibbonCyan = styled(Box, { name: 'top-left-ribbon-cyan' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '80px',
		height: '40px',
		backgroundColor: '#80e9ff',
		position: 'absolute',
		top: 0,
		left: 0,
		transform: 'translateY(-24px)  translate(-40%,0)'
	},
	[theme.breakpoints.up('tablet')]: {
		width: '160px'
	}
}));
const TopRightRibbonCyan = styled(Box, { name: 'top-right-ribbon-cyan' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '80px',
		height: '40px',
		backgroundColor: '#80e9ff',
		position: 'absolute',
		top: 0,
		right: 0
	},
	[theme.breakpoints.up('tablet')]: {
		width: '160px'
	}
}));
const TopRightRibbonBlue = styled(Box, { name: 'top-right-ribbon-blue' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '80px',
		height: '40px',
		backgroundColor: '#7a73ff',
		position: 'absolute',
		top: 0,
		right: 0,
		transform: 'translate(40%, 24px)'
	},
	[theme.breakpoints.up('tablet')]: {
		width: '160px'
	}
}));
const TopleftRibbonOverlay = styled(Box, { name: 'top-left-ribbon-overlay' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '80px',
		height: '16px',
		backgroundColor: '#0048e5',
		position: 'absolute',
		top: 0,
		left: 0,
		transform: 'translate(-40%,0)'
	},
	[theme.breakpoints.up('tablet')]: {
		width: '160px'
	}
}));
const TopRightRibbonOverlay = styled(Box, { name: 'top-right-ribbon-overlay' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '80px',
		height: '16px',
		backgroundColor: '#0048e5',
		position: 'absolute',
		top: 0,
		right: 0,
		transform: 'translate(40%,24px)'
	},
	[theme.breakpoints.up('tablet')]: {
		width: '160px'
	}
}));

const Footer = () => {
	return (
		<FooterContainer component='footer'>
			<BackgroundMask>
				<TopLeftRibbon>
					<TopleftRibbonBlue />
					<TopLeftRibbonCyan />
					<TopleftRibbonOverlay />
					<TopRightRibbonCyan />
					<TopRightRibbonBlue />
					<TopRightRibbonOverlay />
				</TopLeftRibbon>

				<Background />
			</BackgroundMask>
		</FooterContainer>
	);
};

export default Footer;
