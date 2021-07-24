import React from 'react';
import { Box, Popper, Paper } from '@material-ui/core';
import { styled } from '@material-ui/system';
import BookMarkIcon from '../../SvgIcon/BookMark/BookMarkIcon';
import { TextLabel, InnerArrow, TextSubTitle } from '../ProductMenu/ProductMenuWrapper';
import FourRowMenuIcon from '../../SvgIcon/FourRowMenu/FourRowMenuIcon';
import SupportIcon from '../../SvgIcon/Support/SupportIcon';
import APIStatusIcon from '../../SvgIcon/APIStatus/APIStatusIcon';
import APIchangeLog from '../../SvgIcon/APIchangeLog/APIchangeLogIcon';
const DevelopersPopper = styled(Popper, { name: 'developers-popper' })(({ theme }) => ({}));
const DevelopersPopperLayOut = styled(Paper, { name: 'Developer-popper-inner' })(({ theme }) => ({
	width: '604px',
	height: '392px',
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	alignItems: 'flex-start'
}));
const DeveloperPopperBody = styled(Box, { name: 'developers-popper-body' })(({ theme }) => ({
	padding: theme.spacing(8),
	width: '100%',
	height: '268px',
	display: 'grid',
	gap: `${theme.spacing(8)}`,
	gridTemplateColumns: 'repeat(2,1fr)',
	gridTemplateRows: '40px 132px',
	gridTemplateAreas: `"header header"
                      "get-started guides"`
}));
const DeveloperPopperFooter = styled(Box, { name: 'developers-popper-footer' })(({ theme }) => ({
	padding: theme.spacing(7),
	margin: theme.spacing(1),
	backgroundColor: '#f6f9fc',
	borderRadius: '4px',
	width: 'calc(100% - 8px)',
	flexGrow: 1,
	display: 'grid',
	gap: `${theme.spacing(3)} ${theme.spacing(8)}`, // row gap 12px column gap 32px
	gridTemplateColumns: 'repeat(2,1fr)',
	gridTemplateRows: 'repeat(2,1fr)',
	gridTemplateAreas: `"API-reference API-status"
                      "support API-changeLog"`
}));
export const FooterInnerBox = styled(Box, { name: 'footer-inner-box' })(({ theme, gridArea }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	gridArea: gridArea,
	cursor: 'pointer',
	'&:hover .MuiSvgIcon-root': {
		path: {
			stroke: '#0a2540',
			fill: '#0a2540'
		}
	}
}));
const DeveloperPopperBodyHeader = styled(Box, { name: 'developer-popper-body-header' })(({ theme }) => ({
	gridArea: 'header',
	display: 'flex',
	cursor: 'pointer',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	'&:hover .MuiSvgIcon-root': {
		path: {
			fill: '#0a2540'
		}
	},
	'&:hover .MuiTypography-root': {
		'.MuiSvgIcon-root': {
			opacity: 1
		}
	}
}));
export const DeveloperPopperIconContainer = styled(Box, { name: 'developer-popper-icon-container' })(({ theme }) => ({
	width: '16px',
	height: '16px',
	margin: '0px 10px 0 0'
}));
export const DeveloperPopperTextContainer = styled(Box, { name: 'developer-popper-text-container' })(({ theme }) => ({
	flexGrow: 1,
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start'
}));
const GetStartedColumn = styled(Box, { name: 'get-start-column' })(({ theme }) => ({
	gridArea: 'get-started',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start'
}));
const GuidesColumn = styled(Box, { name: 'guides-column' })(({ theme }) => ({
	gridArea: 'guides',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start'
}));

const UpwardArrow = styled(Box, { name: 'developers-popper-upward-arrow' })(({ theme }) => ({
	width: '14px',
	height: '14px',
	position: 'absolute',
	top: '3px',
	left: '300px',
	transform: 'rotate(45deg) translate(-50%,-50%)',
	backgroundColor: theme.palette.common.white,
	borderRadius: '3px',
	boxShadow: '-3px -3px 5px rgb(82 95 127 / 4%)'
}));
const DevelopersMenuWrapper = ({ anchorEl, open, onClose }) => {
	return (
		<DevelopersPopper
			id='usecase-popper'
			anchorEl={anchorEl}
			open={open}
			onMouseLeave={onClose}
			disablePortal={true}
			placement='bottom'>
			<DevelopersPopperLayOut>
				<UpwardArrow />
				<DeveloperPopperBody>
					<DeveloperPopperBodyHeader>
						<DeveloperPopperIconContainer>
							<BookMarkIcon />
						</DeveloperPopperIconContainer>
						<DeveloperPopperTextContainer>
							<TextLabel component='h6'>
								Documentation <InnerArrow />
							</TextLabel>
							<TextSubTitle>Start integrating Stripe’s products and tools</TextSubTitle>
						</DeveloperPopperTextContainer>
					</DeveloperPopperBodyHeader>
					<GetStartedColumn>
						<TextLabel component='h1' sx={{ color: '#8898aa', textTransform: 'uppercase', margin: '0 0 8px 26px' }}>
							get started
						</TextLabel>
						<Box component='ul' sx={{ padding: 0 }}>
							<TextSubTitle sx={{ margin: '0 0 8px 26px', color: '#0a2540', opacity: 0.8, '&:hover': { opacity: 1 } }}>
								Prebuilt checkout
							</TextSubTitle>
							<TextSubTitle sx={{ margin: '0 0 8px 26px', color: '#0a2540', opacity: 0.8, '&:hover': { opacity: 1 } }}>
								Libraries and SDKs
							</TextSubTitle>
							<TextSubTitle sx={{ margin: '0 0 8px 26px', color: '#0a2540', opacity: 0.8, '&:hover': { opacity: 1 } }}>
								Plugins
							</TextSubTitle>
							<TextSubTitle sx={{ margin: '0 0 8px 26px', color: '#0a2540', opacity: 0.8, '&:hover': { opacity: 1 } }}>
								Code samples
							</TextSubTitle>
						</Box>
					</GetStartedColumn>
					<GuidesColumn>
						<TextLabel component='h1' sx={{ color: '#8898aa', textTransform: 'uppercase', margin: '0 0 8px 26px' }}>
							Guides
						</TextLabel>
						<Box component='ul' sx={{ padding: 0 }}>
							<TextSubTitle
								sx={{
									margin: '0 0 8px 26px',
									color: '#0a2540',
									opacity: 0.8,
									textTransform: 'capitalize',
									'&:hover': { opacity: 1 }
								}}>
								accepte online payments
							</TextSubTitle>
							<TextSubTitle
								sx={{
									margin: '0 0 8px 26px',
									color: '#0a2540',
									opacity: 0.8,
									textTransform: 'capitalize',
									'&:hover': { opacity: 1 }
								}}>
								manage subscriptions
							</TextSubTitle>
							<TextSubTitle
								sx={{
									margin: '0 0 8px 26px',
									color: '#0a2540',
									opacity: 0.8,
									textTransform: 'capitalize',
									'&:hover': { opacity: 1 }
								}}>
								send panyments
							</TextSubTitle>
							<TextSubTitle
								sx={{
									margin: '0 0 8px 26px',
									color: '#0a2540',
									opacity: 0.8,
									textTransform: 'capitalize',
									'&:hover': { opacity: 1 }
								}}>
								set up in person payments
							</TextSubTitle>
						</Box>
					</GuidesColumn>
				</DeveloperPopperBody>
				<DeveloperPopperFooter>
					<FooterInnerBox gridArea='API-reference' className='api-reference-box'>
						<DeveloperPopperIconContainer>
							<FourRowMenuIcon />
						</DeveloperPopperIconContainer>
						<TextLabel sx={{ color: '#0a2540', top: '50%', transform: 'translateY(-50%)' }}>
							Full API reference
						</TextLabel>
					</FooterInnerBox>
					<FooterInnerBox className='support-box' gridArea='support'>
						<DeveloperPopperIconContainer>
							<SupportIcon />
						</DeveloperPopperIconContainer>
						<TextLabel sx={{ color: '#0a2540', top: '50%', transform: 'translateY(-50%)' }}>support</TextLabel>
					</FooterInnerBox>
					<FooterInnerBox className='API-status-box' gridArea='API-status'>
						<DeveloperPopperIconContainer>
							<APIStatusIcon />
						</DeveloperPopperIconContainer>
						<TextLabel sx={{ color: '#0a2540', top: '50%', transform: 'translateY(-50%)' }}>API status</TextLabel>
					</FooterInnerBox>
					<FooterInnerBox className='API-changeLog-box' gridArea='API-changeLog'>
						<DeveloperPopperIconContainer>
							<APIchangeLog />
						</DeveloperPopperIconContainer>
						<TextLabel sx={{ color: '#0a2540', top: '50%', transform: 'translateY(-50%)' }}>API changelog</TextLabel>
					</FooterInnerBox>
				</DeveloperPopperFooter>
			</DevelopersPopperLayOut>
		</DevelopersPopper>
	);
};

export default DevelopersMenuWrapper;
