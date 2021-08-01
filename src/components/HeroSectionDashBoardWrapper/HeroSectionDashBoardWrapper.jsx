import React from 'react';
import { Box, Typography, Button, InputBase } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import { SearchOutlined } from '@material-ui/icons';
import RockectRidesIcon from '../../SvgIcon/RocketRides/RocketRidesIcon';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SearchFieldRightSideIcon from '../../SvgIcon/SearchFieldRightISideIcon/SearchFieldRightSideIcon';
import GrossVolumnTodayChart from '../../SvgIcon/GrossVolumnTodayChart/GrossVolumnTodayChart';
import GearIcon from '../../SvgIcon/Gear/GearIcon';
import ReportSummeryGrossVolumnChart from '../../SvgIcon/ReportSummeryGrossVolumnChart/ReportSumeryGrossVolumnChart';
import ReportSummeryNetVolumnChart from '../../SvgIcon/ReportSummeryNetVolumnChart/ReportSummeryNetVolumnChart';
import ReportSummeryDisputeActivityChart from '../../SvgIcon/ReportSummeryDisputeActivityChart/ReportSummeryDisputeActivityChart';
const HeroSectionGraphicDashBoard = styled('div', { name: 'hero-section-graphic-dash-board' })(({ theme }) => ({
	display: 'grid',
	gridTemplateRows: 'auto',
	gridTemplateColumns: '152px 1fr',
	gridTemplateAreas: `"side-bar content"`,
	gap: '24px',
	width: '929px',
	padding: '24px',
	borderRadius: '8px',
	background: 'linear-gradient(hsla(0,0%,100%,.4),hsla(0,0%,100%,.3) 25%,rgba(246,249,252,.3) 50%,#f6f9fc 60%)',
	boxShadow:
		'inset 0 1px 1px 0 hsl(0deg 0% 100% / 10%), 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%)',
	userSelect: ' none',
	position: 'absolute',
	top: 0,
	// sidebar right side stick to the right side of the phone, 264(phone width) + 40 (phone left position poperty) -152(sidebar width) - 24(padding) = 128px
	left: '128px',
	margin: 0,
	zIndex: 3,
	pointerEvents: 'none'
}));
const HeroSectionGraphicSidebar = styled('div', { name: 'hero-section-graphic-dash-board-sidebar' })(({ theme }) => ({
	gridArea: 'side-bar',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'flex-start'
}));
const HeroSectionGraphicContent = styled('div', { name: 'hero-section-graphic-dash-board-content' })(({ theme }) => ({
	gridArea: 'content',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'flex-start',
	gap: theme.spacing(8)
}));
export const HeroSectionGraphicContentToolbar = styled('div', {
	name: 'hero-section-graphic-dash-board-content-toobar'
})(({ theme }) => ({
	width: '100%',
	height: '20px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between'
}));
export const HeroSectionGraphicContentToolbarSearchField = styled(InputBase, {
	name: 'hero-section-graphic-dash-board-content-toolbar-search-field'
})(({ theme }) => ({
	...theme.typography.DashboardGraphic__content_toolbar__search__field,
	width: '50%',
	height: '20px',
	display: 'flex',
	alignItems: 'center',
	color: '#62788d',
	backgroundColor: '#fff',
	boxShadow: '0 0 0 1px rgb(50 50 93 / 7%), 0 2px 3px -1px rgb(50 50 93 / 12%), 0 1px 3px -1px rgb(0 0 0 / 12%)',
	borderRadius: '4px',
	pointerEvents: 'none',
	'& .MuiSvgIcon-root': {
		width: '12px',
		height: '12px',
		fill: '#62788D',
		margin: '1px 5px 0 6px'
	}
}));
const HeroSectionGraphicContentGraphicBox = styled(Box, {
	name: 'graphic-dash-board-content-graphic-box'
})(({ theme }) => ({
	width: '100%',
	backgroundColor: '#fff',
	boxShadow: '0 2px 4px -1px rgb(6 24 44 / 20%)',
	borderRadius: '4px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'flex-start'
}));
const HeroSectionGraphicContentGraphicBoxInnerToolbar = styled(Box, { name: 'graphic-box-inner-toobar' })(
	({ theme }) => ({
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: theme.spacing(4)
	})
);
const HeroSectionGraphicContentGraphicGrid = styled(Box, { name: 'graphic-box-inner-chartbox-grid-container' })(
	({ theme }) => ({
		width: '100%',
		height: 'auto',
		borderTop: '1px solid #e6ebf1',
		display: 'grid',
		gridTemplateRows: 'repeat(2,1fr)',
		gridTemplateColumns: '470px 235px',
		gridTemplateAreas: `"Gross-volumn Balance"
	                      "Gross-volumn Payouts"`
	})
);

const HeroSectionReportSummeryGraphicGrid = styled(Box, { name: 'report-summery-grid-container' })(({ theme }) => ({
	width: '100%',
	height: 'auto',
	borderTop: '1px solid #e6ebf1',
	display: 'grid',
	gridTemplateRows: '145px',
	gridTemplateColumns: 'repeat(3,1fr)',
	gridTemplateAreas: `"Gross-volumns Net-volumns Dispute-activity"`
}));

const GrossVolumnContainer = styled(Box, { name: 'gross-volumn-container' })(({ theme }) => ({
	padding: '15px 16px 13px 16px',
	gridArea: 'Gross-volumn',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	position: 'relative',
	borderRight: '1px solid #e6ebf1'
}));
const GrossVolumnHeader = styled(Box, { name: 'gross-volumn-header' })(({ theme }) => ({
	position: 'absolute',
	top: '15px',
	left: '16px',
	right: 0,
	height: '119px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start'
}));
const GrossVolumnHeaderInner = styled(Box, { name: 'gross-volumn-header-inner' })(({ theme }) => ({
	height: '100%',
	width: 'fit-content',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start'
}));
const GrossVolumnChartAxis = styled(Box, { name: 'today-chart-axis' })(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-start',
	width: '100%',
	padding: '2px 0 0 0',
	borderTop: '1px solid #e6ebf1'
}));
const ToolbarButton = styled(Button, { name: 'dash-board-toolbar-button' })(({ theme }) => ({
	...theme.typography.DashboardGraphic__content_graphicBox_toolbar_title,
	padding: '3px 6px',
	boxShadow: '0 0 1px 0 rgb(6 24 44 / 18%), 0 1px 2px 0 rgb(6 24 44 / 20%)',
	borderRadius: '4px'
}));
export const HeroSectionGraphicSidebarHeader = styled('div', {
	name: 'hero-section-graphic-dash-board-sidebar-header'
})(({ theme }) => ({
	width: '100%',
	height: '20px',
	display: 'flex',
	alignItems: 'center',
	gap: '8px',
	justifyContent: 'space-between',
	'& > svg:nth-of-type(2)': {
		width: '12px',
		height: '12px',
		fill: '#fff'
	}
}));
const PositiveBadge = styled('div', { name: 'positve-growth-badge' })(({ theme }) => ({
	...theme.typography.DashboardGraphic__content_toolbar__search__field,
	margin: theme.spacing(0, 0, 0, 2),
	padding: theme.spacing(0, 1),
	borderRadius: '4px',
	fontWeight: 600,
	color: '#007e53',
	backgroundColor: '#def8dd'
}));
const NegativeBadge = styled('div', { name: 'negative-growth-badge' })(({ theme }) => ({
	...theme.typography.DashboardGraphic__content_toolbar__search__field,
	margin: theme.spacing(0, 0, 0, 2),
	padding: theme.spacing(0, 1),
	borderRadius: '4px',
	fontWeight: 600,
	color: ' #a54f1e',
	backgroundColor: '#f6e6b9'
}));
const HeroSectionDashBoardWrapper = () => {
	return (
		<HeroSectionGraphicDashBoard>
			<HeroSectionGraphicSidebar>
				<HeroSectionGraphicSidebarHeader>
					<RockectRidesIcon />
					<Typography variant='DashboardGraphic__sidebar_title'>Rocket Rides</Typography>
					<ExpandMore />
				</HeroSectionGraphicSidebarHeader>
			</HeroSectionGraphicSidebar>
			<HeroSectionGraphicContent>
				<HeroSectionGraphicContentToolbar>
					<HeroSectionGraphicContentToolbarSearchField startAdornment={<SearchOutlined />} placeholder='Search' />
					<SearchFieldRightSideIcon />
				</HeroSectionGraphicContentToolbar>
				<HeroSectionGraphicContentGraphicBox className='top-graphic-box'>
					<HeroSectionGraphicContentGraphicBoxInnerToolbar>
						<Typography variant='DashboardGraphic__content_graphicBox_toolbar_title'>Today</Typography>
					</HeroSectionGraphicContentGraphicBoxInnerToolbar>
					<HeroSectionGraphicContentGraphicGrid>
						<GrossVolumnContainer>
							<GrossVolumnHeader>
								<GrossVolumnHeaderInner>
									<Box
										className='header-dropdown'
										sx={{
											width: '100%',
											height: '20px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'fexl-start',
											gap: '4px'
										}}>
										<Typography variant='DashboardGraphic__content_graphicBox_toolbar_title' sx={{ color: '#62788d' }}>
											Gross volume
										</Typography>
										<ExpandMore sx={{ width: '12px', height: '12px', fill: '#425466' }} />
									</Box>
									<Typography
										variant='DashboardGraphic__content_graphicBox_toolbar_title'
										sx={{ color: '#515de1', margin: '5px 0 6px 0' }}>
										S$3,528,198.72
									</Typography>
									<Typography variant='DashboardGraphic__content_graphicBox_toolbar_title' sx={{ color: '#62788d' }}>
										1:00 PM
									</Typography>
								</GrossVolumnHeaderInner>
								<GrossVolumnHeaderInner sx={{ margin: '0 0 0 32px' }}>
									<Box
										className='header-dropdown'
										sx={{
											width: '100%',
											height: '20px',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'flex-start',
											gap: '4px'
										}}>
										<Typography variant='DashboardGraphic__content_graphicBox_toolbar_title' sx={{ color: '#62788d' }}>
											August 18
										</Typography>
										<ExpandMore sx={{ width: '12px', height: '12px', fill: '#425466' }} />
									</Box>
									<Typography
										variant='DashboardGraphic__content_graphicBox_toolbar_title'
										sx={{ color: '#62788d', margin: '5px 0 6px 0' }}>
										S$2,931,556.34
									</Typography>
									<Typography variant='DashboardGraphic__content_graphicBox_toolbar_title' sx={{ color: '#62788d' }}>
										1:00 PM
									</Typography>
								</GrossVolumnHeaderInner>
							</GrossVolumnHeader>
							<GrossVolumnTodayChart />
							<GrossVolumnChartAxis>
								<Typography variant='DashboardGraphic__content_toolbar__search__field'>12:00 AM</Typography>
								<Typography
									variant='DashboardGraphic__content_toolbar__search__field'
									sx={{ color: '#515de1', fontWeight: 450, margin: '0 auto 0 233px' }}>
									Now
								</Typography>
								<Typography variant='DashboardGraphic__content_toolbar__search__field'>11:59 PM</Typography>
							</GrossVolumnChartAxis>
						</GrossVolumnContainer>
						<Box
							gridArea='Balance'
							sx={{
								padding: '15px 16px 13px 16px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								borderBottom: '1px solid #e6ebf1'
							}}>
							<GrossVolumnHeaderInner>
								<Box
									className='header-dropdown'
									sx={{
										width: '100%',
										height: '20px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'fexl-start',
										gap: '4px'
									}}>
									<Typography variant='DashboardGraphic__content_graphicBox_toolbar_title' sx={{ color: '#62788d' }}>
										Balance
									</Typography>
									<ExpandMore sx={{ width: '12px', height: '12px', fill: '#425466' }} />
								</Box>
								<Typography
									variant='DashboardGraphic__content_graphicBox_toolbar_title'
									sx={{ color: '#515de1', margin: '5px 0 6px 0' }}>
									S$553,257.51
								</Typography>
								<Typography variant='DashboardGraphic__content_graphicBox_toolbar_title' sx={{ color: '#62788d' }}>
									Available to pay out
								</Typography>
							</GrossVolumnHeaderInner>
							<Typography
								variant='DashboardGraphic__content_graphicBox_toolbar_title'
								sx={{ color: '#515de1', margin: '5px 0 6px 0' }}>
								view detail
							</Typography>
						</Box>
						<Box
							gridArea='Payouts'
							sx={{
								padding: '15px 16px 13px 16px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between'
							}}>
							<GrossVolumnHeaderInner>
								<Box
									className='header-dropdown'
									sx={{
										width: '100%',
										height: '20px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'fexl-start',
										gap: '4px'
									}}>
									<Typography variant='DashboardGraphic__content_graphicBox_toolbar_title' sx={{ color: '#62788d' }}>
										Payouts
									</Typography>
									<ExpandMore sx={{ width: '12px', height: '12px', fill: '#425466' }} />
								</Box>
								<Typography
									variant='DashboardGraphic__content_graphicBox_toolbar_title'
									sx={{ color: '#515de1', margin: '5px 0 6px 0' }}>
									S$102,633.07
								</Typography>
								<Typography variant='DashboardGraphic__content_graphicBox_toolbar_title' sx={{ color: '#62788d' }}>
									Expected today
								</Typography>
							</GrossVolumnHeaderInner>
							<Typography
								variant='DashboardGraphic__content_graphicBox_toolbar_title'
								sx={{ color: '#515de1', margin: '5px 0 6px 0' }}>
								view detail
							</Typography>
						</Box>
					</HeroSectionGraphicContentGraphicGrid>
				</HeroSectionGraphicContentGraphicBox>
				<HeroSectionGraphicContentGraphicBox className='bottom-graphic-box'>
					<HeroSectionGraphicContentGraphicBoxInnerToolbar>
						<Box className='toolbar-heading'>
							<Typography variant='DashboardGraphic__content_graphicBox_toolbar_title'>Reports summary</Typography>
							<Box
								className='toobar-subtitle'
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'flex-start',
									gap: '8px',
									margin: '4px 0 0 0'
								}}>
								<Box
									className='header-dropdown'
									sx={{
										width: '100%',
										height: '20px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'fexl-start',
										gap: '4px'
									}}>
									<Typography
										variant='DashboardGraphic__content_graphicBox_toolbar_title'
										sx={{ color: '#62788d', whiteSpace: 'nowrap' }}>
										Last 4 weeks
									</Typography>
									<ExpandMore sx={{ width: '12px', height: '12px', fill: '#425466' }} />
								</Box>
								<Box
									className='header-dropdown'
									sx={{
										width: '100%',
										height: '20px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'flex-start',
										gap: '4px'
									}}>
									<Typography
										variant='DashboardGraphic__content_graphicBox_toolbar_title'
										sx={{ color: '#62788d', whiteSpace: 'nowrap' }}>
										July 18 - August 18
									</Typography>
									<ExpandMore sx={{ width: '12px', height: '12px', fill: '#425466' }} />
								</Box>
								<Box
									className='header-dropdown'
									sx={{
										width: '100%',
										height: '20px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'flex-start',
										gap: '4px'
									}}>
									<Typography
										variant='DashboardGraphic__content_graphicBox_toolbar_title'
										sx={{ color: '#62788d', whiteSpace: 'nowrap' }}>
										Compared to previous period
									</Typography>
									<ExpandMore sx={{ width: '12px', height: '12px', fill: '#425466' }} />
								</Box>
							</Box>
						</Box>
						<Box className='toolbar-button'>
							<ToolbarButton startIcon={<GearIcon />}>Customize</ToolbarButton>
						</Box>
					</HeroSectionGraphicContentGraphicBoxInnerToolbar>
					<HeroSectionReportSummeryGraphicGrid>
						{/*first one */}
						<Box
							gridArea='Gross-volumns'
							sx={{
								padding: '15px 16px 13px 16px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start',
								justifyContent: 'flex-start',
								borderRight: '1px solid #e6ebf1'
							}}>
							<Box
								className='header-dropdown'
								sx={{
									width: '100%',
									height: '20px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'fexl-start',
									gap: '4px'
								}}>
								<Typography variant='DashboardGraphic__content_graphicBox_toolbar_title' sx={{ color: '#62788d' }}>
									Gross volume
								</Typography>
								<PositiveBadge>+4.6%</PositiveBadge>
							</Box>
							<Box
								className='primary-data-wrapper'
								sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
								<Typography
									variant='DashboardGraphic__content_graphicBox_toolbar_title'
									sx={{ color: '#515de1', margin: '5px 0 6px 0' }}>
									S$4,542,345.45
								</Typography>
								<Typography
									variant='DashboardGraphic__content_graphicBox_toolbar_title'
									sx={{ color: '#62788d', margin: '5px 0 6px 0' }}>
									S$4,062,124.33
								</Typography>
							</Box>
							<ReportSummeryGrossVolumnChart sx={{ margin: '5px 0 6px 0' }} />
							<GrossVolumnChartAxis sx={{ justifyContent: 'space-between' }}>
								<Typography variant='DashboardGraphic__content_toolbar__search__field'>Jul 18</Typography>
								<Typography variant='DashboardGraphic__content_toolbar__search__field'>Aug 18</Typography>
							</GrossVolumnChartAxis>
						</Box>
						{/*sencond one */}
						<Box
							gridArea='Net-volumns'
							sx={{
								padding: '15px 16px 13px 16px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start',
								justifyContent: 'flex-start',
								borderRight: '1px solid #e6ebf1'
							}}>
							<Box
								className='header-dropdown'
								sx={{
									width: '100%',
									height: '20px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'fexl-start',
									gap: '4px'
								}}>
								<Typography variant='DashboardGraphic__content_graphicBox_toolbar_title' sx={{ color: '#62788d' }}>
									Net volume from sales
								</Typography>
								<PositiveBadge>+4.2%</PositiveBadge>
							</Box>
							<Box
								className='primary-data-wrapper'
								sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
								<Typography
									variant='DashboardGraphic__content_graphicBox_toolbar_title'
									sx={{ color: '#515de1', margin: '5px 0 6px 0' }}>
									S$4,180,332.54
								</Typography>
								<Typography
									variant='DashboardGraphic__content_graphicBox_toolbar_title'
									sx={{ color: '#62788d', margin: '5px 0 6px 0' }}>
									S$3,732,991.10
								</Typography>
							</Box>
							<ReportSummeryNetVolumnChart sx={{ margin: '5px 0 6px 0' }} />
							<GrossVolumnChartAxis sx={{ justifyContent: 'space-between' }}>
								<Typography variant='DashboardGraphic__content_toolbar__search__field'>Jul 18</Typography>
								<Typography variant='DashboardGraphic__content_toolbar__search__field'>Aug 18</Typography>
							</GrossVolumnChartAxis>
						</Box>
						{/*third one */}
						<Box
							gridArea='Dispute-activity'
							sx={{
								padding: '15px 16px 13px 16px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'flex-start',
								justifyContent: 'flex-start'
							}}>
							<Box
								className='header-dropdown'
								sx={{
									width: '100%',
									height: '20px',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'fexl-start',
									gap: '4px'
								}}>
								<Typography variant='DashboardGraphic__content_graphicBox_toolbar_title' sx={{ color: '#62788d' }}>
									dispute activity
								</Typography>
								<NegativeBadge>-1.9%</NegativeBadge>
							</Box>
							<Box
								className='primary-data-wrapper'
								sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
								<Typography
									variant='DashboardGraphic__content_graphicBox_toolbar_title'
									sx={{ color: '#515de1', margin: '5px 0 6px 0' }}>
									0.36%
								</Typography>
								<Typography
									variant='DashboardGraphic__content_graphicBox_toolbar_title'
									sx={{ color: '#62788d', margin: '5px 0 6px 0' }}>
									0.37%
								</Typography>
							</Box>
							<ReportSummeryDisputeActivityChart sx={{ margin: '5px 0 6px 0' }} />
							<GrossVolumnChartAxis sx={{ justifyContent: 'space-between' }}>
								<Typography variant='DashboardGraphic__content_toolbar__search__field'>Jul 18</Typography>
								<Typography variant='DashboardGraphic__content_toolbar__search__field'>Aug 18</Typography>
							</GrossVolumnChartAxis>
						</Box>
					</HeroSectionReportSummeryGraphicGrid>
				</HeroSectionGraphicContentGraphicBox>
			</HeroSectionGraphicContent>
		</HeroSectionGraphicDashBoard>
	);
};

export default HeroSectionDashBoardWrapper;
