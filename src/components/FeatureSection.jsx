import FeatureCard from "./FeatureCard";
const data = [
  {
    id: 1,
    title: "High Capital Effeciency",
    description: "Monitor Domains, websites, app stores and others.",
  },
  {
    id: 2,
    title: "Real-Yeild Incentives",
    description: "Monitor Domains, websites, app stores and others.",
  },
  {
    id: 3,
    title: "Improved ve(3,3) Tokenomics",
    description: "Monitor Domains, websites, app stores and others.",
  },
  {
    id: 4,
    title: "Isolated Lending",
    description: "Monitor Domains, websites, app stores and others.",
  },
  {
    id: 5,
    title: "UnderCollateralized Lending",
    description: "Monitor Domains, websites, app stores and others.",
  },
  {
    id: 6,
    title: "Cross-Chain Compatiblity",
    description: "Monitor Domains, websites, app stores and others.",
  },
];

const FeatureSection = () => {
  return (
    <div>
      <h2 className="text-white text-center text-[28px] font-medium mt-6 pb-5">
        Other Features
      </h2>
      <div className="flex flex-col items-center justify-center gap-12">
        {data.map(({ id, title, description }) => (
          <FeatureCard key={id} title={title} description={description} />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
