import React from 'react';
import { Box, Popper, Paper, Typography, IconButton, Button } from '@material-ui/core';
import { styled } from '@material-ui/system';
import CloseIcon from '@material-ui/icons/Close';
import AtlasIcon from '../../SvgIcon/Atlas/AtlasIcon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ClimateIcon from '../../SvgIcon/Climate/ClimateIcon';
import IdentityIcon from '../../SvgIcon/Identity/IdentityIcon';
import PaymentLinksIcon from '../../SvgIcon/PaymentLinks/PaymentLinkIcon';
import SigmaIcon from '../../SvgIcon/Sigma/SigmaIcon';
import BillingIcon from '../../SvgIcon/Billing/BillingIcon';
import ConnectIcon from '../../SvgIcon/Connect/ConnectIcon';
import InvoicingIcon from '../../SvgIcon/Invoicing/InvoicingIcon';
import PaymentIcon from '../../SvgIcon/payment/paymentIcon';
import RadarIcon from '../../SvgIcon/Radar/RadarIcon';
import TaxIcon from '../../SvgIcon/Tax/TaxIcon';
import IsuingIcon from '../../SvgIcon/Issuing/IsuingIcon';
import TerminalIcon from '../../SvgIcon/Terminal/TerminalIcon';
import SaasIcon from '../../SvgIcon/Saas/SaasIcon';
import MarketPlaceIcon from '../../SvgIcon/MarketPlace/MarketPlaceIcon';
import PlatFormIcon from '../../SvgIcon/PlatForm/PlatFormIcon';
import EnterpriseIcon from '../../SvgIcon/Enterprise/EnterpriseIcon';
import BagIcon from '../../SvgIcon/Bag/BagIcon';
import PartnersIcon from '../../SvgIcon/Partners/PartnersIcon';
import NewsRoomIcon from '../../SvgIcon/NewsRoom/NewsRoomIcon';
import SupportIcon from '../../SvgIcon/Support/SupportIcon';
import PenIcon from '../../SvgIcon/Pen/PenIcon';
import PricingIcon from '../../SvgIcon/Pricing/PricingIcon';
import DollarIcon from '../../SvgIcon/Dollar/DollarIcon';
import BookMarkIcon from '../../SvgIcon/BookMark/BookMarkIcon';
const MenuPopper = styled(Popper, { name: 'menu-popper' })(({ theme }) => ({
	[theme.breakpoints.up('laptop')]: {
		display: 'none'
	}
}));
const MenuPopperInner = styled(Paper, { name: 'menu-popper-inner' })(({ theme }) => ({
	width: 'calc(100vw - 32px)'
	// height: '500px'
}));
const Section = styled(Box, { name: 'menu-popper-section' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		padding: theme.spacing(6, 4, 6, 4),
		display: 'flex',
		width: '100%',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		borderBottom: '1px dashed #e3e3e3'
	},
	[theme.breakpoints.up('tablet')]: {
		padding: theme.spacing(6),
		display: 'flex',
		width: '100%',
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	}
}));

const SectionHeader = styled(Box, { name: 'menu-popper-section-header' })(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	height: '20px',
	width: '100%',
	margin: '0 0 18px 0'
}));
const ProductSectionBody = styled(Box, { name: 'menu-popper-product-section-body' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		height: '224px',
		display: 'grid',
		gridTemplateColumns: 'repeat(2,1fr)',
		gridTemplateRows: 'repeat(7,32px)',
		gap: 0,
		gridTemplateAreas: `"Atlas         Billing"
                "Climate       Connect"
                "Identity      Invoicing"
                "Issuing       payments"
                "payment-links radar"
                "sigma         tax"
                "terminal      ."`
	},
	[theme.breakpoints.up('tablet')]: {
		width: '100%',
		height: '160px',
		display: 'grid',
		gridTemplateColumns: 'repeat(3,1fr)',
		gridTemplateRows: 'repeat(5,32px)',
		gap: 0,
		gridTemplateAreas: `"Atlas         Billing     Climate "
                        "Connect       Identity    Invoicing"
                        "Issuing       payments    payment-links"
                        "radar         sigma       tax"
                        "terminal      .           ."`
	},
	[theme.breakpoints.up('tabletX')]: {
		width: '100%',
		height: '128px',
		display: 'grid',
		gridTemplateColumns: 'repeat(4,1fr)',
		gridTemplateRows: 'repeat(4,32px)',
		gap: 0,
		gridTemplateAreas: `"Atlas         Billing     Climate    Connect"
                        "Identity      Invoicing   Issuing    payments"
                        "payment-links radar       sigma      tax"
                        "terminal      .           .          ."`
	}
}));
const UsecaseSectionBody = styled(Box, { name: 'menu-popper-usecase-section-body' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		height: '64px',
		display: 'grid',

		gridTemplateColumns: 'repeat(2,1fr)',
		gridTemplateRows: 'repeat(2,32px)',
		gap: 0,
		gridTemplateAreas: `"SaaS         MarketPlace"
                        "Platforms    ."`
	},
	[theme.breakpoints.up('tablet')]: {
		width: '100%',
		height: '32px',
		display: 'grid',
		gridTemplateColumns: 'repeat(3,1fr)',
		gridTemplateRows: 'repeat(1,32px)',
		gap: 0,
		gridTemplateAreas: `"SaaS        MarketPlace     Platforms "`
	},
	[theme.breakpoints.up('tabletX')]: {
		width: '100%',
		height: '32px',
		display: 'grid',
		gridTemplateColumns: 'repeat(4,1fr)',
		gridTemplateRows: 'repeat(1,32px)',
		gap: 0,
		gridTemplateAreas: `"SaaS        MarketPlace     Platforms  ."`
	}
}));
const LastSectionBody = styled(Box, { name: 'menu-popper-last-section-body' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '100%',
		height: 'auto',
		display: 'grid',
		padding: theme.spacing(6, 4, 6, 4),
		borderBottom: '1px dashed #e3e3e3',
		gridTemplateColumns: 'repeat(2,1fr)',
		gridTemplateRows: 'repeat(5,32px)',
		gap: 0,
		gridTemplateAreas: `"Pricing         About-Stripe"
                        "Enterprise      Jobs"
												"Partner         Newsroom"
												"Documentation   Support"
												"Blog            ."`
	},
	[theme.breakpoints.up('tablet')]: {
		width: '100%',
		height: 'auto',
		display: 'grid',
		padding: theme.spacing(6),
		gridTemplateColumns: 'repeat(3,1fr)',
		gridTemplateRows: 'repeat(3,32px)',
		gap: 0,
		gridTemplateAreas: `"Pricing       About-Stripe     Enterprise"
		                    "Jobs          Partner          Newsroom"
												"Documentation Support          Blog"`
	},
	[theme.breakpoints.up('tabletX')]: {
		width: '100%',
		height: 'auto',
		display: 'grid',
		gridTemplateColumns: 'repeat(4,1fr)',
		gridTemplateRows: 'repeat(3,32px)',
		gap: 0,
		gridTemplateAreas: `"Pricing       About-Stripe     Enterprise     Jobs"
		                    "Partner       Newsroom         Documentation  Support"
												"Blog          .                .              ."`
	}
}));
const PopperSectionFooter = styled(Box, { name: 'menu-popper-footer' })(({ theme }) => ({
	padding: theme.spacing(5),
	margin: theme.spacing(1),
	backgroundColor: '#f6f9fc',
	borderRadius: '4px',
	width: 'calc(100% - 8px)',
	height: '73px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}));
const MenuPopperGridItem = styled(Box, { name: 'menu-popper-product-section-body-grid-item' })(
	({ theme, gridArea }) => ({
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		padding: theme.spacing(1.5),
		gridArea: gridArea,
		'&:hover > svg:nth-of-type(1)': {
			display: 'block',
			fill: '#0a2540'
		},
		'&:active > svg:nth-of-type(1)': {
			display: 'none'
		},
		'&:active > svg:nth-of-type(2) ': {
			display: 'block',
			fill: '#0a2540'
		}
	})
);
const CustomArrowForwardIos = styled(ArrowForwardIosIcon, { name: 'arrow-forward-ios' })(({ theme }) => ({
	width: '12px',
	height: '12px',
	margin: '0 0 0 6px',
	display: 'none'
}));
const CustomArrowForward = styled(ArrowForwardIcon, { name: 'arrow-forward' })(({ theme }) => ({
	width: '12px',
	height: '12px',
	margin: '0 0 0 6px',
	display: 'none'
}));

const MenuPopperIconContainer = styled(Box, { name: 'Menu-popper-icon-container' })(({ theme }) => ({
	width: '16px',
	height: '16px',
	margin: '0px 10px 0 0',
	'& .MuiSvgIcon-root': {
		width: '16px',
		height: '16px',
		position: 'relative',
		top: '-2px'
	}
}));
const CloseButton = styled(IconButton, { name: 'close-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		width: '20px',
		height: '20px',
		padding: 0,
		'& .MuiSvgIcon-root': {
			width: '20px',
			height: '20px'
		}
	}
}));
const MenuPoperSignInButton = styled(Button, { name: 'menu-popper-sign-in-button' })(({ theme }) => ({
	[theme.breakpoints.up('mobile')]: {
		...theme.typography.cta_button,
		padding: '3px 12px 6px 16px',
		color: '#fff',
		backgroundColor: '#635bff',
		borderRadius: '16.5px',
		width: '100px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		opacity: 1,
		'&:hover': {
			backgroundColor: '#0a2540'
		},
		'& .MuiSvgIcon-root': {
			width: '12px',
			height: '12px',
			display: 'none'
		},
		'&:hover > .MuiButton-endIcon': {
			'svg:nth-of-type(1)': {
				display: 'block'
			}
		},
		'&:active > .MuiButton-endIcon': {
			'svg:nth-of-type(1)': {
				display: 'none'
			},
			'svg:nth-of-type(2)': {
				display: 'block'
			}
		}
	},
	[theme.breakpoints.up('tablet')]: {},
	[theme.breakpoints.up('laptop')]: {
		display: 'none'
	}
}));

const MenuBtnPopperWrapper = ({ anchorEl, open, onClose }) => {
	return (
		<MenuPopper
			id='menu-popper'
			anchorEl={anchorEl}
			open={open}
			placement='top'
			disablePortal={true}
			modifiers={[
				{
					name: 'offset',
					options: {
						offset: [0, -60] // use prevent overflow to set boundaries,
					}
				},
				{
					name: 'preventOverflow',
					enabled: true,
					options: {
						altAxis: true,
						altBoundary: true,
						tether: true,
						rootBoundary: 'document',
						padding: 16 // set overall padding
					}
				}
			]}>
			<MenuPopperInner>
				{/*Product section */}
				<Section>
					<SectionHeader>
						<Typography variant='nav_menu_inner_title'>Products</Typography>
						<CloseButton onClick={onClose}>
							<CloseIcon />
						</CloseButton>
					</SectionHeader>
					<ProductSectionBody>
						<MenuPopperGridItem gridArea='Atlas'>
							<MenuPopperIconContainer>
								<AtlasIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								Atlas
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='Climate'>
							<MenuPopperIconContainer>
								<ClimateIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								Climate
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='Identity'>
							<MenuPopperIconContainer>
								<IdentityIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								Identity
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='Issuing'>
							<MenuPopperIconContainer>
								<IsuingIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								Issuing
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='payment-links'>
							<MenuPopperIconContainer>
								<PaymentLinksIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540', whiteSpace: 'nowrap' }}>
								payment links
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='sigma'>
							<MenuPopperIconContainer>
								<SigmaIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								sigma
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='terminal'>
							<MenuPopperIconContainer>
								<TerminalIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								terminal
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='Billing'>
							<MenuPopperIconContainer>
								<BillingIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								billing
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='Connect'>
							<MenuPopperIconContainer>
								<ConnectIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								connect
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='Invoicing'>
							<MenuPopperIconContainer>
								<InvoicingIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								Invoicing
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='payments'>
							<MenuPopperIconContainer>
								<PaymentIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								payments
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='radar'>
							<MenuPopperIconContainer>
								<RadarIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								radar
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='tax'>
							<MenuPopperIconContainer>
								<TaxIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								tax
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
					</ProductSectionBody>
				</Section>
				{/* usecase section */}
				<Section>
					<SectionHeader>
						<Typography variant='nav_menu_inner_title'>use case</Typography>
					</SectionHeader>
					<UsecaseSectionBody>
						<MenuPopperGridItem gridArea='SaaS'>
							<MenuPopperIconContainer>
								<SaasIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								Saas
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='MarketPlace'>
							<MenuPopperIconContainer>
								<MarketPlaceIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								Marketplaces
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
						<MenuPopperGridItem gridArea='Platforms'>
							<MenuPopperIconContainer>
								<PlatFormIcon />
							</MenuPopperIconContainer>
							<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
								Platforms
							</Typography>
							<CustomArrowForwardIos />
							<CustomArrowForward />
						</MenuPopperGridItem>
					</UsecaseSectionBody>
				</Section>
				<LastSectionBody>
					<MenuPopperGridItem gridArea='Pricing'>
						<MenuPopperIconContainer>
							<PricingIcon />
						</MenuPopperIconContainer>
						<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
							Pricing
						</Typography>
						<CustomArrowForwardIos />
						<CustomArrowForward />
					</MenuPopperGridItem>
					<MenuPopperGridItem gridArea='About-Stripe'>
						<MenuPopperIconContainer>
							<DollarIcon />
						</MenuPopperIconContainer>
						<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
							about stripe
						</Typography>
						<CustomArrowForwardIos />
						<CustomArrowForward />
					</MenuPopperGridItem>
					<MenuPopperGridItem gridArea='Enterprise'>
						<MenuPopperIconContainer>
							<EnterpriseIcon />
						</MenuPopperIconContainer>
						<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
							Enterprise
						</Typography>
						<CustomArrowForwardIos />
						<CustomArrowForward />
					</MenuPopperGridItem>
					<MenuPopperGridItem gridArea='Jobs'>
						<MenuPopperIconContainer>
							<BagIcon />
						</MenuPopperIconContainer>
						<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
							Jobs
						</Typography>
						<CustomArrowForwardIos />
						<CustomArrowForward />
					</MenuPopperGridItem>
					<MenuPopperGridItem gridArea='Partner'>
						<MenuPopperIconContainer>
							<PartnersIcon />
						</MenuPopperIconContainer>
						<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
							Partners
						</Typography>
						<CustomArrowForwardIos />
						<CustomArrowForward />
					</MenuPopperGridItem>
					<MenuPopperGridItem gridArea='Newsroom'>
						<MenuPopperIconContainer>
							<NewsRoomIcon />
						</MenuPopperIconContainer>
						<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
							Newsroom
						</Typography>
						<CustomArrowForwardIos />
						<CustomArrowForward />
					</MenuPopperGridItem>
					<MenuPopperGridItem gridArea='Documentation'>
						<MenuPopperIconContainer>
							<BookMarkIcon />
						</MenuPopperIconContainer>
						<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
							Documentations
						</Typography>
						<CustomArrowForwardIos />
						<CustomArrowForward />
					</MenuPopperGridItem>
					<MenuPopperGridItem gridArea='Support'>
						<MenuPopperIconContainer>
							<SupportIcon />
						</MenuPopperIconContainer>
						<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
							Support
						</Typography>
						<CustomArrowForwardIos />
						<CustomArrowForward />
					</MenuPopperGridItem>
					<MenuPopperGridItem gridArea='Blog'>
						<MenuPopperIconContainer>
							<PenIcon />
						</MenuPopperIconContainer>
						<Typography variant='nav_menu_inner_label' sx={{ color: '#0a2540' }}>
							Blog
						</Typography>
						<CustomArrowForwardIos />
						<CustomArrowForward />
					</MenuPopperGridItem>
				</LastSectionBody>
				<PopperSectionFooter>
					<MenuPoperSignInButton
						endIcon={
							<React.Fragment>
								<ArrowForwardIosIcon />
								<ArrowForwardIcon />
							</React.Fragment>
						}>
						Sign in
					</MenuPoperSignInButton>
				</PopperSectionFooter>
			</MenuPopperInner>
		</MenuPopper>
	);
};

export default MenuBtnPopperWrapper;
