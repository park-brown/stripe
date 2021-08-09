import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					fontFamily: "'sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'",
					fontStyle: 'normal',
					margin: 0,
					padding: 0
				}
			}
		}
	},
	breakpoints: {
		values: {
			mobile: 0,
			tablet: 600,
			tabletX: 750,
			laptop: 900,
			desktop: 1440
		}
	},
	palette: {
		canvas: {
			gradientColorZero: '#a960ee',
			gradientColorOne: ' #ff333d',
			gradientColorTwo: '#90e0ff',
			gradientColorThree: '#ffcb57',
			gradientColorZeroTransparent: 'rgba(169,96,238,0)',
			gradientColorOneTransparent: 'rgba(255,51,61,0)',
			gradientColorTwoTransparent: 'rgba(144,224,255,0)',
			gradientColorThreeTransparent: 'rgba(255,203,87,0)'
		}
	},
	spacing: 4
});
const fontSize = 16; // px
// Tell Material-UI what's the font-size on the html element.
// 16px is the default font-size used by browsers.
const htmlFontSize = 16;
const coef = fontSize / 16;
theme.typography = {
	pxToRem: (size) => `${(size / htmlFontSize) * coef}rem`,
	fontFamily: ['sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'].join(),
	fontWeightLight: 200,
	fontWeightNormal: 300,
	fontWeightSemibold: 425,
	fontWeightBold: 500,
	button: {
		fontFamily: "'sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'",
		fontSize: '0.8rem',
		fontWeight: 500,
		lineHeight: '24px',
		textTransform: 'capitalize'
	},
	cta_button: {
		fontFamily: "'sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'",
		fontSize: '15px',
		fontWeight: 425,
		lineHeight: '24px',
		textTransform: 'capitalize'
	},
	nav_menu_inner_title: {
		fontFamily: "'sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'",
		fontSize: '13px',
		fontWeight: 600,
		lineHeight: '20px',
		letterSpacing: '0.4px',
		textTransform: 'uppercase',
		color: '#8898aa'
	},
	nav_menu_inner_label: {
		fontFamily: "'sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'",
		fontSize: '14px',
		fontWeight: 500,
		lineHeight: '20px',
		letterSpacing: '0.2px',
		textTransform: 'capitalize',
		color: '#212121'
	},
	nav_menu_inner_body: {
		fontFamily: "'sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'",
		fontSize: '14px',
		fontWeight: 500,
		lineHeight: '20px',
		letterSpacing: '0.2px',
		color: '#212121'
	},
	HomepageHeroCaption__title: {
		fontFamily: "'sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'",
		fontSize: '13px',
		fontWeight: 300,
		lineHeight: '18px',
		letterSpacing: '0.2px',
		color: '#fff',
		textTransform: 'capitalize'
	},
	HomepageHeroHeader__title: {
		[theme.breakpoints.up('mobile')]: {
			// 0-300
			fontFamily: "'sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'",
			fontSize: '36px',
			fontWeight: 700,
			lineHeight: '40px',
			letterSpacing: '0.4px',
			whiteSpace: 'nowrap',
			color: '#3a3a3a'
		},
		'@media(min-width:300px)': {
			// 300 - 600
			fontFamily: "'sohne-var', 'Helvetica Neue', 'Arial', 'sans - serif'",
			fontSize: '42px',
			fontWeight: 700,
			lineHeight: '46px',
			letterSpacing: '0.4px',
			whiteSpace: 'nowrap'
		},
		[theme.breakpoints.up('tablet')]: {
			//600 - 750
			fontSize: '54px',
			lineHeight: '69.333px'
		},
		[theme.breakpoints.up('tabletX')]: {
			//750 - 900
			fontSize: '60px',
			lineHeight: '77.66px'
		},
		[theme.breakpoints.up('laptop')]: {
			// > 900
			fontSize: '66px',
			lineHeight: '93.33px'
		}
	},
	HomepageHeroHeader__Copy__body: {
		color: '#425466',
		fontWeight: 300,
		fontSize: '18px',
		letterSpacing: '0.4px',
		lineHeight: '28px'
	},
	CheckoutPhoneGraphic__description: {
		fontSize: '11px',
		lineHeight: '16px',
		letterSpacing: '0.2px',
		fontWeight: 425,
		color: '#0a2540',
		textAlign: 'center'
	},
	CheckoutPhoneGraphic__price: {
		fontSize: '11px',
		lineHeight: '16px',
		letterSpacing: '0.2px',
		fontWeight: 300,
		color: '#0a2540',
		textAlign: 'center',
		opacity: 0.8
	},
	CheckoutPhoneGraphic__input__label: {
		fontSize: '11px',
		lineHeight: '20px',
		letterSpacing: '0.2px',
		fontWeight: 300,
		color: '#0a2540',
		textAlign: 'left',
		opacity: 0.8,
		display: 'flex',
		alignItems: 'center'
	},
	DashboardGraphic__sidebar_title: {
		fontSize: '11px',
		lineHeight: '20px',
		letterSpacing: '0.8px',
		fontWeight: 625,
		color: '#fff',
		textAlign: 'center',
		textTransform: 'uppercase',
		whiteSpace: 'nowrap'
	},
	DashboardGraphic__content_toolbar__search__field: {
		fontSize: '11px',
		lineHeight: '14px',
		letterSpacing: '0.2px',
		fontWeight: 300,
		color: '#62788d',
		textAlign: 'left'
	},
	DashboardGraphic__content_graphicBox_toolbar_title: {
		fontSize: '11px',
		lineHeight: '14px',
		letterSpacing: '0.2px',
		fontWeight: 620,
		color: '#425466',
		textAlign: 'center'
	},
	DashboardGraphic__content_graphicBox_content_normal: {
		fontSize: '11px',
		lineHeight: '14px',
		letterSpacing: '0.2px',
		fontWeight: 300,
		color: '#425466',
		textAlign: 'center'
	},
	unifiedPlatform_title_caption: {
		fontSize: '18px',
		lineHeight: '28px',
		letterSpacing: '0.2px',
		fontWeight: 620,
		color: '#635bff'
	},
	unifiedPlatform_title_body: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '34px',
			lineHeight: '42px',
			letterSpacing: '0.2px',
			fontWeight: 600,
			color: '#0a2540'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '30px',
			lineHeight: '40px'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '36px',
			lineHeight: '48px'
		}
	},
	DesignedForDev_title_body: {
		[theme.breakpoints.up('mobile')]: {
			fontSize: '34px',
			lineHeight: '42px',
			letterSpacing: '0.2px',
			fontWeight: 600,
			color: '#fff'
		},
		[theme.breakpoints.up('tablet')]: {
			fontSize: '30px',
			lineHeight: '40px'
		},
		[theme.breakpoints.up('laptop')]: {
			fontSize: '36px',
			lineHeight: '48px'
		}
	},
	PostmatesCardDesign__fleetLabel: {
		fontSize: '16px',
		lineHeight: '22.4px',
		letterSpacing: '0.2px',
		fontWeight: 300
	},
	Visa__Card__Name: {
		fontSize: '15px',
		lineHeight: '22.4px',
		letterSpacing: '0.2px',
		fontWeight: 500
	},
	WarbyParkerCheckoutGraphic__title: {
		fontSize: '11px',
		lineHeight: '16px',
		letterSpacing: '0.2px',
		fontWeight: 620,
		color: '#425466'
	},
	WarbyParkerCheckoutGraphic__description: {
		fontSize: '11px',
		lineHeight: '15px',
		letterSpacing: '0.2px',
		fontWeight: 300,
		color: '#687792'
	},
	WarbyParkerCheckoutGraphic__sectionTitle: {
		fontSize: '13px',
		lineHeight: '16.8px',
		letterSpacing: '0.2px',
		fontWeight: 620,
		color: '#425466'
	},
	apple__pay__sheet__cancel: {
		fontSize: '13px',
		lineHeight: '21px',
		letterSpacing: '0.2px',
		fontWeight: 300,
		color: '#2a69fe'
	},
	apple__pay__sheet__checkOut__info: {
		fontSize: '10px',
		lineHeight: '16px',
		letterSpacing: '0.3px',
		fontWeight: 300,
		color: '#425466'
	},
	AwayCheckoutGraphic__title: {
		fontSize: '15px',
		lineHeight: '22px',
		letterSpacing: '0.2px',
		fontWeight: 500,
		color: '#364657'
	},
	AwayCheckoutGraphic__cartItems: {
		fontSize: '13px',
		lineHeight: '22px',
		letterSpacing: '0.2px',
		fontWeight: 300,
		color: '#425466'
	},
	AwayCheckoutGraphic__productName: {
		fontSize: '13px',
		lineHeight: '18px',
		letterSpacing: '0.2px',
		fontWeight: 550,
		color: '#0a2540'
	},
	AwayCheckoutGraphic__productColor: {
		fontSize: '13px',
		lineHeight: '18px',
		letterSpacing: '0.2px',
		fontWeight: 300,
		color: '#6b7c93'
	},
	AwayCheckoutGraphic__productTotal: {
		fontSize: '13px',
		lineHeight: '18px',
		letterSpacing: '0.2px',
		fontWeight: 300,
		color: '#0a2540'
	},
	GlossierCheckoutCartGraphic__itemName: {
		fontSize: '10px',
		lineHeight: '10px',
		letterSpacing: '0.2px',
		fontWeight: 425,
		color: '#0a2540'
	},
	GlossierCheckoutCartGraphic__itemPrice: {
		fontSize: '10px',
		lineHeight: '10px',
		letterSpacing: '0.2px',
		fontWeight: 425,
		color: '#66738f'
	},
	RadarDashboardGraphic__sidebar_navItem: {
		fontSize: '13px',
		fontWeight: 300,
		letterSpacing: '.2px',
		lineHeight: '20px',
		color: '#425466',
		textTransform: 'capitalize'
	},
	CodeEditorLineNumbers__number: {
		fontSize: '14px',
		fontFamily: '"SourceCodePro"',
		fontWeight: 500,
		letterSpacing: '.2px',
		lineHeight: '24px',
		color: '#55718d',
		textAlign: 'right'
	},
	CodeSyntax__token__keyword: {
		fontSize: '14px',
		fontFamily: '"SourceCodePro"',
		fontWeight: 500,
		letterSpacing: '.2px',
		lineHeight: '17.6px',
		color: '#8095ff'
	},
	CodeSyntax__token__text: {
		fontSize: '14px',
		fontFamily: '"SourceCodePro"',
		fontWeight: 500,
		letterSpacing: '.2px',
		lineHeight: '22px',
		color: '#fff'
	},
	CodeSyntax__token__operator: {
		fontSize: '14px',
		fontFamily: '"SourceCodePro"',
		fontWeight: 600,
		letterSpacing: '.2px',
		lineHeight: '17.6px',
		color: '#fff'
	},
	CodeSyntax__token__punctuation: {
		fontSize: '14px',
		fontFamily: '"SourceCodePro"',
		fontWeight: 600,
		letterSpacing: '.2px',
		lineHeight: '17.6px',
		color: '#fff',
		display: 'inline-block',
		width: '8.4px',
		textAlign: 'center'
	},
	CodeSyntax__token__function: {
		fontSize: '14px',
		fontFamily: '"SourceCodePro"',
		fontWeight: 500,
		letterSpacing: '.2px',
		lineHeight: '17.6px',
		color: '#00d4ff'
	},
	CodeSyntax__token__string: {
		fontSize: '14px',
		fontFamily: '"SourceCodePro"',
		fontWeight: 500,
		letterSpacing: '.2px',
		lineHeight: '17.6px',
		color: '#ffa956'
	},
	CodeSyntax__token__number: {
		fontSize: '14px',
		fontFamily: '"SourceCodePro"',
		fontWeight: 500,
		letterSpacing: '.2px',
		lineHeight: '17.6px',
		color: '#ffd96a'
	},
	why__section__feature__body: {
		fontSize: '15px',
		fontWeight: 300,
		letterSpacing: '.2px',
		lineHeight: '24px',
		color: '#425466'
	},
	getStart__section__copy__title: {
		fontSize: '24px',
		fontWeight: 600,
		letterSpacing: '.1px',
		lineHeight: '38px',
		color: '#0a2540'
	}
};

export default theme;
