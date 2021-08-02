import React from 'react';
import { Box, Typography, TextField, InputAdornment } from '@material-ui/core';
import { styled } from '@material-ui/system';
import CardIcon from '../../SvgIcon/CardIcon/CardIcon';
import BankIcon from '../../SvgIcon/BankIcon/BankIcon';
const PayInvoiceContainer = styled(Box, { name: 'PayInvoiceGraphic' })(({ theme, gridArea }) => ({
	width: '588px',
	height: '422px',
	overflow: 'hidden',
	borderRadius: theme.spacing(2),
	background: '#f6f9fc',
	boxShadow: theme.shadows[2],
	gridArea: gridArea,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	position: 'relative',
	zIndex: 0
}));
const BackgroundContainer = styled(Box, { name: 'PayInvoiceGraphic__backgroundContainer' })(
	({ theme, background }) => ({
		width: '100%',
		height: '67%',
		position: 'absolute',
		top: 0,
		left: 0,
		clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 100%)',
		background: background,
		zIndex: 1
	})
);
const PayInvoiceGraphicFormContainer = styled(Box, { name: 'PayInvoiceGraphic__form' })(({ theme }) => ({
	zIndex: 2,
	width: '380px',
	// height: '270px',
	borderRadius: '6px',
	background: '#fff',
	boxShadow: '0 13px 27px -5px rgb(50 50 93 / 25%), 0 8px 16px -8px rgb(0 0 0 / 30%)'
}));
const PayInvoiceLogo = styled(Box, { name: 'PayInvoiceGraphic__logo' })(({ theme, url }) => ({
	position: 'relative',
	width: '60px',
	height: '60px',
	margin: '-20px auto 12px',
	borderRadius: '50%',
	background: '#fff',
	boxShadow: '0 0 5px -1px rgb(50 50 93 / 25%), 0 0 3px -1px rgb(0 0 0 / 30%)',
	overflow: 'hidden',
	backgroundImage: `url(${url})`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
}));
const Logo__Info = [
	{
		name: 'slack-logo',
		url: 'https://images.ctfassets.net/fzn2n1nzq965/6EjrZrfFoR5aH0W7RymFhg/e47a1e3198e68ee600a3a3cff380716a/slack-circle-logo.svg'
	},
	{
		name: 'medical-logo',
		url: 'https://images.ctfassets.net/fzn2n1nzq965/fvVBsyQLBg4yQDYCYfliK/f1a4bff6755ac9fcf06d377dfcf9ee9a/onemedical-circle-logo.svg'
	},
	{
		name: 'udacity-logo',
		url: 'https://images.ctfassets.net/fzn2n1nzq965/1bgjsF68x4qreMpRzctDyh/4ad80fe7a7a2759f8498928205b650e7/udacity-circle-logo.svg'
	}
];
const PayInvoiceTitle = styled(Typography, { name: 'PayInvoiceGraphic__title' })(({ theme }) => ({
	...theme.typography.AwayCheckoutGraphic__productName,
	width: '100%',
	height: '20px',
	textAlign: 'center'
}));
const PayInvoiceBillTo = styled(Typography, { name: 'PayInvoiceBilledTo' })(({ theme }) => ({
	...theme.typography.RadarDashboardGraphic__sidebar_navItem,
	width: '100%',
	textAlign: 'center',
	margin: theme.spacing(0, 0, 4, 0)
}));
const PayInvoiceCheckOut = styled(Box, { name: 'PayInvoiceGraphic__checkout' })(({ theme }) => ({
	marginTop: '16px',
	padding: ' 16px 40px 40px',
	borderRadius: '0 0 6px 6px',
	background: '#f6f9fc',
	flexGrow: 1,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'flex-start'
}));
const PayInvoiceGraphicForm = styled(Box, { name: 'PayInvoiceGraphic__form' })(({ theme }) => ({
	display: 'grid',
	gap: '16px',
	width: '100%',
	gridTemplateColumns: 'repeat(2,1fr)',
	gridTemplateRows: 'repeat(3,28px)',
	gridTemplateAreas: `"card    bank"
                      "number  number"
                      "button  button"`
}));
const PayInvoiceInputField = styled(TextField, { name: 'PayInvoiceGraphic__input' })(
	({ theme, gridarea, customcolor }) => ({
		...theme.typography.RadarDashboardGraphic__sidebar_navItem,
		gridArea: gridarea,
		pointerEvents: 'none',
		'& .MuiInputBase-root': {
			padding: 0,
			'& > input': {
				padding: 0,
				height: '28px',
				color: customcolor,
				fontWeight: 450
			}
		},
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: customcolor,
				borderWidth: '2px'
			},

			'&.Mui-focused fieldset': {
				borderColor: customcolor
			}
		}
	})
);
const PayInvoiceButton = styled(Box, { name: 'pay-invoice-button' })(({ theme, customcolor, gridArea }) => ({
	...theme.typography.RadarDashboardGraphic__sidebar_navItem,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	boxShadow: theme.shadows[1],
	borderRadius: '4px',
	width: '100%',
	height: '100%',
	backgroundColor: customcolor,
	color: '#fff',
	gridArea: gridArea
}));
const PayInvoiceWrapper = (props) => {
	const { gridArea } = props;
	return (
		<PayInvoiceContainer gridArea={gridArea}>
			{/*Slack background */}
			<BackgroundContainer background='rgb(97, 31, 105)' />
			{/*Medical background */}
			{/* <BackgroundContainer background='rgb(0, 84, 80)' /> */}
			{/*Udacity background */}
			{/* <BackgroundContainer background='rgb(3, 179, 228)' /> */}
			<PayInvoiceGraphicFormContainer>
				<PayInvoiceLogo url={Logo__Info[0].url} />
				<PayInvoiceTitle>Invoice from Slack</PayInvoiceTitle>
				<PayInvoiceBillTo>Billed to Jenny Rosen</PayInvoiceBillTo>
				<PayInvoiceCheckOut>
					<Box
						className='check-out-description'
						sx={{ display: 'flex', alignItems: 'center', width: '100%', textAlign: 'center', margin: '0 0 16px 0' }}>
						<PayInvoiceTitle component='span'>
							S$750.00
							<PayInvoiceBillTo sx={{ margin: 0 }} component='span' sx={{ textTransform: 'none' }}>
								{' '}
								due Aug 1, 2020
							</PayInvoiceBillTo>
						</PayInvoiceTitle>
					</Box>
					<PayInvoiceGraphicForm>
						<PayInvoiceInputField
							customcolor='rgb(97, 31, 105)'
							gridarea='card'
							variant='outlined'
							value='card'
							autoFocus={true}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<CardIcon
											sx={{
												'& path': {
													fill: 'rgb(97, 31, 105)'
												}
											}}
										/>
									</InputAdornment>
								)
							}}
						/>
						<PayInvoiceInputField
							customcolor='rgb(207, 215, 223))'
							gridarea='bank'
							variant='outlined'
							value='bank'
							autoFocus={true}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<BankIcon />
									</InputAdornment>
								)
							}}
						/>
						<PayInvoiceInputField
							customcolor='rgb(207, 215, 223))'
							gridarea='number'
							variant='outlined'
							value='card number                     MM/YY    CVC'
							autoFocus={true}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<CardIcon />
									</InputAdornment>
								)
							}}
						/>
						<PayInvoiceButton gridarea='button' customcolor='rgb(97, 31, 105)'>
							Pay Invoice
						</PayInvoiceButton>
					</PayInvoiceGraphicForm>
				</PayInvoiceCheckOut>
			</PayInvoiceGraphicFormContainer>
		</PayInvoiceContainer>
	);
};

export default PayInvoiceWrapper;
