import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { styled } from '@material-ui/core/styles';
const SectionContainer = styled(Box, { name: 'designed-for-developers-section' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		height: '1300px',
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
		padding: '150px 0  150px 0 ',
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
		gridTemplateRows: 'repeat(2,1fr)',
		gap: '32px 0',
		gridTemplateAreas: `"intro"
                       "sneak-peek"`
	},
	[theme.breakpoints.up('tablet')]: {
		gridArea: 'Intro-sneak-peek',
		display: 'grid',
		gridTemplateColumns: '1fr',
		gridTemplateRows: 'repeat(2,1fr)',
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
					</CopyContainer>
				</LayOut>
			</LayOutContainer>
		</SectionContainer>
	);
};

export default DesignedForDevlopers;
