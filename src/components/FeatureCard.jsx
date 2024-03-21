import PropTypes from "prop-types";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="flex flex-col w-80">
      <div className="relative rounded-[34px] w-full h-[21rem]  overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="/HeroImg.png"
          alt="feature"
        />
      </div>
      <div className="space-y-3 ">
        <h2 className="text-white text-start text-[24px] leading-[32px] font-normal mt-4">
          {title}
        </h2>
        <p className="text-white text-[17px] leading-[22px] font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default FeatureCard;
