import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import StripeLogo from '../../SvgIcon/StripeLogo/StripeLogo';
import LocaleIcon from '../../SvgIcon/LocaleIcon/LocaleIcon';
import LanguageIcon from '../../SvgIcon/LanguageIcon/LanguageIcon';

const FooterContainer = styled(Box, { name: 'footer-container' })(({ theme }) => ({
	width: '100%',

	position: 'relative',
	zIndex: 0,
	overflow: 'hidden'
}));
const BackgroundMask = styled(Box, { name: 'footer-background-mask' })(({ theme }) => ({
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0
}));
const Background = styled(Box, { name: 'background' })(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '100%',
	backgroundColor: '#f6f9fc',
	transform: 'skewY(-6deg)',
	transformOrigin: 'top right',
	overflow: 'hidden',
	zIndex: 1
}));
const Ribbon = styled(Box, { name: 'top-left-ribbton-container' })(({ theme }) => ({
	position: 'relative',
	width: '100%',
	height: '40px',
	transform: 'skewY(-6deg)',
	transformOrigin: 'top right',
	zIndex: 2
}));
const TopleftRibbonBlue = styled(Box, { name: 'top-left-ribbon-blue' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '80px',
		height: '40px',
		backgroundColor: '#7a73ff',
		position: 'absolute',
		top: 0,
		left: 0
	},
	[theme.breakpoints.up('tablet')]: {
		width: '160px'
	}
}));
const TopLeftRibbonCyan = styled(Box, { name: 'top-left-ribbon-cyan' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '80px',
		height: '40px',
		backgroundColor: '#80e9ff',
		position: 'absolute',
		top: 0,
		left: 0,
		transform: 'translateY(-24px)  translate(-40%,0)'
	},
	[theme.breakpoints.up('tablet')]: {
		width: '160px'
	}
}));
const TopRightRibbonCyan = styled(Box, { name: 'top-right-ribbon-cyan' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '80px',
		height: '40px',
		backgroundColor: '#80e9ff',
		position: 'absolute',
		top: 0,
		right: 0
	},
	[theme.breakpoints.up('tablet')]: {
		width: '160px'
	}
}));
const TopRightRibbonBlue = styled(Box, { name: 'top-right-ribbon-blue' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '80px',
		height: '40px',
		backgroundColor: '#7a73ff',
		position: 'absolute',
		top: 0,
		right: 0,
		transform: 'translate(40%, 24px)'
	},
	[theme.breakpoints.up('tablet')]: {
		width: '160px'
	}
}));
const TopleftRibbonOverlay = styled(Box, { name: 'top-left-ribbon-overlay' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '80px',
		height: '16px',
		backgroundColor: '#0048e5',
		position: 'absolute',
		top: 0,
		left: 0,
		transform: 'translate(-40%,0)'
	},
	[theme.breakpoints.up('tablet')]: {
		width: '160px'
	}
}));
const TopRightRibbonOverlay = styled(Box, { name: 'top-right-ribbon-overlay' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '80px',
		height: '16px',
		backgroundColor: '#0048e5',
		position: 'absolute',
		top: 0,
		right: 0,
		transform: 'translate(40%,24px)'
	},
	[theme.breakpoints.up('tablet')]: {
		width: '160px'
	}
}));
const LayOutContainer = styled(Box, { name: 'footer-layout-container' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: 'auto',
		height: '100%',
		margin: theme.spacing(0, 4),
		position: 'relative',
		zIndex: 2
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
const LayOut = styled(Box, { name: 'footer-layout' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		padding: 'calc(100vw * 0.1051 + 160px) 0 calc(100vw * 0.1051 + 100px) 0',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(2,1fr)',
		gridTemplateRows: 'repeat(3,auto)',
		gap: '20px 0',
		gridTemplateAreas: `"header             header"
		                   "products            developers-company"
											 "use-case            resources"`
	},
	[theme.breakpoints.up('tablet')]: {
		display: 'grid',
		gridTemplateColumns: 'repeat(4,1fr)',
		gridTemplateRows: 'auto',
		gap: 0,
		gridTemplateAreas: `"header products developers-company  use-case-resources"`
	}
}));
const Header = styled(Box, { name: 'footer-header' })(({ theme }) => ({
	gridArea: 'header',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	gap: theme.spacing(2),
	padding: theme.spacing(0, 4, 0, 4)
}));
const LocaleButton = styled(Button, { name: 'locale-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.cta_button,
		margin: theme.spacing(1, 0, 1, 0),
		padding: theme.spacing(0),
		color: '#0a2540',
		backgroundColor: 'transparent',
		whiteSpace: 'nowrap'
	}
}));
// cta_button
const ColumnTitle = styled(Typography, { name: 'footer-column-title' })(({ theme }) => ({
	...theme.typography.cta_button,
	color: '#0a2540',
	textAlign: 'left',
	display: 'block',
	margin: theme.spacing(0, 0, 2, 0),
	fontWeight: 600
}));
const ColumnContainer = styled(Box, { name: 'footer-column-container' })(({ theme, gridArea }) => ({
	gridArea: gridArea,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start'
}));
const ColumnListItem = styled(Typography, { name: 'footer-column-list-item' })(({ theme }) => ({
	...theme.typography.cta_button,
	color: '#0a2540',
	textAlign: 'left',
	display: 'block',
	cursor: 'pointer',
	margin: theme.spacing(1, 0, 1, 0),
	'&:hover': {
		opacity: 0.8
	}
}));
const Product__List = [
	'Atlas',
	'Billing',
	'Capital',
	'Climate',
	'Connect',
	'Corporate Card',
	'Identity',
	'Issuing',
	'Payments',
	'PayOuts',
	'Pricing',
	'Radar',
	'Tax',
	'Terminal',
	'Treasury'
];
const Developers__List = ['Documentation', 'API reference', 'API status'];
const Company__List = ['About', 'Customers', 'Enterprise', 'Partners', 'Jobs', 'Blog', 'Newsroom'];
const UseCases__List = ['SaaS', 'Platforms', 'Marketplaces', 'Ecommerce'];
const Resources__List = [
	'Support',
	'Contact',
	'Guides',
	'Privacy & terms',
	'Licenses',
	'COVID-19',
	'Sitemap',
	'Cookie settings'
];
const Footer = () => {
	return (
		<FooterContainer component='footer'>
			<BackgroundMask>
				<Ribbon>
					<TopleftRibbonBlue />
					<TopLeftRibbonCyan />
					<TopleftRibbonOverlay />
					<TopRightRibbonCyan />
					<TopRightRibbonBlue />
					<TopRightRibbonOverlay />
				</Ribbon>

				<Background />
			</BackgroundMask>
			<LayOutContainer>
				<LayOut>
					<Header>
						<StripeLogo />
						<LocaleButton startIcon={<LocaleIcon />}>Singapore</LocaleButton>
						<LocaleButton startIcon={<LanguageIcon />}>English(Unitied States)</LocaleButton>
						<Typography variant='cta_button' sx={{ margin: 'auto 0 0 0', display: 'inline-block' }}>
							© Stripe
						</Typography>
					</Header>
					<ColumnContainer gridArea='products'>
						<ColumnTitle>Products</ColumnTitle>
						{Product__List.map((list) => (
							<ColumnListItem key={list}>{list}</ColumnListItem>
						))}
					</ColumnContainer>
					<ColumnContainer gridArea='developers-company'>
						<ColumnTitle>Developers</ColumnTitle>
						{Developers__List.map((list) => (
							<ColumnListItem key={list}>{list}</ColumnListItem>
						))}
						<ColumnTitle sx={{ marginTop: '32px' }}>Company</ColumnTitle>
						{Company__List.map((list) => (
							<ColumnListItem key={list}>{list}</ColumnListItem>
						))}
					</ColumnContainer>
					<ColumnContainer gridArea={{ mobile: 'use-case', tablet: 'use-case-resources' }}>
						<ColumnTitle>Use cases</ColumnTitle>
						{UseCases__List.map((list) => (
							<ColumnListItem key={list}>{list}</ColumnListItem>
						))}
					</ColumnContainer>
					<ColumnContainer
						gridArea={{ mobile: 'resources', tablet: 'use-case-resources' }}
						sx={{ marginTop: { mobile: 0, tablet: '198px ' } }}>
						<ColumnTitle sx={{ marginTop: { mobile: 0, tablet: '32px' } }}>Resources</ColumnTitle>
						{Resources__List.map((list) => (
							<ColumnListItem key={list}>{list}</ColumnListItem>
						))}
					</ColumnContainer>
				</LayOut>
			</LayOutContainer>
		</FooterContainer>
	);
};

export default Footer;
