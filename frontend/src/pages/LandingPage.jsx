
import HeroSection from '../components/HeroSection/HeroSection';
import Section from '../components/Section/Section';

const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Section */}
      <Section
        title="Our Mission"
        content="We aim to restore aquatic ecosystems through innovative water treatment solutions."
        bgColor="#e0f7fa"
      />

      {/* Technology Section */}
      <Section
        title="Our Technology"
        content="Explore our patented ozone systems and how they transform water treatment."
        bgColor="#fff3e0"
      />

      {/* Call to Action Section */}
      <Section
        title="Get Involved"
        content="Join us in making a difference—become a partner or investor today."
        bgColor="#e8f5e9"
      />
    </>
  );
};

export default LandingPage;
