import React from 'react';
import { Box, Popper, Paper, Typography } from '@material-ui/core';
import { styled } from '@material-ui/system';
import { DeveloperPopperIconContainer, FooterInnerBox } from '../DevelopersMenu/DevelopersMenuWrapper';
import { TextLabel } from '../ProductMenu/ProductMenuWrapper';
import DollarIcon from '../../SvgIcon/Dollar/DollarIcon';
import BagIcon from '../../SvgIcon/Bag/BagIcon';
import CustomerIcon from '../../SvgIcon/Customers/CustomersIcon';
import NewsRoomIcon from '../../SvgIcon/NewsRoom/NewsRoomIcon';
import EnterpriseIcon from '../../SvgIcon/Enterprise/EnterpriseIcon';
import PartnersIcon from '../../SvgIcon/Partners/PartnersIcon';
import PenIcon from '../../SvgIcon/Pen/PenIcon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const CompanyPopper = styled(Popper, { name: 'company-popper' })(({ theme }) => ({}));
const CompanyPopperLayOut = styled(Paper, { name: 'company-popper-inner' })(({ theme }) => ({
	width: '476px',
	height: '336px',
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	alignItems: 'flex-start'
}));
const CompanyPopperBody = styled(Box, { name: 'company-popper-body' })(({ theme }) => ({
	padding: theme.spacing(8),
	width: '100%',
	height: '160px',
	display: 'grid',
	gap: `${theme.spacing(3)} ${theme.spacing(8)}`,
	gridTemplateColumns: 'repeat(2,1fr)',
	gridTemplateRows: 'repeat(3,1fr)',
	gridTemplateAreas: `"about       Job"
                      "customers   newsroom"
                      "enterprise  partners"`
}));
const CompanyPopperFooter = styled(Box, { name: 'company-popper-footer' })(({ theme }) => ({
	padding: theme.spacing(7),
	margin: theme.spacing(1),
	backgroundColor: '#f6f9fc',
	borderRadius: '4px',
	width: 'calc(100% - 8px)',
	flexGrow: 1,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start'
}));
const CompanyPopperFooterSubtitle = styled(Typography, { name: 'company-popper-footer-subtitle' })(({ theme }) => ({
	...theme.typography.nav_menu_inner_body,
	color: '#0a2540',
	opacity: 0.8,
	'&:hover': {
		opacity: 1
	},
	'& .MuiSvgIcon-root': {
		width: '10px',
		height: '10px',
		opacity: 0
	},
	'&:hover .MuiSvgIcon-root': {
		opacity: 1
	}
}));
const UpwardArrow = styled(Box, { name: 'company-popper-upward-arrow' })(({ theme }) => ({
	width: '14px',
	height: '14px',
	position: 'absolute',
	top: '3px',
	left: '240px',
	transform: 'rotate(45deg) translate(-50%,-50%)',
	backgroundColor: theme.palette.common.white,
	borderRadius: '3px',
	boxShadow: '-3px -3px 5px rgb(82 95 127 / 4%)'
}));
const CompanyMenuWrapper = ({ anchorEl, open, onClose }) => {
	return (
		<CompanyPopper
			id='company-popper'
			anchorEl={anchorEl}
			open={open}
			onMouseLeave={onClose}
			disablePortal={true}
			placement='bottom'>
			<CompanyPopperLayOut>
				<UpwardArrow />
				<CompanyPopperBody>
					<FooterInnerBox gridArea='about'>
						<DeveloperPopperIconContainer>
							<DollarIcon />
						</DeveloperPopperIconContainer>
						<TextLabel sx={{ color: '#0a2540', top: '50%', transform: 'translateY(-50%)' }}>about stripe</TextLabel>
					</FooterInnerBox>
					<FooterInnerBox gridArea='Job'>
						<DeveloperPopperIconContainer>
							<BagIcon />
						</DeveloperPopperIconContainer>
						<TextLabel sx={{ color: '#0a2540', top: '50%', transform: 'translateY(-50%)' }}>Jobs</TextLabel>
					</FooterInnerBox>
					<FooterInnerBox gridArea='customers'>
						<DeveloperPopperIconContainer>
							<CustomerIcon />
						</DeveloperPopperIconContainer>
						<TextLabel sx={{ color: '#0a2540', top: '50%', transform: 'translateY(-50%)' }}>customers</TextLabel>
					</FooterInnerBox>
					<FooterInnerBox gridArea='newsroom'>
						<DeveloperPopperIconContainer>
							<NewsRoomIcon />
						</DeveloperPopperIconContainer>
						<TextLabel sx={{ color: '#0a2540', top: '50%', transform: 'translateY(-50%)' }}>newsroom</TextLabel>
					</FooterInnerBox>
					<FooterInnerBox gridArea='enterprise'>
						<DeveloperPopperIconContainer>
							<EnterpriseIcon />
						</DeveloperPopperIconContainer>
						<TextLabel sx={{ color: '#0a2540', top: '50%', transform: 'translateY(-50%)' }}>enterprise</TextLabel>
					</FooterInnerBox>
					<FooterInnerBox gridArea='partners'>
						<DeveloperPopperIconContainer>
							<PartnersIcon />
						</DeveloperPopperIconContainer>
						<TextLabel sx={{ color: '#0a2540', top: '50%', transform: 'translateY(-50%)' }}>partners</TextLabel>
					</FooterInnerBox>
				</CompanyPopperBody>
				<CompanyPopperFooter>
					<FooterInnerBox>
						<DeveloperPopperIconContainer>
							<PenIcon />
						</DeveloperPopperIconContainer>
						<TextLabel>From the blog</TextLabel>
					</FooterInnerBox>
					<CompanyPopperFooterSubtitle sx={{ margin: '12px 0 0 26px' }}>
						Stripe’s payments APIs: the first ten years <ArrowForwardIosIcon />
					</CompanyPopperFooterSubtitle>
					<CompanyPopperFooterSubtitle sx={{ margin: '8px 0 0 26px' }}>
						European payment methods available worldwide <ArrowForwardIosIcon />
					</CompanyPopperFooterSubtitle>
					<CompanyPopperFooterSubtitle sx={{ margin: '8px 0 0 26px' }}>
						We built Checkout so you don't have to <ArrowForwardIosIcon />
					</CompanyPopperFooterSubtitle>
				</CompanyPopperFooter>
			</CompanyPopperLayOut>
		</CompanyPopper>
	);
};

export default CompanyMenuWrapper;
