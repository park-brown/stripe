import React from 'react';
import DesignedForDevlopers from '../../sections/DesignedForDevlopers/DesignedForDevlopers';
import Header from '../../sections/Header/Header';
import Hero from '../../sections/Hero/Hero';
import UnifiedPlatForm from '../../sections/UnifiedPlatForm/UnifiedPlatForm';

const Home = () => {
	return (
		<React.Fragment>
			<Header />
			<Hero />
			<UnifiedPlatForm />
			<DesignedForDevlopers />
		</React.Fragment>
	);
};

export default Home;
