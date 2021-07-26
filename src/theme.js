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
		fontSize: '0.8rem',
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
	}
};
export default theme;
