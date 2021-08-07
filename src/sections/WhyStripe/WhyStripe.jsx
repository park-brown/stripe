import React from 'react';
import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
const SectionContainer = styled(Box, { name: 'why-stripe-section-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		height: '100vh',
		backgroundColor: '#fff',
		position: 'relative'
		// marginTop: '-160px'
		// clipPath: 'polygon(0 7%, 100% 0%, 100% 93%, 0% 100%)'
	},
	[theme.breakpoints.up('tablet')]: {
		// marginTop: '-145px'
		// clipPath: 'polygon(0 15%, 100% 0%, 100% 85%, 0% 100%)'
	},
	[theme.breakpoints.up('laptop')]: {
		// marginTop: '-135px'
		// clipPath: 'polygon(0 15%, 100% 0%, 100% 85%, 0% 100%)'
	}
}));
const LayOutContainer = styled(Box, { name: 'section-layout-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: 'auto',
		height: '100%',
		margin: theme.spacing(0, 4)
	},
	[theme.breakpoints.up('tablet')]: {
		width: 'auto',
		margin: theme.spacing(0, 4)
	},
	[theme.breakpoints.up('laptop')]: {
		width: 'auto',

		maxWidth: '1080px',
		margin: '0 auto'
	}
}));
const SectionLayOut = styled(Box, { name: 'why-stripe-seciton-layOut' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {},
	[theme.breakpoints.up('tablet')]: {},
	[theme.breakpoints.up('laptop')]: {}
}));
const TopRightRibbon = styled(Box, { name: 'why-stripe-section-top-right-ribbon' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		position: 'absolute',
		top: 0,
		right: 0,
		left: 0,
		height: '72px',
		overflow: 'hidden',
		backgroundColor: 'red',

		transform: 'skewY(-3deg) ',
		transformOrigin: 'top left'
	}
}));
const WhyStripe = () => {
	return <SectionContainer component='section'></SectionContainer>;
};

export default WhyStripe;
