import React from 'react';
import DesignedForDevlopers from '../../sections/DesignedForDevlopers/DesignedForDevlopers';
import Header from '../../sections/Header/Header';
import Hero from '../../sections/Hero/Hero';
import UnifiedPlatForm from '../../sections/UnifiedPlatForm/UnifiedPlatForm';
import WhyStripe from '../../sections/WhyStripe/WhyStripe';

const Home = () => {
	return (
		<React.Fragment>
			<Header />
			<Hero />
			<UnifiedPlatForm />
			<DesignedForDevlopers />
			<WhyStripe />
		</React.Fragment>
	);
};

export default Home;
