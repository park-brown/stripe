import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
import {
	HeroSectionGraphicContentToolbar,
	HeroSectionGraphicContentToolbarSearchField,
	HeroSectionGraphicSidebarHeader
} from '../HeroSectionDashBoardWrapper/HeroSectionDashBoardWrapper';
import RockectRidesIcon from '../../SvgIcon/RocketRides/RocketRidesIcon';
import ExpandMore from '@material-ui/icons/ExpandMore';
import HomeIcon from '../../SvgIcon/HomeIcon/HomeIcon';
import PaymentIconXs from '../../SvgIcon/PaymentIconXs/PaymentIconXs';
import CustomerIconXs from '../../SvgIcon/CustomersXs/CustomersXs';
import ProductIconXs from '../../SvgIcon/ProductXs/ProductIconXs';
import ReportIconXs from '../../SvgIcon/ReportXs/ReportIconXS';
import DevelopersIconXs from '../../SvgIcon/DevelopersXs/DevelopersIconXs';
import TestIconXs from '../../SvgIcon/TestIcon/TestIconXs';
import GearIconXs from '../../SvgIcon/GearIconXs/GearIcconXs';
import SearchFieldRightSideIcon from '../../SvgIcon/SearchFieldRightISideIcon/SearchFieldRightSideIcon';
import { SearchOutlined } from '@material-ui/icons';
import HorizontalLightBoltIcon from '../../SvgIcon/HorizontalLightbolt/HorizontalLightboltIcon';
import RadarDashboardGraphicchartLineTop from '../../SvgIcon/RadarDashboardGraphicchartLineTop/RadarDashboardGraphicchartLineTop';
import BlueRect from '../../SvgIcon/BlueRect/BlueRectIcon';
import FraudChart from '../../SvgIcon/FraudulentChart/FraudulentChart';
import SubscriptionChart from '../../SvgIcon/SubscriptionChart/SubscriptionChart';
import GeneralChart from '../../SvgIcon/GeneralChart/GeneralChart';
import ProductChart from '../../SvgIcon/ProductChart/ProductChart';
import RulePerformanceChart from '../../SvgIcon/RulePerformanceChart/RulePerformanceChart';

const RadarDashboardGraphicContainer = styled(Box, { name: 'RadarDashboardGraphic' })(({ theme, gridArea }) => ({
	display: 'grid',
	gridTemplateRows: 'auto',
	gridTemplateColumns: '152px auto',
	gridTemplateAreas: `"sidebar  content"`,
	gridArea: gridArea,
	gap: theme.spacing(6),
	width: '929px',
	padding: theme.spacing(6),
	borderRadius: '8px',
	backgroundImage: 'linear-gradient(#f5f8fb,#f1f6fa 15%)',
	boxShadow: ' 0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%)'

	// grid: auto/152px 1fr,
}));
const SideBar = styled(Box, { name: 'RadarDashboardGraphic__sidebar' })(({ theme }) => ({
	gridArea: 'sidebar',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	color: '#425466',
	gap: theme.spacing(6)
}));
const RocketRidesIconInBlack = styled(RockectRidesIcon, { name: 'rokcket-ride-icon-black' })(({ theme }) => ({
	'& path': {
		fill: 'rgb(66, 84, 102)'
	}
}));
const NavContainer = styled(Box, { name: 'RadarDashboardGraphic__nav' })(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	gap: theme.spacing(2),
	width: '100%',
	padding: theme.spacing(0, 0, 0, 1)
}));
const NavItem = styled(Box, { name: 'RadarDashboardGraphic__nav__item' })(({ theme }) => ({
	display: 'grid',
	gridTemplateRows: 'auto',
	gridTemplateColumns: '13px auto',
	gridTemplateAreas: `"icon text"`,
	gap: theme.spacing(2),
	alignItems: 'center',
	textAlign: 'left'
}));
const SubItem = styled(Box, { name: 'RadarDashboardGraphic__nav__sub__item' })(({ theme }) => ({
	...theme.typography.RadarDashboardGraphic__sidebar_navItem,
	width: '100%',
	margin: '0 0 8px 25px'
}));
const ContentContainer = styled(Box, { name: 'RadarDashboardGraphic__content' })(({ theme }) => ({
	gridArea: 'content',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start',
	gap: theme.spacing(6)
}));
const RadarDashboardGraphicBox = styled(Box, { name: 'RadarDashboardGraphic__box' })(({ theme }) => ({
	width: '100%',
	borderRadius: '4px',
	background: ' #fff',
	boxShadow: '0 2px 4px -1px rgb(6 24 44 / 20%)'
}));
const RadarDashboardGraphicToolbar = styled(Box, { name: 'RadarDashboardGraphic__toolbar' })(({ theme }) => ({
	display: 'flex',
	width: '100%',
	alignItems: 'center',
	justifyContent: 'flex-start'
}));
const RadarDashboardGraphicSegmentedControl = styled(Box, { name: 'RadarDashboardGraphic__segmentedControl' })(
	({ theme }) => ({
		display: 'grid',
		gridAutoFlow: 'column',
		gap: '6px',
		margin: '13px 0 13px 13px',
		padding: '3px 8px',
		boxShadow: ' 0 0 1px 0 rgb(6 24 44 / 18%), 0 1px 2px 0 rgb(6 24 44 / 20%)',
		borderRadius: '4px'
	})
);
const RadarDashboardGraphicCharts = styled(Box, { name: 'RadarDashboardGraphic__charts' })(({ theme }) => ({
	width: '100%',
	display: 'grid',
	gridTemplateColumns: 'repeat(2,1fr)',
	gridTemplateRows: 'repeat(2,auto)',
	gridTemplateAreas: `"Disputes           Top-dispute-reasons"
                      "Rule-Performance   chartLegends-rules"`
}));
const RadarDashboardGraphicChart = styled(Box, { name: 'RadarDashboardGraphic__chart' })(({ theme, gridArea }) => ({
	gridArea: gridArea,
	padding: theme.spacing(4),
	borderTop: '1px solid #e6ebf1',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'flex-start'
}));
const RadarDashboardGraphicChartAxis = styled(Box, { name: 'RadarDashboardGraphic__chartAxis' })(({ theme }) => ({
	width: '100%',
	position: 'relative',
	display: 'grid',
	// grid: 86px/repeat(4,1fr),
	gridTemplateRows: '86px',
	gridTemplateColumns: 'repeat(4,1fr)',
	margin: theme.spacing(4, 0, 2, 0),
	border: '1px solid #e6ebf1'
}));
const RadarDashboardGraphicChartCell = styled(Box, { name: 'RadarDashboardGraphic__chartCell' })(({ theme }) => ({
	borderRight: '1px solid #e6ebf1',
	display: 'flex',
	alignItems: 'flex-end',
	justifyContent: 'center'
}));
const RadarDashboardGraphic = (props) => {
	const { gridArea } = props;
	return (
		<RadarDashboardGraphicContainer gridArea={gridArea}>
			<SideBar>
				<HeroSectionGraphicSidebarHeader>
					<RocketRidesIconInBlack />
					<Typography variant='DashboardGraphic__sidebar_title' sx={{ color: '#425466' }}>
						Rocket Rides
					</Typography>
					<ExpandMore
						sx={{
							'& path': {
								fill: 'rgb(66, 84, 102)'
							}
						}}
					/>
				</HeroSectionGraphicSidebarHeader>
				<NavContainer>
					<NavItem>
						<Box gridArea='icon' sx={{ display: 'flex', justifyContent: 'center' }}>
							<HomeIcon />
						</Box>
						<Typography gridArea='text' variant='RadarDashboardGraphic__sidebar_navItem'>
							home
						</Typography>
					</NavItem>
					<NavItem>
						<Box gridArea='icon' sx={{ display: 'flex', justifyContent: 'center' }}>
							<PaymentIconXs />
						</Box>
						<Typography gridArea='text' variant='RadarDashboardGraphic__sidebar_navItem'>
							payments
						</Typography>
					</NavItem>
					<NavItem>
						<Box gridArea='icon' sx={{ display: 'flex', justifyContent: 'center' }}>
							<CustomerIconXs />
						</Box>
						<Typography gridArea='text' variant='RadarDashboardGraphic__sidebar_navItem'>
							customers
						</Typography>
					</NavItem>
					<NavItem>
						<Box gridArea='icon' sx={{ display: 'flex', justifyContent: 'center' }}>
							<ProductIconXs />
						</Box>
						<Typography gridArea='text' variant='RadarDashboardGraphic__sidebar_navItem'>
							products
						</Typography>
					</NavItem>
					<NavItem>
						<Box gridArea='icon' sx={{ display: 'flex', justifyContent: 'center' }}>
							<ReportIconXs />
						</Box>
						<Typography gridArea='text' variant='RadarDashboardGraphic__sidebar_navItem'>
							reports
						</Typography>
					</NavItem>
					<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
						<SubItem>Balance overview</SubItem>
						<SubItem sx={{ fontWeight: 600, color: '#515de1' }}>Radar</SubItem>
						<SubItem>Custom reports</SubItem>
					</Box>
					<NavItem>
						<Box gridArea='icon' sx={{ display: 'flex', justifyContent: 'center' }}>
							<DevelopersIconXs />
						</Box>
						<Typography gridArea='text' variant='RadarDashboardGraphic__sidebar_navItem'>
							developers
						</Typography>
					</NavItem>
					<NavItem>
						<Box gridArea='icon' sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
							<TestIconXs />
						</Box>
						<Typography gridArea='text' variant='RadarDashboardGraphic__sidebar_navItem'>
							view tested data
						</Typography>
					</NavItem>
					<NavItem sx={{ margin: '24px 0 8px 0' }}>
						<Box gridArea='icon' sx={{ display: 'flex', justifyContent: 'center' }}>
							<GearIconXs />
						</Box>
						<Typography gridArea='text' variant='RadarDashboardGraphic__sidebar_navItem'>
							settings
						</Typography>
					</NavItem>
				</NavContainer>
			</SideBar>
			<ContentContainer>
				<HeroSectionGraphicContentToolbar>
					<HeroSectionGraphicContentToolbarSearchField startAdornment={<SearchOutlined />} placeholder='Search' />
					<SearchFieldRightSideIcon />
				</HeroSectionGraphicContentToolbar>
				<RadarDashboardGraphicBox>
					<RadarDashboardGraphicToolbar>
						<Typography
							variant='DashboardGraphic__content_graphicBox_toolbar_title'
							sx={{ padding: '0 0 0 16px', margin: '0 auto 0 0' }}>
							Analytics
						</Typography>
						<RadarDashboardGraphicSegmentedControl>
							<Typography variant='DashboardGraphic__content_graphicBox_content_normal'>1w</Typography>
							<Typography variant='DashboardGraphic__content_graphicBox_content_normal'>4w</Typography>
							<Typography variant='DashboardGraphic__content_graphicBox_content_normal'>3m</Typography>
							<Typography variant='DashboardGraphic__content_graphicBox_content_normal'>6m</Typography>
							<Typography
								variant='DashboardGraphic__content_graphicBox_content_normal'
								sx={{ color: '#515de1', fontWeight: 600 }}>
								1y
							</Typography>
						</RadarDashboardGraphicSegmentedControl>
						<RadarDashboardGraphicSegmentedControl sx={{ margin: '13px' }}>
							<Typography variant='DashboardGraphic__content_graphicBox_content_normal'>weekly</Typography>
							<Typography
								variant='DashboardGraphic__content_graphicBox_content_normal'
								sx={{ color: '#515de1', fontWeight: 600 }}>
								monthly
							</Typography>
						</RadarDashboardGraphicSegmentedControl>
					</RadarDashboardGraphicToolbar>
					<RadarDashboardGraphicCharts>
						<RadarDashboardGraphicChart gridArea='Disputes'>
							<Typography variant='DashboardGraphic__content_graphicBox_toolbar_title' sx={{ margin: '0 0 8px 0' }}>
								Disputes
							</Typography>
							<Box
								className='RadarDashboardGraphic__chartLegend'
								sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
								<HorizontalLightBoltIcon />
								<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexGrow: 1 }}>
									<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#63798c' }}>
										Dispute rate
									</Typography>
									<Typography variant='DashboardGraphic__content_graphicBox_content_normal'>0.16%</Typography>
								</Box>
							</Box>
							<RadarDashboardGraphicChartAxis>
								<RadarDashboardGraphicchartLineTop />
								<Box className='RadarDashboardGraphic__chartCell' sx={{ borderRight: '1px solid #e6ebf1' }}></Box>
								<Box className='RadarDashboardGraphic__chartCell' sx={{ borderRight: '1px solid #e6ebf1' }}></Box>
								<Box className='RadarDashboardGraphic__chartCell' sx={{ borderRight: '1px solid #e6ebf1' }}></Box>
								<Box
									className='RadarDashboardGraphic__chartCell'
									sx={{
										background: '#f6f9fc',
										padding: '4px 0 0 0',
										display: 'flex',
										flexDirection: 'column',
										justifyContent: 'flex-start'
									}}>
									<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#5d7583' }}>
										Last 90 days
									</Typography>
								</Box>
							</RadarDashboardGraphicChartAxis>
							<Box
								className='DashboardGraphic__content_graphicBox_date'
								sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
								<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#63798c' }}>
									Mar 2018
								</Typography>
								<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#63798c' }}>
									Mar 2019
								</Typography>
							</Box>
						</RadarDashboardGraphicChart>
						<RadarDashboardGraphicChart gridArea='Top-dispute-reasons'>
							<Typography variant='DashboardGraphic__content_graphicBox_toolbar_title' sx={{ margin: '0 0 8px 0' }}>
								Top dispute reasons
							</Typography>
							<Box
								className='RadarDashboardGraphic__chartLegend'
								sx={{
									width: '100%',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'flex-start',
									gap: '21px'
								}}>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<BlueRect />
									<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
										<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#63798c' }}>
											Disputes
										</Typography>
										<Typography variant='DashboardGraphic__content_graphicBox_content_normal'>242</Typography>
									</Box>
								</Box>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<BlueRect
										sx={{
											'& rect': {
												fill: 'rgb(0, 204, 255)'
											}
										}}
									/>
									<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
										<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#63798c' }}>
											Submitted evidencce
										</Typography>
										<Typography variant='DashboardGraphic__content_graphicBox_content_normal'>197</Typography>
									</Box>
								</Box>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<BlueRect
										sx={{
											'& rect': {
												fill: 'rgb(0, 217, 36)'
											}
										}}
									/>
									<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
										<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#63798c' }}>
											Won
										</Typography>
										<Typography variant='DashboardGraphic__content_graphicBox_content_normal'>197</Typography>
									</Box>
								</Box>
							</Box>
							<RadarDashboardGraphicChartAxis>
								<RadarDashboardGraphicChartCell>
									<FraudChart />
								</RadarDashboardGraphicChartCell>
								<RadarDashboardGraphicChartCell>
									<SubscriptionChart />
								</RadarDashboardGraphicChartCell>
								<RadarDashboardGraphicChartCell>
									<GeneralChart />
								</RadarDashboardGraphicChartCell>
								<RadarDashboardGraphicChartCell>
									<ProductChart />
								</RadarDashboardGraphicChartCell>
							</RadarDashboardGraphicChartAxis>
							<Box
								className='DashboardGraphic__content_graphicBox_date'
								sx={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}>
								<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#63798c' }}>
									Fraudulent
								</Typography>
								<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#63798c' }}>
									Subscription...
								</Typography>
								<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#63798c' }}>
									general
								</Typography>
								<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#63798c' }}>
									product not r...
								</Typography>
							</Box>
						</RadarDashboardGraphicChart>
						<RadarDashboardGraphicChart gridArea='Rule-Performance'>
							<Typography variant='DashboardGraphic__content_graphicBox_toolbar_title' sx={{ margin: '0 0 8px 0' }}>
								Rule performances
							</Typography>
							<RadarDashboardGraphicChartAxis>
								<RulePerformanceChart />
								<Box className='RadarDashboardGraphic__chartCell' sx={{ borderRight: '1px solid #e6ebf1' }}>
									<Typography
										variant='DashboardGraphic__content_graphicBox_toolbar_title'
										sx={{ padding: '4px 0 0 4px' }}>
										5k
									</Typography>
								</Box>
								<Box className='RadarDashboardGraphic__chartCell' sx={{ borderRight: '1px solid #e6ebf1' }}></Box>
								<Box className='RadarDashboardGraphic__chartCell' sx={{ borderRight: '1px solid #e6ebf1' }}></Box>
							</RadarDashboardGraphicChartAxis>
							<Box
								className='DashboardGraphic__content_graphicBox_date'
								sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
								<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#63798c' }}>
									Mar 2018
								</Typography>
								<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#63798c' }}>
									Mar 2019
								</Typography>
							</Box>
						</RadarDashboardGraphicChart>
						<RadarDashboardGraphicChart
							sx={{
								padding: '46px 16px 16px 16px',
								gap: '16px',
								display: 'grid',
								gridTemplateColumns: 'repeat(2,1fr)',
								gridTemplateRows: 'repeat(2,auto)'
							}}
							gridArea='chartLegends-rules'>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<HorizontalLightBoltIcon />
								<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
									<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#63798c' }}>
										Block payments
									</Typography>
									<Typography variant='DashboardGraphic__content_graphicBox_content_normal'>12,559</Typography>
								</Box>
							</Box>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<HorizontalLightBoltIcon
									sx={{
										'& polyline': {
											stroke: 'rgb(0, 217, 36)'
										}
									}}
								/>
								<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
									<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#63798c' }}>
										Allow payments
									</Typography>
									<Typography variant='DashboardGraphic__content_graphicBox_content_normal'>84</Typography>
								</Box>
							</Box>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<HorizontalLightBoltIcon
									sx={{
										'& polyline': {
											stroke: 'rgb(0, 204, 255)'
										}
									}}
								/>
								<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
									<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#63798c' }}>
										Send to manual review
									</Typography>
									<Typography variant='DashboardGraphic__content_graphicBox_content_normal'>675</Typography>
								</Box>
							</Box>
							<Box sx={{ display: 'flex', alignItems: 'center' }}>
								<HorizontalLightBoltIcon
									sx={{
										'& polyline': {
											stroke: 'red'
										}
									}}
								/>
								<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
									<Typography variant='DashboardGraphic__content_graphicBox_content_normal' sx={{ color: '#63798c' }}>
										Rule changes
									</Typography>
									<Typography variant='DashboardGraphic__content_graphicBox_content_normal'>5</Typography>
								</Box>
							</Box>
						</RadarDashboardGraphicChart>
					</RadarDashboardGraphicCharts>
				</RadarDashboardGraphicBox>
			</ContentContainer>
		</RadarDashboardGraphicContainer>
	);
};

export default RadarDashboardGraphic;
