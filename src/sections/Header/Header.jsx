import React from 'react';
import { AppBar, Box, Toolbar, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { styled } from '@material-ui/system';
import StripeLogo from '../../SvgIcon/StripeLogo/StripeLogo';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ProductMenuWrapper from '../../components/ProductMenu/ProductMenuWrapper';
import UsecaseMenuWrapper from '../../components/UsecaseMenu/UsecaseMenuWrapper';

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
		padding: '12px 32px 12px 32px',
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
const SiteHeaderNavItem = styled(Button, {
	name: 'header-navigation-item'
})(({ theme }) => ({
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
		'&:hover': {
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
					easing: theme.transitions.easing.easeIn,
					delay: theme.transitions.duration.standard
				})}`
			}
		}
	}
}));
const MenuButton = styled(IconButton, { name: 'stripe-menu-nav' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		display: 'block',
		color: '#fff',
		height: '32px',
		backgroundColor: 'hsla(0,0%,100%,0.2)',
		padding: '0 16px',
		borderRadius: '16px',
		'& .MuiSvgIcon-root': {
			width: '16px',
			height: '32px'
		},
		'&:hover': {
			backgroundColor: 'hsla(0,0%,100%,0.4)'
		}
	},
	[theme.breakpoints.up('tablet')]: {
		display: 'block'
	},
	[theme.breakpoints.up('laptop')]: {
		display: 'none'
	}
}));

const Header = () => {
	/*product state */

	const [productEl, openProductMenu] = React.useState(null);
	const openProduct = Boolean(productEl);

	const handleProductMenuOpen = (event) => {
		openProductMenu(event.target);
		openUsecaseMenu(null);
	};
	const handleProductMenuClose = () => {
		openProductMenu(null);
	};

	/*usecase state */

	const [usecaseEl, openUsecaseMenu] = React.useState(null);
	const openUsecase = Boolean(usecaseEl);

	const handleUsecaseMenuOpen = (event) => {
		openUsecaseMenu(event.target);
		openProductMenu(null);
	};
	const handleUsecaseMenuClose = () => {
		openUsecaseMenu(null);
	};

	return (
		<StripeAppBar position='static'>
			<StripeToolbar>
				<StripeLogo />
				<SiteHeaderNav component='ul'>
					<SiteHeaderNavItem
						component='li'
						id='product-popper-button'
						aria-controls='product-popper'
						aria-haspopup='true'
						onMouseEnter={handleProductMenuOpen}
						aria-expanded={openProduct ? 'true' : undefined}>
						Products
					</SiteHeaderNavItem>
					<ProductMenuWrapper open={openProduct} anchorEl={productEl} onClose={handleProductMenuClose} />
					<SiteHeaderNavItem
						component='li'
						id='usecase-menu-button'
						aria-controls='usecase-menu'
						aria-haspopup='true'
						onMouseEnter={handleUsecaseMenuOpen}
						aria-expanded={openUsecase ? 'true' : undefined}>
						Use cases
					</SiteHeaderNavItem>
					<UsecaseMenuWrapper open={openUsecase} anchorEl={usecaseEl} onClose={handleUsecaseMenuClose} />
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
				<MenuButton>
					<MenuIcon />
				</MenuButton>
			</StripeToolbar>
		</StripeAppBar>
	);
};

export default Header;
