import React from 'react';
import DesignedForDevlopers from '../../sections/DesignedForDevlopers/DesignedForDevlopers';
import Footer from '../../sections/Footer/Footer';
import GetStart from '../../sections/GetStart/GetStart';
import GlobalScale from '../../sections/GlobalScale/GlobalScale';
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
			<GlobalScale />
			<GetStart />
			<Footer />
		</React.Fragment>
	);
};

export default Home;
