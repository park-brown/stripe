import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { styled } from '@material-ui/system';
import StripeLogo from '../../SvgIcon/StripeLogo/StripeLogo';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const StripeAppBar = styled(AppBar, { name: 'stripe-appbar' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		backgroundColor: 'black',
		color: theme.palette.common.white
	}
}));

const StripeToolbar = styled(Toolbar, { name: 'stripe-toolbar' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		height: '76px',
		width: '100%',
		padding: '32px 32px 12px 32px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	[theme.breakpoints.up('laptop')]: {
		height: '68px',
		width: '100%',
		maxWidth: '1080px',
		margin: '0 auto',
		padding: '12px 16px'
	}
}));
const SiteHeaderNav = styled(Box, { name: 'header-navigation' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		display: 'none'
	},
	[theme.breakpoints.up('tablet')]: {
		display: 'none'
	},
	[theme.breakpoints.up('laptop')]: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '44px',
		width: 'fit-content',
		margin: 0,
		padding: 0
	}
}));
const SiteHeaderNavItem = styled(Button, { name: 'header-navigation-item' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		display: 'none'
	},
	[theme.breakpoints.up('tablet')]: {
		display: 'none'
	},
	[theme.breakpoints.up('laptop')]: {
		...theme.typography.button,
		display: 'block',
		padding: '10px 20px',
		color: '#fff',
		backgroundColor: 'transparent',
		opacity: 1,
		'&:hover,&:active': {
			opacity: 0.6
		}
	}
}));

const SignInButton = styled(Button, { name: 'sign-in-cta' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		display: 'none'
	},
	[theme.breakpoints.up('tablet')]: {
		display: 'none'
	},
	[theme.breakpoints.up('laptop')]: {
		...theme.typography.cta_button,
		padding: '3px 12px 6px 16px',
		color: '#fff',
		backgroundColor: 'hsla(0,0%,100%,0.2)',
		borderRadius: '16.5px',
		width: '100px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		opacity: 1,
		position: 'relative',
		'&:hover,&:active': {
			backgroundColor: 'hsla(0,0%,100%,0.4)'
		},
		'& .MuiSvgIcon-root': {
			width: '10px',
			height: '10px'
		},
		'& .hover-icon': {
			margin: 0,
			display: 'none',
			width: '10px',
			height: '10px'
		},

		'&:hover > .MuiButton-endIcon': {
			'.ios-icon': {
				display: 'none'
			},
			'.hover-icon': {
				display: 'block',
				transform: 'translateX(3px)',
				transition: `${theme.transitions.create(['transform'], {
					duration: theme.transitions.duration.standard,
					easing: theme.transitions.easing.easeIn
				})}`
			}
		}
	}
}));

const Header = () => {
	return (
		<StripeAppBar position='static'>
			<StripeToolbar>
				<StripeLogo />
				<SiteHeaderNav component='ul'>
					<SiteHeaderNavItem component='li'>Products</SiteHeaderNavItem>
					<SiteHeaderNavItem component='li'>Use cases</SiteHeaderNavItem>
					<SiteHeaderNavItem component='li'>Developers</SiteHeaderNavItem>
					<SiteHeaderNavItem component='li'>Company</SiteHeaderNavItem>
					<SiteHeaderNavItem component='li'>Pricing</SiteHeaderNavItem>
				</SiteHeaderNav>
				<SignInButton
					endIcon={
						<React.Fragment>
							<ArrowForwardIosIcon className='ios-icon' />
							<ArrowForwardIcon className='hover-icon' />
						</React.Fragment>
					}>
					Sign in
				</SignInButton>
			</StripeToolbar>
		</StripeAppBar>
	);
};

export default Header;
