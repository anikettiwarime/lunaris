import {
  CTOSection,
  FeatureSection,
  Footer,
  Header,
  HeroSection,
} from "../components";

const Landing = () => {
  return (
    <div className="overflow-hidden min-h-screen max-w-[425px] bg-gradient-to-b from-[#113642] via-[#112F3E] to-black lg:max-w-screen-2xl">
      <Header />
      <HeroSection />
      <CTOSection />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default Landing;
