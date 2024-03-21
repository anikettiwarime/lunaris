const CTOSection = () => {
  return (
    <div className="mx-7 mt-8 md:p-20">
      {/* Upper Text */}
      <div className="bg-gradient-to-b from-[#00B2CB] to-white bg-clip-text text-center text-[1.75rem] font-normal leading-9 text-transparent md:text-[3.125rem] md:leading-[4rem]">
        <p>Our team has been creating a unique and powerful</p>
        <p>Crypto and fintech product for 5 years </p>
      </div>
      {/* Image and text */}

      <div className="mt-14 flex flex-col items-center justify-center px-4">
        <div className="flex w-full flex-col md:flex-row-reverse md:gap-40">
          <div className="relative h-[21rem] w-full overflow-hidden rounded-[34px]">
            <img
              className="object-fit absolute inset-0 h-full w-full rounded-[34px] md:h-[394px] md:w-[376px]"
              src="/HeroImg.png"
              alt="feature"
            />
          </div>

          <div className="flex flex-col space-y-3 md:justify-center md:gap-8">
            <h2 className="mt-4 text-start text-[28px] font-normal leading-[36px] text-white md:text-[50px] md:leading-[60px]">
              Isolated Lending for LRTs
            </h2>
            <p className="text-[18px] font-light leading-[23px] text-white md:text-[28px] md:leading-[36px]">
              Unlock tailored financial support with Isolated Lending for LRTs.
              Our exclusive approach ensures precision in financing, empowering
              Light Rail Transit ventures for sustainable growth and innovation
              in transit development.
            </p>
            <button className="w-fit rounded-[9px] bg-gradient-to-r from-[#00E0FF] to-[#00B4D8] px-[16px] py-[10px] text-sm font-semibold text-white shadow-md transition duration-300 ease-in-out hover:from-[#00B4D8] hover:to-[#00E0FF] hover:shadow-lg">
              Launch App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTOSection;
