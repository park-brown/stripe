import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import CloseToTheMedal from '../../SvgIcon/whySectionIcon/CloseToTheMedal/CloseToTheMedal';
import FastestImprovingPlatform from '../../SvgIcon/whySectionIcon/FastestImprovingPlatform/FastestImprovingPlatform';
import BattleTested from '../../SvgIcon/whySectionIcon/BattleTested/BattleTested';
import IntelligentOptimization from '../../SvgIcon/whySectionIcon/IO/IntelligentOptimization';

const SectionContainer = styled(Box, { name: 'why-stripe-section-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		backgroundColor: '#fff',
		position: 'relative',
		marginTop: `calc(100vw * -0.1051)`,
		zIndex: -1
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
	[theme.breakpoints.up('mobile')]: {
		padding: `calc(100vw * 0.1051 + 100px) 0 calc(100vw * 0.1051 + 100px) 0`,
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: '32px'
	},
	[theme.breakpoints.up('tablet')]: {
		gap: '48px'
	},
	[theme.breakpoints.up('laptop')]: {
		gap: '64px'
	}
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
const TopRightRibbonCyan = styled(Box, { name: 'why-stripe-section-top-right-ribbon-top' })(({ theme }) => ({
	width: '315px',
	height: '40px',
	backgroundColor: '#80e9ff',
	position: 'absolute',
	top: 0,
	right: 0
}));
const BottomLeftRibbon = styled(Box, { name: 'why-stripe-section-bottom-left-ribbon' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		height: '72px',
		overflow: 'hidden',
		transform: 'skewY(-6deg) ',
		transformOrigin: 'bottom left'
	}
}));
const BottomleftRibbonBlue = styled(Box, { name: 'why-stripe-section-bottom-left-ribbon-blue' })(({ theme }) => ({
	width: '315px',
	height: '40px',
	backgroundColor: '#7a73ff',
	position: 'absolute',
	bottom: 0,
	left: 0
}));
const BottomLeftRibbonCyan = styled(Box, { name: 'why-stripe-section-bottom-left-ribbon-cyan' })(({ theme }) => ({
	width: '160px',
	height: '40px',
	backgroundColor: '#80e9ff',
	position: 'absolute',
	bottom: 0,
	left: 0,
	transform: 'translateY(-24px) translateX(157.5px) translate(-50%,0)'
}));
const BottomleftRibbonOverlay = styled(Box, { name: 'why-stripe-section-bottom-left-ribbon-overlay' })(({ theme }) => ({
	width: '160px',
	height: '16px',
	backgroundColor: '#0048e5',
	position: 'absolute',
	bottom: 0,
	left: 0,
	transform: 'translateY(-24px) translateX(157.5px) translate(-50%,0)'
}));
const TopRightRibbonBlue = styled(Box, { name: 'why-stripe-section-top-right-ribbon-Bottom' })(({ theme }) => ({
	width: '160px',
	height: '40px',
	backgroundColor: '#7a73ff',
	position: 'absolute',
	top: 0,
	right: 0,
	transform: 'translateY(24px) translateX(-157.5px) translate(50%,0)'
}));
const TopRightRibbonOverlay = styled(Box, { name: 'why-stripe-section-top-right-ribbon-overlay' })(({ theme }) => ({
	width: '160px',
	height: '16px',
	backgroundColor: '#0048e5',
	position: 'absolute',
	top: 0,
	right: 0,
	transform: 'translateY(24px) translateX(-157.5px) translate(50%,0)'
}));
const Header = styled(Box, { name: 'why-section-layOut-header' })(({ theme }) => ({
	width: '100%',
	maxWidth: '764px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	gap: '24px',
	padding: theme.spacing(0, 0, 0, 4)
}));
const FeatureContainer = styled(Box, { name: 'why-scetion-feature-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		padding: theme.spacing(0, 0, 0, 4),
		display: 'grid',
		gridTemplateColumns: 'auto',
		gridTemplateRows: 'repeat(4,1fr)',
		gap: '24px',
		gridTemplateAreas: `"close-to-the-metal"
		                    "fastest-improving-platform"
		                    "battle-tested-reliability"
		                    "intelligent-optimizations"`
	},
	[theme.breakpoints.up('tablet')]: {
		gridTemplateColumns: 'repeat(2,1fr)',
		gridTemplateRows: 'repeat(2,auto)',
		gridTemplateAreas: `"close-to-the-metal        fastest-improving-platform"
		                    "battle-tested-reliability intelligent-optimizations"`
	},
	[theme.breakpoints.up('laptop')]: {
		gridTemplateColumns: 'repeat(4,1fr)',
		gridTemplateRows: 'auto',
		gap: '0px',
		gridTemplateAreas: `"close-to-the-metal fastest-improving-platform battle-tested-reliability intelligent-optimizations"`
	}
}));
const FeatureItem = styled(Box, { name: 'feature-item' })(({ theme, gridArea }) => ({
	gridArea: gridArea,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	gap: '8px'
}));
const FeatureItemHeader = styled(Box, { name: 'feature-item-header' })(({ theme }) => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	gap: '16px',
	alignItems: 'flex-start'
}));
const FeatureItemHeaderTitle = styled(Typography, { name: 'feature-item-header-title' })(({ theme }) => ({
	...theme.typography.HomepageHeroHeader__Copy__body,
	color: '#000',
	position: 'relative',
	width: '100%',
	textAlign: 'left',
	'&::before': {
		position: 'absolute',
		content: '""',
		top: '5px',
		left: '-16px',
		width: '1px',
		height: '15px',
		backgroundColor: '#635bff',
		display: 'block'
	}
}));
const FeatureItemBody = styled(Box, { name: 'feature-item-body' })(({ theme }) => ({
	...theme.typography.why__section__feature__body,

	width: '100%',

	padding: theme.spacing(0, 8, 0, 0)
}));
const WhyStripe = () => {
	return (
		<SectionContainer component='section'>
			<TopRightRibbon>
				<TopRightRibbonCyan />
				<TopRightRibbonBlue />
				<TopRightRibbonOverlay />
			</TopRightRibbon>
			<BottomLeftRibbon>
				<BottomleftRibbonBlue />
				<BottomLeftRibbonCyan />
				<BottomleftRibbonOverlay />
			</BottomLeftRibbon>
			<LayOutContainer>
				<SectionLayOut>
					<Header>
						<Typography variant='unifiedPlatform_title_caption' component='h2' sx={{ color: '#635bff' }}>
							why stripe
						</Typography>
						<Typography variant='DesignedForDev_title_body' component='h1' sx={{ color: '#000 !important' }}>
							A technology-first approach to payments and finance
						</Typography>
					</Header>
					<FeatureContainer>
						<FeatureItem gridArea='close-to-the-metal'>
							<FeatureItemHeader>
								<Box className='icon-container' sx={{ width: '40px', height: '40px', position: 'relative' }}>
									<CloseToTheMedal />
								</Box>
								<FeatureItemHeaderTitle>close-to-the-metal</FeatureItemHeaderTitle>
							</FeatureItemHeader>
							<FeatureItemBody>
								From{' '}
								<Typography variant='why__section__feature__body' component='span' sx={{ color: '#635bff' }}>
									direct integrations
								</Typography>{' '}
								with card networks and banks to checkout flows in the browser, we operate on and optimize at every level
								of the financal stack.
							</FeatureItemBody>
						</FeatureItem>
						<FeatureItem gridArea='fastest-improving-platform'>
							<FeatureItemHeader>
								<Box className='icon-container' sx={{ width: '40px', height: '40px', position: 'relative' }}>
									<FastestImprovingPlatform />
								</Box>
								<FeatureItemHeaderTitle>fastest-improving-platform</FeatureItemHeaderTitle>
							</FeatureItemHeader>
							<FeatureItemBody>
								We release{' '}
								<Typography variant='why__section__feature__body' component='span' sx={{ color: '#635bff' }}>
									hundreds of features
								</Typography>{' '}
								and improvements each year to help you stay ahead of industry shifts. (On average, we deploy our
								production API 16x per day.)
							</FeatureItemBody>
						</FeatureItem>
						<FeatureItem gridArea='battle-tested-reliability'>
							<FeatureItemHeader>
								<Box className='icon-container' sx={{ width: '40px', height: '40px', position: 'relative' }}>
									<BattleTested />
								</Box>
								<FeatureItemHeaderTitle>battle-tested-reliability</FeatureItemHeaderTitle>
							</FeatureItemHeader>
							<FeatureItemBody>
								Our systems operate with{' '}
								<Typography variant='why__section__feature__body' component='span' sx={{ color: '#635bff' }}>
									99.9%+
								</Typography>{' '}
								uptime and are highly scalable and redundant. Stripe is certified to the highest compliance standards.
							</FeatureItemBody>
						</FeatureItem>
						<FeatureItem gridArea='intelligent-optimizations'>
							<FeatureItemHeader>
								<Box className='icon-container' sx={{ width: '40px', height: '40px', position: 'relative' }}>
									<IntelligentOptimization />
								</Box>
								<FeatureItemHeaderTitle>intelligent optimizations</FeatureItemHeaderTitle>
							</FeatureItemHeader>
							<FeatureItemBody>
								Our machine learning models train on
								<Typography variant='why__section__feature__body' component='span' sx={{ color: '#635bff' }}>
									billions
								</Typography>{' '}
								of data points and help increase revenue across conversion, fraud, revenue recovery, and more
							</FeatureItemBody>
						</FeatureItem>
					</FeatureContainer>
				</SectionLayOut>
			</LayOutContainer>
		</SectionContainer>
	);
};

export default WhyStripe;
