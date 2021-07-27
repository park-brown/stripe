import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { ArrowForwardIos } from '@material-ui/icons';
import HeroSectionDashBoardWrapper from '../../components/HeroSectionDashBoardWrapper/HeroSectionDashBoardWrapper';
import PhoneOnCheckOut from '../../components/PhonnOnCheckOut/PhoneOnCheckOut';
import GoogleIcon from '../../SvgIcon/Google/GoogleIcon';
import GrabLogo from '../../SvgIcon/GrabLogo/GrabLogo';
import GrainLogo from '../../SvgIcon/GrainLogo/GrainLogo';
import ZoomLogo from '../../SvgIcon/Zoom/ZoomLogo';
import SaleForceLogo from '../../SvgIcon/SaleForce/SaleForeceLogo';
import CarousellLogo from '../../SvgIcon/Carousell/CarousellLogo';
import CastleryLogo from '../../SvgIcon/Castlery/CastleryLogo';
import AmazonLogo from '../../SvgIcon/Amazon/AmazonLogo';

const HeroContainer = styled(Box, { name: 'hero-section-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		position: 'relative',
		top: '-76px',
		left: 0,
		right: 0,
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 2 // hero container zindex set  to  2
	},
	[theme.breakpoints.up('laptop')]: {
		top: '-68px'
	}
}));
const HeroSectionLayOutContainer = styled(Box, { name: 'hero-section-layout-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',

		margin: theme.spacing(0, 4, 0, 4),
		padding: '76px 0 86px 0'
	},
	[theme.breakpoints.up('laptop')]: {
		maxWidth: '1080px',
		padding: '68px 0 78px 0'
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
		zIndex: -2, // set to -2, sit below hero content
		clipPath: 'polygon(0 0, 100% 0%, 100% 45%, 0% 56%)',
		'--gradient-color-0': theme.palette.canvas.gradientColorZero,
		'--gradient-color-1': theme.palette.canvas.gradientColorOne,
		'--gradient-color-2': theme.palette.canvas.gradientColorTwo,
		'--gradient-color-3': theme.palette.canvas.gradientColorThree
	},

	[theme.breakpoints.up('tablet')]: {
		clipPath: 'polygon(0 0, 100% 0%, 100% 42%, 0% 65%)'
	},
	[theme.breakpoints.up('laptop')]: {
		clipPath: 'polygon(0 0, 100% 0%, 100% 30%, 0% 80%)'
	}
}));
const HeroSectionCopyContainer = styled(Box, { name: 'hero-section-copy-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		maxWidth: '545px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	}
}));
const HeroSectionCopyHeader = styled(Box, { name: 'hero-section-copy-header' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		padding: theme.spacing(0, 4),
		width: '100%'
	},
	[theme.breakpoints.up('laptop')]: {
		padding: theme.spacing(0, 0, 0, 4)
	}
}));
const HeroSectionCopyHeaderCaption = styled(Box, { name: 'hero-section-copy-header-caption' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		margin: theme.spacing(7, 0, 0, 0),
		padding: theme.spacing(2, 3, 2, 4),
		maxWidth: '430px',
		borderRadius: theme.spacing(1),
		color: theme.palette.common.white,
		zIndex: 5, // click Cta button affect header background, set to 5 to avoid confilct
		position: 'relative',
		'&::before': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			zIndex: 2,
			background: '#121252',
			borderRadius: 'inherit',
			opacity: 0.3,
			mixBlendMode: 'color-burn',
			content: "' '"
		}
	}
}));
const Bullet = styled(Typography, { name: 'HomepageHeroCaption__separator' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.HomepageHeroCaption__title,
		display: 'inline-block',
		margin: theme.spacing(0, 2)
	}
}));
const HeroCaptionLink = styled(Button, { name: 'HomepageHeroCaption__link' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		padding: 0,
		margin: 0,
		display: 'inline',
		...theme.typography.HomepageHeroCaption__title,
		'& .MuiSvgIcon-root': {
			width: '10px',
			height: '10px',
			margin: theme.spacing(0, 0, 0, 1)
		}
	}
}));
const HeroSectionCopyTitle = styled(Typography, { name: 'HomepageHeroHeader__title' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		margin: theme.spacing(12, 0, 0, 0),
		padding: theme.spacing(0, 4),
		width: '100%',
		position: 'relative',
		...theme.typography.HomepageHeroHeader__title
	},
	[theme.breakpoints.up('laptop')]: {
		padding: theme.spacing(0, 0, 0, 4)
	}
}));
const HeroSectionCopyBody = styled(Typography, { name: 'HomepageHeroHeader__Copy__body' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		margin: theme.spacing(8, 0, 0, 0),
		padding: theme.spacing(0, 4),
		width: '100%',

		...theme.typography.HomepageHeroHeader__Copy__body
	},
	[theme.breakpoints.up('laptop')]: {
		padding: theme.spacing(0, 0, 0, 4)
	}
}));
const HeroSectionCopyFooter = styled(Box, { name: 'HomepageHeroHeader__Copy__footer' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		margin: theme.spacing(8, 0, 0, 0),
		padding: theme.spacing(0, 4),
		width: '100%',
		maxWidth: '374px',
		display: 'flex',
		alignItems: 'center',
		gap: theme.spacing(8),
		justifyContent: 'space-between'
	},
	[theme.breakpoints.up('laptop')]: {
		padding: theme.spacing(0, 0, 0, 4),
		justifyContent: 'flex-start'
	}
}));
const StartNowButton = styled(Button, { name: 'hero-section-start-now-cta' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		margin: theme.spacing(0, 0, 4, 0),
		padding: theme.spacing(1.5, 3, 1.5, 4),
		color: '#fff',
		cursor: 'pointer',
		backgroundColor: '#0a2540',
		borderRadius: '16.5px',
		'&:hover': {
			opacity: 0.6,
			backgroundColor: '#0a2540'
		},
		'& .MuiSvgIcon-root': {
			width: '10px',
			height: '10px'
		}
	}
}));
const ContactButton = styled(Button, { name: 'hero-section-contact-cta' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		margin: theme.spacing(0, 0, 4, 0),
		padding: theme.spacing(1.5, 3, 1.5, 4),
		color: '#0a2540',
		cursor: 'pointer',
		backgroundColor: 'transparent',
		borderRadius: '16.5px',
		fontWeight: 600,
		'&:hover': {
			opacity: 0.6
		},
		'& .MuiSvgIcon-root': {
			width: '10px',
			height: '10px',
			fill: '#0a2540'
		}
	}
}));
const HeroSectionGraphic = styled(Box, { name: 'hero-section-graphic' })(({ theme }) => ({
	position: 'relative',
	zIndex: 5,
	flexGrow: 1,
	alignSelf: 'stretch'
}));
const UserLogoContainer = styled(Box, { name: 'user-logo-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		maxWidth: 'calc(100vw - 32px)',
		padding: theme.spacing(0, 0, 18, 0),
		margin: theme.spacing(0, 4),
		display: 'grid',
		gridTemplateColumns: 'repeat(2,1fr)',
		gridTemplateRows: 'repeat(4,40px)',
		gap: '60px 0 ',
		gridTemplateAreas: `"Google      Grab"
		                    "Grain       Zoom"
												"SalesForce  Carousell"
												"Castlery    Amazon"`
	},
	[theme.breakpoints.up('tablet')]: {
		display: 'grid',
		gridTemplateColumns: 'repeat(4,1fr)',
		gridTemplateRows: 'repeat(2,40px)',
		gap: '60px 0',
		gridTemplateAreas: `"Google      Grab         Grain       Zoom"
		                    "SalesForce  Carousell   Castlery    Amazon"`
	},
	[theme.breakpoints.up('tabletX')]: {
		display: 'grid',
		gridTemplateColumns: 'repeat(4,1fr)',
		gridTemplateRows: 'repeat(2,40px)',
		gap: '60px 0',
		gridTemplateAreas: `"Google      Grab         Grain       Zoom"
		                    "SalesForce  Carousell   Castlery    Amazon"`
	},
	[theme.breakpoints.up('laptop')]: {
		maxWidth: '1080px',
		margin: '0 auto',
		padding: '50px 0 110px 0',
		display: 'grid',
		gridTemplateColumns: 'repeat(4,1fr)',
		gridTemplateRows: 'repeat(2,40px)',
		gap: '60px 0',
		gridTemplateAreas: `"Google      Grab         Grain       Zoom"
		                    "SalesForce  Carousell   Castlery    Amazon"`
	}
}));
const Hero = () => {
	return (
		<HeroContainer>
			<HeroSectionCanvas id='gradient-canvas' />
			<HeroSectionLayOutContainer>
				<HeroSectionCopyContainer>
					<HeroSectionCopyHeader>
						<HeroSectionCopyHeaderCaption>
							<Typography variant='HomepageHeroCaption__title'>watch now</Typography>
							<Bullet component='span'>•</Bullet>
							<HeroCaptionLink endIcon={<ArrowForwardIos />} component='a'>
								Sessions, our virtual conference, is on demand
							</HeroCaptionLink>
						</HeroSectionCopyHeaderCaption>
					</HeroSectionCopyHeader>
					<HeroSectionCopyTitle component='h1'>
						Payments
						<br /> infrastructure
						<br /> for the internet
					</HeroSectionCopyTitle>
					<HeroSectionCopyBody>
						Millions of businesses of all sizes—from startups to large enterprises—use Stripe’s software and APIs to
						accept payments, send payouts, and manage their businesses online.
					</HeroSectionCopyBody>
					<HeroSectionCopyFooter>
						<StartNowButton endIcon={<ArrowForwardIos />}>Start now</StartNowButton>
						<ContactButton endIcon={<ArrowForwardIos />}>Contact sales</ContactButton>
					</HeroSectionCopyFooter>
				</HeroSectionCopyContainer>
				<HeroSectionGraphic>
					<PhoneOnCheckOut />
					<HeroSectionDashBoardWrapper />
				</HeroSectionGraphic>
			</HeroSectionLayOutContainer>
			<UserLogoContainer>
				{/* Had to pass gridArea to Box , otherwise console screams unknow DOM attribute gridArea */}
				<Box gridArea='Google'>
					<GoogleIcon />
				</Box>
				<Box gridArea='Grab'>
					<GrabLogo />
				</Box>
				<Box gridArea='Grain'>
					<GrainLogo />
				</Box>
				<Box gridArea='Zoom'>
					<ZoomLogo />
				</Box>
				<Box gridArea='SalesForce'>
					<SaleForceLogo />
				</Box>
				<Box gridArea='Carousell'>
					<CarousellLogo />
				</Box>
				<Box gridArea='Castlery'>
					<CastleryLogo />
				</Box>
				<Box gridArea='Amazon'>
					<AmazonLogo />
				</Box>
			</UserLogoContainer>
		</HeroContainer>
	);
};

export default Hero;
