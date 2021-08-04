import React from 'react';
import Lottie from 'lottie-react';
import { faceId } from '../../face_id';
let FaceIdAnimation = (props) => {
	const { autoplay, loop } = props;
	const style = {
		width: '36px',
		height: '36px'
	};
	return <Lottie animationData={faceId} style={{ ...style }} autoplay={autoplay} loop={loop} />;
};

export default FaceIdAnimation;
