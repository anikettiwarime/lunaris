import PropTypes from "prop-types";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="flex w-80 flex-col md:w-[376px]">
      <div className="relative h-[21rem] w-full overflow-hidden rounded-[34px]  md:h-[394px]">
        <img
          className="absolute inset-0 h-full w-full object-fit"
          src="/HeroImg.png"
          alt="feature"
        />
      </div>
      <div className="space-y-3 ">
        <h2 className="mt-4 text-start text-[24px] font-normal leading-[32px] text-white md:text-[28px] md:leading-[36px]">
          {title}
        </h2>
        <p className="text-[17px] font-normal leading-[22px] text-white md:text-[20px] md:leading-[22px]">
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
