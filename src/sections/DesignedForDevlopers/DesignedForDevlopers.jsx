import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { styled } from '@material-ui/core/styles';
import AnimatedIconForLibraries from '../../SvgIcon/AnimatedIcon/AnimatedIconForLibraries';
import AnimatedIconForExplore from '../../SvgIcon/AnimatedIcon/AnimatedIconForExplore';
const SectionContainer = styled(Box, { name: 'designed-for-developers-section' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		// height: '1300px',
		backgroundColor: '#0a2540',
		overflow: 'hidden',
		position: 'relative',
		border: 'none',
		marginTop: '-150px',
		clipPath: 'polygon(0 5%, 100% 2%, 100% 92%, 0% 95%)'
	},
	[theme.breakpoints.up('tablet')]: {
		marginTop: '-160px',
		clipPath: 'polygon(0 12%, 100% 0%, 100% 88%, 0% 100%)'
	},
	[theme.breakpoints.up('laptop')]: {
		marginTop: '-160px',
		clipPath: 'polygon(0 12%, 100% 0%, 100% 88%, 0% 100%)'
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
const LayOut = styled(Box, { name: 'section-layout' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		height: '100%',
		padding: '200px 0  150px 0 ',
		display: 'grid',
		gridTemplateRows: 'repeat(2,1fr)',
		gridTemplateColumns: '1fr',
		gap: '32px 0',
		gridTemplateAreas: `"Intro-sneak-peek"
                       "code-and-terminal"`
	},
	[theme.breakpoints.up('tablet')]: {
		padding: '240px 0 160px 0 ',
		gridTemplateRows: '1fr',
		gridTemplateColumns: 'repeat(2,1fr)',
		gap: '0 0',
		gridTemplateAreas: `"Intro-sneak-peek code-and-terminal"`
	},
	[theme.breakpoints.up('laptop')]: {
		padding: '260px 0 160px 0 ',
		gridTemplateRows: '1fr',
		gridTemplateColumns: 'repeat(2,1fr)',
		gap: '0 0',
		gridTemplateAreas: `"Intro-sneak-peek code-and-terminal"`
	}
}));
const CopyContainer = styled(Box, { name: 'section-Intro-sneak-peek' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		gridArea: 'Intro-sneak-peek',

		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'repeat(2,auto)',
		gap: '32px 0',
		gridTemplateAreas: `"intro"
                       "sneak-peek"`
	},
	[theme.breakpoints.up('tablet')]: {
		gridArea: 'Intro-sneak-peek',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'repeat(2,auto)',
		gap: '48px 0',
		gridTemplateAreas: `"intro"
                       "sneak-peek"`
	},
	[theme.breakpoints.up('laptop')]: {
		padding: theme.spacing(0, 0, 0, 4),
		gridArea: 'Intro-sneak-peek',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'repeat(2,1fr)',
		gap: '64px 0',
		gridTemplateAreas: `"intro"
                       "sneak-peek"`
	}
}));
const SectionHeader = styled(Box, { name: 'section-header' })(({ theme }) => ({
	gridArea: 'intro',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	gap: theme.spacing(6)
}));
const ContainedButton = styled(Button, { name: 'read-the-doc-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.HomepageHeroHeader__Copy__body,
		padding: '3px 12px 6px 16px',
		borderRadius: '16.5px',
		color: '#0a2540',
		fontWeight: 500,
		textTransform: 'none',
		backgroundColor: '#00d4ff',
		'&:hover': {
			backgroundColor: '#fff'
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
const SneakPeekContainer = styled(Box, { name: 'sneak-peek-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		gridArea: 'sneak-peek',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: '32px'
	},
	[theme.breakpoints.up('tablet')]: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: '0px'
	},
	[theme.breakpoints.up('tabletX')]: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		gap: '0px'
	}
}));
const SneakPeekItem = styled(Box, { name: 'sneak-peek-item' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		flexBasis: '100%',
		maxWidth: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		gap: theme.spacing(2),
		alignSelf: 'stretch'
	},

	[theme.breakpoints.up('tablet')]: {
		width: '100%',
		flexBasis: '100%',
		maxWidth: '100%'
	},
	[theme.breakpoints.up('tabletX')]: {
		width: '50%',
		flexBasis: '50%'
	}
}));
const SneakPeekHeader = styled(Box, { name: 'sneak-peek-header' })(({ theme }) => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	gap: theme.spacing(2),
	padding: theme.spacing(0, 8, 0, 4)
}));
const SneakPeekHeaderTitle = styled(Typography, { name: 'sneak-peek-header-title' })(({ theme }) => ({
	...theme.typography.HomepageHeroHeader__Copy__body,
	color: '#fff',
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
		backgroundColor: '#00d4ff',
		display: 'block'
	}
}));
const SneakPeekInnerButton = styled(Button, { name: 'sneak-peek-inner-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.HomepageHeroHeader__Copy__body,
		fontSize: '15px',
		color: '#00d4ff',
		backgroundColor: 'transparent',
		padding: '3px 0 6px 0',
		'&:hover': {
			backgroundColor: 'transparent',
			color: '#fff'
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
const DesignedForDevlopers = () => {
	return (
		<SectionContainer component='section'>
			<LayOutContainer>
				<LayOut>
					<CopyContainer>
						<SectionHeader>
							<Typography variant='unifiedPlatform_title_caption' component='h2' sx={{ color: '#00d4ff' }}>
								Designed for developers
							</Typography>
							<Typography variant='DesignedForDev_title_body' component='h1'>
								The world’s most powerful and easy-to-use APIs
							</Typography>
							<Typography variant='HomepageHeroHeader__Copy__body' component='p' sx={{ color: '#adbdcc' }}>
								We agonize over the right abstractions so your teams don’t need to stitch together disparate systems or
								spend months integrating payments functionality.
							</Typography>
							<ContainedButton
								endIcon={
									<React.Fragment>
										<ArrowForwardIcon />
										<ArrowForwardIosIcon />
									</React.Fragment>
								}>
								Read the docs
							</ContainedButton>
						</SectionHeader>
						<SneakPeekContainer>
							<SneakPeekItem>
								<SneakPeekHeader>
									<AnimatedIconForLibraries />
									<SneakPeekHeaderTitle component='h6'>Tools for every stack</SneakPeekHeaderTitle>
								</SneakPeekHeader>
								<Typography
									variant='HomepageHeroHeader__Copy__body'
									component='p'
									sx={{ color: '#adbdcc', textAlign: 'left', padding: '0 32px 0 16px', fontSize: '15px' }}>
									We offer client and server libraries in everything from React and PHP to .NET and iOS.
								</Typography>
								<Box sx={{ width: '100%', padding: '0 32px 0 16px', marginTop: 'auto' }}>
									<SneakPeekInnerButton
										endIcon={
											<React.Fragment>
												<ArrowForwardIcon />
												<ArrowForwardIosIcon />
											</React.Fragment>
										}>
										See Libraries
									</SneakPeekInnerButton>
								</Box>
							</SneakPeekItem>
							{/*second item */}
							<SneakPeekItem>
								<SneakPeekHeader>
									<AnimatedIconForExplore />
									<SneakPeekHeaderTitle component='h6'>Prebuilt integrations</SneakPeekHeaderTitle>
								</SneakPeekHeader>
								<Typography
									variant='HomepageHeroHeader__Copy__body'
									component='p'
									sx={{ color: '#adbdcc', textAlign: 'left', padding: '0 32px 0 16px', fontSize: '15px' }}>
									Use integrations for systems like Shopify, WooCommerce, NetSuite, and more.
								</Typography>
								<Box sx={{ width: '100%', padding: '0 32px 0 16px', marginTop: 'auto' }}>
									<SneakPeekInnerButton
										endIcon={
											<React.Fragment>
												<ArrowForwardIcon />
												<ArrowForwardIosIcon />
											</React.Fragment>
										}>
										Explore partners
									</SneakPeekInnerButton>
								</Box>
							</SneakPeekItem>
						</SneakPeekContainer>
					</CopyContainer>
				</LayOut>
			</LayOutContainer>
		</SectionContainer>
	);
};

export default DesignedForDevlopers;
