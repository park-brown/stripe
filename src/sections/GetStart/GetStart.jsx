import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { FeatureItem, FeatureItemBody, FeatureItemHeader, FeatureItemHeaderTitle } from '../WhyStripe/WhyStripe';
import FastestImprovingPlatform from '../../SvgIcon/whySectionIcon/FastestImprovingPlatform/FastestImprovingPlatform';
const SectionContainer = styled(Box, { name: 'get-start-section-container' })(({ theme }) => ({
	width: '100%',
	height: '100vh',
	overflow: 'hidden',
	position: 'relative',
	zIndex: 0
}));
const SectionLayOutContainer = styled(Box, { name: 'get-start-section-layout-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: 'auto',
		height: '100%',
		margin: theme.spacing(0, 4),
		position: 'relative',
		zIndex: 2,
		padding: '120px 0 120px 0'
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
const LayOut = styled(Box, { name: 'get-start-layout' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'repeat(3,auto)',
		gridTemplateAreas: ` "header"
                        "know-what-you-pay"
                        "init-integration"`,
		gap: '48px 0'
	},
	[theme.breakpoints.up('tablet')]: {
		gridTemplateColumns: 'repeat(2,1fr)',
		gridTemplateRows: 'repeat(2,auto)',
		gridTemplateAreas: `"header               ."
                        "know-what-you-pay    init-integration"`,
		gap: '32px 0'
	},
	[theme.breakpoints.up('laptop')]: {
		gridTemplateColumns: 'repeat(4,1fr)',
		gridTemplateRows: '1fr',
		gridTemplateAreas: `"header     header    know-what-you-pay     init-integration"`,
		gap: 0
	}
}));
const Header = styled(Box, { name: 'layout-header' })(({ theme }) => ({
	gridArea: 'header',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	gap: '24px',
	padding: theme.spacing(0, 0, 0, 4)
}));
const ContainedButton = styled(Button, { name: 'contained-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.HomepageHeroHeader__Copy__body,
		padding: '6px 12px 6px 16px',
		borderRadius: '960px',
		color: '#fff',
		fontWeight: 550,
		whiteSpace: 'nowrap',
		textTransform: 'none',
		backgroundColor: '#635bff',
		'&:hover': {
			backgroundColor: '#000'
		},
		'& .MuiButton-endIcon': {
			svg: {
				width: '12px',
				height: '12px'
			},
			'svg:nth-of-type(1)': {
				display: 'none'
			}
		},
		'&:hover .MuiButton-endIcon': {
			'svg:nth-of-type(1)': {
				display: 'block'
			},
			'svg:nth-of-type(2)': {
				display: 'none'
			}
		}
	}
}));
const ContactButton = styled(Button, { name: 'text-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.HomepageHeroHeader__Copy__body,
		padding: '6px 12px 6px 16px',
		borderRadius: '960px',
		color: '#635bff',
		whiteSpace: 'nowrap',
		fontWeight: 550,
		textTransform: 'none',
		backgroundColor: 'transparent',
		'&:hover': {
			backgroundColor: 'transparent',
			color: '#000'
		},
		'& .MuiButton-endIcon': {
			svg: {
				width: '12px',
				height: '12px'
			},
			'svg:nth-of-type(1)': {
				display: 'none'
			}
		},
		'&:hover .MuiButton-endIcon': {
			'svg:nth-of-type(1)': {
				display: 'block'
			},
			'svg:nth-of-type(2)': {
				display: 'none'
			}
		}
	}
}));

const GetStart = () => {
	return (
		<SectionContainer component='section'>
			<SectionLayOutContainer>
				<LayOut>
					<Header>
						<Typography variant='getStart__section__copy__title' component='h1'>
							Ready to get started?
						</Typography>
						<Typography
							variant='HomepageHeroHeader__Copy__body'
							component='p'
							sx={{ color: '#0a2540', maxWidth: { mobile: '100%', tablet: '300px', laptop: '430px' } }}>
							Explore{' '}
							<Typography variant='HomepageHeroHeader__Copy__body' component='span' sx={{ color: '#635bff' }}>
								Stripe payments
							</Typography>
							, or create an account instantly and start accepting payments. You can also contact us to design a custom
							package for your business.
						</Typography>
						<Box sx={{ width: '100%', display: 'flex', alignItems: 'center', gap: '8px' }}>
							<ContainedButton
								endIcon={
									<React.Fragment>
										<ArrowForwardIcon />
										<ArrowForwardIosIcon />
									</React.Fragment>
								}>
								Start now
							</ContainedButton>
							<ContactButton
								endIcon={
									<React.Fragment>
										<ArrowForwardIcon />
										<ArrowForwardIosIcon />
									</React.Fragment>
								}>
								Contact Sales
							</ContactButton>
						</Box>
					</Header>

					<FeatureItem
						gridArea='know-what-you-pay'
						sx={{ padding: { mobile: '0 0 0 16px', tablet: '0 0 0 16px', laptop: 0 } }}>
						<FeatureItemHeader>
							<Box className='icon-container' sx={{ width: '40px', height: '40px', position: 'relative' }}>
								<FastestImprovingPlatform />
							</Box>
							<FeatureItemHeaderTitle>Always know what you pay</FeatureItemHeaderTitle>
						</FeatureItemHeader>
						<FeatureItemBody>Integrated per-transaction pricing with no hidden fees.</FeatureItemBody>
						<Box sx={{ margin: 'auto 0 0 -16px' }}>
							<ContactButton
								endIcon={
									<React.Fragment>
										<ArrowForwardIcon />
										<ArrowForwardIosIcon />
									</React.Fragment>
								}>
								Pricing details
							</ContactButton>
						</Box>
					</FeatureItem>
					<FeatureItem
						gridArea='init-integration'
						sx={{ padding: { mobile: '0 0 0 16px', tablet: '0 0 0 16px', laptop: 0 } }}>
						<FeatureItemHeader>
							<Box className='icon-container' sx={{ width: '40px', height: '40px', position: 'relative' }}>
								<FastestImprovingPlatform />
							</Box>
							<FeatureItemHeaderTitle>Start your integration</FeatureItemHeaderTitle>
						</FeatureItemHeader>
						<FeatureItemBody>Get up and running with Stripe in as little as 10 minutes.</FeatureItemBody>
						<Box sx={{ margin: 'auto 0 0 -16px' }}>
							<ContactButton
								endIcon={
									<React.Fragment>
										<ArrowForwardIcon />
										<ArrowForwardIosIcon />
									</React.Fragment>
								}>
								API reference
							</ContactButton>
						</Box>
					</FeatureItem>
				</LayOut>
			</SectionLayOutContainer>
		</SectionContainer>
	);
};

export default GetStart;
