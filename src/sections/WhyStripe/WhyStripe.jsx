import React from 'react';
import { Box } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
const SectionContainer = styled(Box, { name: 'why-stripe-section-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		height: '100vh',
		backgroundColor: '#fff',
		position: 'relative',
		marginTop: '-60px',
		zIndex: -1
	},
	[theme.breakpoints.up('tablet')]: {
		marginTop: '-222px'
	},
	[theme.breakpoints.up('tabletX')]: {
		marginTop: '-168px'
	},
	[theme.breakpoints.up('laptop')]: {
		marginTop: '-300px'
	},
	[theme.breakpoints.up('desktop')]: {
		marginTop: '-340px'
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
		transform: 'skewY(-6deg) ',
		transformOrigin: 'top right'
	}
}));
const TopRightRibbonInner = styled(Box, { name: 'why-stripe-section-top-right-ribbon-top' })(({ theme }) => ({
	width: '315px',
	height: '40px',
	backgroundColor: '#80e9ff',
	position: 'absolute',
	top: 0,
	right: 0
}));
const WhyStripe = () => {
	return (
		<SectionContainer component='section'>
			{/* <TopRightRibbon>
				<TopRightRibbonInner />
			</TopRightRibbon> */}
			<LayOutContainer></LayOutContainer>
		</SectionContainer>
	);
};

export default WhyStripe;
