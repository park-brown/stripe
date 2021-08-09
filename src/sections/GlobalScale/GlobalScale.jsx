import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
const SectionContainer = styled(Box, { name: 'global-scale-section-container' })(({ theme }) => ({
	width: '100%',
	position: 'relative',
	zIndex: 0,
	marginTop: 'calc(100vw * -0.1051 )',
	overflow: 'hidden'
}));
const BackgroundMask = styled(Box, { name: 'global-scale-section-background-mask' })(({ theme }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0
}));
const BackGround = styled(Box, { name: 'global-scale-section-background' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		position: 'relative',
		height: '100%',
		width: '100%',
		top: 0,
		left: 0,
		transformOrigin: '100% 0',
		transform: 'skewY(-6deg)',
		background: '#0a2540',
		overflow: 'hidden',
		zIndex: 1
	}
}));
const LayOutContainer = styled(Box, { name: 'global-scale-section-layOut-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: 'auto',
		height: '100%',
		margin: theme.spacing(0, 4),
		position: 'relative',
		zIndex: 2,
		padding: 'calc(100vw * 0.1051 + 100px) 0 calc(100vw * 0.1051 + 100px) 0'
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
const LayOut = styled(Box, { name: 'global-scale-section-layOut' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'repeat(5,auto)',
		gridTemplateAreas: `"header "
		                   "statistic-1"
											 "statistic-2"
											 "statistic-3"
											 "statistic-4"`,
		gap: '32px 0'
	},
	[theme.breakpoints.up('tablet')]: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2,1fr)',
		gridTemplateRows: 'repeat(3,auto)',
		gridTemplateAreas: `"header      ."
		                   "statistic-1  statistic-2"
											 "statistic-3  statistic-4"`,
		gap: '48px 0'
	},
	[theme.breakpoints.up('laptop')]: {
		display: 'grid',
		gridTemplateColumns: 'repeat(4,1fr)',
		gridTemplateRows: 'repeat(2,auto)',
		gridTemplateAreas: `"header     header      .          ."
		                   "statistic-1  statistic-2   statistic-3 statistic-4"`,
		gap: '64px 0'
	}
}));
const Header = styled(Box, { name: 'global-scale-section-header' })(({ theme }) => ({
	gridArea: 'header',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	gap: '24px',
	padding: theme.spacing(0, 0, 0, 4)
}));
const StatisticItem = styled(Box, { name: 'statistic-item' })(({ theme, gridArea }) => ({
	gridArea: gridArea,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	gap: theme.spacing(2),
	padding: theme.spacing(0, 0, 0, 4)
}));
const StatisticItemTitle = styled(Typography, { name: 'statistic-title' })(({ theme }) => ({
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
const GlobalScale = () => {
	return (
		<SectionContainer component='section'>
			<BackgroundMask>
				<BackGround />
			</BackgroundMask>
			<LayOutContainer>
				<LayOut>
					<Header>
						<Typography variant='unifiedPlatform_title_caption' component='h2' sx={{ color: '#00d4ff' }}>
							Global scale
						</Typography>
						<Typography variant='DesignedForDev_title_body' component='h1'>
							the backbone for
							<br /> internet business
						</Typography>
						<Typography
							variant='HomepageHeroHeader__Copy__body'
							component='p'
							sx={{ color: '#adbdcc', maxWidth: { mobile: '100%', tablet: '300px', laptop: '430px' } }}>
							For ambitious companies around the world, Stripe makes moving money as simple, borderless, and
							programmable as the rest of the internet. Our teams are based in dozens of offices around the world and we
							process hundreds of billions of dollars each year for{' '}
							<Typography variant='HomepageHeroHeader__Copy__body' component='span' sx={{ color: '#00d4ff' }}>
								startups to large enterprises
							</Typography>
						</Typography>
					</Header>
					<StatisticItem gridArea='statistic-1'>
						<StatisticItemTitle>250M+</StatisticItemTitle>
						<Typography
							variant='HomepageHeroHeader__Copy__body'
							component='p'
							sx={{
								color: '#adbdcc',
								textAlign: 'left',
								maxWidth: { mobile: '270px' },
								fontSize: '15px',
								lineHeight: '24px'
							}}>
							API requests per day, peaking at 13,000 requests a second.
						</Typography>
					</StatisticItem>
					<StatisticItem gridArea='statistic-2'>
						<StatisticItemTitle>90%</StatisticItemTitle>
						<Typography
							variant='HomepageHeroHeader__Copy__body'
							component='p'
							sx={{
								color: '#adbdcc',
								textAlign: 'left',
								maxWidth: { mobile: '270px' },
								fontSize: '15px',
								lineHeight: '24px'
							}}>
							of U.S. adults have bought from
							<br /> businesses using Stripe.
						</Typography>
					</StatisticItem>
					<StatisticItem gridArea='statistic-3'>
						<StatisticItemTitle>135+</StatisticItemTitle>
						<Typography
							variant='HomepageHeroHeader__Copy__body'
							component='p'
							sx={{
								color: '#adbdcc',
								textAlign: 'left',
								maxWidth: { mobile: '270px' },
								fontSize: '15px',
								lineHeight: '24px'
							}}>
							currencies and payment methods supported.
						</Typography>
					</StatisticItem>
					<StatisticItem gridArea='statistic-4'>
						<StatisticItemTitle>35+</StatisticItemTitle>
						<Typography
							variant='HomepageHeroHeader__Copy__body'
							component='p'
							sx={{
								color: '#adbdcc',
								textAlign: 'left',
								maxWidth: { mobile: '270px' },
								fontSize: '15px',
								lineHeight: '24px'
							}}>
							countries with local acquiring, optimizing acceptance rates.
						</Typography>
					</StatisticItem>
				</LayOut>
			</LayOutContainer>
		</SectionContainer>
	);
};

export default GlobalScale;
