import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { styled } from '@material-ui/system';

let StartIntegration = (props) => {
	return (
		<SvgIcon
			{...props}
			titleAccess='StartIntegration'
			width='96'
			height='96'
			preserveAspectRatio='xMinYMin'
			viewBox='0 0 96 96'
			xmlns='http://www.w3.org/2000/svg'>
			<defs>
				<path
					id='codeFilesIconBack'
					d='M21.13 28h16.74c1.79 0 2.43.19 3.08.53.66.35 1.17.86 1.52 1.52.34.65.53 1.3.53 3.08v24.74c0 1.79-.19 2.43-.53 3.08a3.63 3.63 0 0 1-1.52 1.52c-.65.34-1.3.53-3.08.53H21.13c-1.79 0-2.43-.19-3.08-.53a3.63 3.63 0 0 1-1.52-1.52c-.34-.65-.53-1.3-.53-3.08V33.13c0-1.79.19-2.43.53-3.08.35-.66.86-1.17 1.52-1.52.65-.34 1.3-.53 3.08-.53z'></path>
				<path
					id='codeFilesIconFront'
					d='M45.9536914,33.5342654 C46.6055433,33.8828796 47.1171204,34.3944567 47.4657346,35.0463086 C47.8143488,35.6981604 48,36.3447329 48,38.1277704 L48,62.8722296 C48,64.6552671 47.8143488,65.3018396 47.4657346,65.9536914 C47.1171204,66.6055433 46.6055433,67.1171204 45.9536914,67.4657346 C45.3018396,67.8143488 44.6552671,68 42.8722296,68 L26.1277704,68 C24.3447329,68 23.6981604,67.8143488 23.0463086,67.4657346 C22.3944567,67.1171204 21.8828796,66.6055433 21.5342654,65.9536914 C21.1856512,65.3018396 21,64.6552671 21,62.8722296 C21,52.9574099 21,48 21,48 C21,45 20,41 30,42C30,40 29,33 34.5,33 C34.5,33 37.3333333,33 43,33 C44.7830375,33 45.3018396,33.1856512 45.9536914,33.5342654 '
					data-js-target-list='CodeFilesIcon.fileFrontPaths'
					mask='url(#codeFilesCaretMask)'></path>
				<path
					id='codeFilesIconCarets'
					d='M37.57 52.3a.5.5 0 0 0-.64.04l-.86.82-.06.07a.5.5 0 0 0 .04.64L39 57l-2.95 3.13-.06.08a.5.5 0 0 0 .08.63l.86.82.07.05a.5.5 0 0 0 .64-.08L42 57l-4.36-4.63zm-5.5.04a.5.5 0 0 0-.7.03L27 57l4.36 4.63c.2.2.51.21.71.03l.86-.82c.2-.19.21-.5.02-.7L30 57l2.95-3.13a.5.5 0 0 0-.02-.71l-.86-.82z'></path>
				<clipPath id='codeFilesClipPath'>
					<use href='#codeFilesIconBack' data-js-target-list='CodeFilesIcon.fileBacks'></use>
				</clipPath>
				<mask id='codeFilesCaretMask'>
					<path
						d='M45.9536914,33.5342654 C46.6055433,33.8828796 47.1171204,34.3944567 47.4657346,35.0463086 C47.8143488,35.6981604 48,36.3447329 48,38.1277704 L48,62.8722296 C48,64.6552671 47.8143488,65.3018396 47.4657346,65.9536914 C47.1171204,66.6055433 46.6055433,67.1171204 45.9536914,67.4657346 C45.3018396,67.8143488 44.6552671,68 42.8722296,68 L26.1277704,68 C24.3447329,68 23.6981604,67.8143488 23.0463086,67.4657346 C22.3944567,67.1171204 21.8828796,66.6055433 21.5342654,65.9536914 C21.1856512,65.3018396 21,64.6552671 21,62.8722296 C21,52.9574099 21,48 21,48 C21,45 20,41 30,42C30,40 29,33 34.5,33 C34.5,33 37.3333333,33 43,33 C44.7830375,33 45.3018396,33.1856512 45.9536914,33.5342654 '
						data-js-target-list='CodeFilesIcon.fileFrontPaths'
						fill='white'></path>
					<path
						d='M37.57 52.3a.5.5 0 0 0-.64.04l-.86.82-.06.07a.5.5 0 0 0 .04.64L39 57l-2.95 3.13-.06.08a.5.5 0 0 0 .08.63l.86.82.07.05a.5.5 0 0 0 .64-.08L42 57l-4.36-4.63zm-5.5.04a.5.5 0 0 0-.7.03L27 57l4.36 4.63c.2.2.51.21.71.03l.86-.82c.2-.19.21-.5.02-.7L30 57l2.95-3.13a.5.5 0 0 0-.02-.71l-.86-.82z'
						fill='#000'
						x='-27'
						data-js-target-list='CodeFilesIcon.carets'></path>
					<path
						d='M37.57 52.3a.5.5 0 0 0-.64.04l-.86.82-.06.07a.5.5 0 0 0 .04.64L39 57l-2.95 3.13-.06.08a.5.5 0 0 0 .08.63l.86.82.07.05a.5.5 0 0 0 .64-.08L42 57l-4.36-4.63zm-5.5.04a.5.5 0 0 0-.7.03L27 57l4.36 4.63c.2.2.51.21.71.03l.86-.82c.2-.19.21-.5.02-.7L30 57l2.95-3.13a.5.5 0 0 0-.02-.71l-.86-.82z'
						fill='#000'
						data-js-target-list='CodeFilesIcon.carets'></path>
				</mask>
			</defs>

			<use href='#codeFilesIconBack' fill='#00d4ff' data-js-target-list='CodeFilesIcon.fileBacks'></use>
			<use href='#codeFilesIconFront' fill='#7a73ff' data-js-target-list='CodeFilesIcon.fileFronts'></use>
			<g clipPath='url(#codeFilesClipPath)'>
				<use href='#codeFilesIconFront' fill='rgb(0, 72, 229)' data-js-target-list='CodeFilesIcon.fileFronts'></use>
			</g>
		</SvgIcon>
	);
};

StartIntegration = styled(StartIntegration, { name: 'StartIntegration' })(({ theme }) => ({
	width: '96px',
	height: '96px',
	position: 'absolute',
	top: '-24px',
	left: '-14px'
}));
export default StartIntegration;
// animateIcon__explore: {
//   blendForeground: '#7a73ff',
//   blendIntersection: '#cff',
//   blendBackground: '#00d4ff'
// }
