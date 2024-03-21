import {
  CTOSection,
  FeatureSection,
  Footer,
  Header,
  HeroSection,
} from "../components";

const Landing = () => {
  return (
    <div className="max-w-[425px] overflow-hidden bg-gradient-to-b from-[#113642] via-[#112F3E] to-black min-h-screen">
      <Header />
      <HeroSection />
      <CTOSection />
      <FeatureSection />
      <Footer />
    </div>
  );
};

export default Landing;
