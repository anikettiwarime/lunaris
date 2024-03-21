const CTOSection = () => {
  return (
    <div className="mx-7 mt-8">
      {/* Upper Text */}
      <div className="bg-gradient-to-b from-[#00B2CB] to-white bg-clip-text text-center text-[1.75rem] font-normal leading-9 text-transparent">
        <p>Our team has been creating a unique and powerful</p>
        <p>Crypto and fintech product for 5 years </p>
      </div>
      {/* Image and text */}

      <div className="mt-14 flex flex-col items-center justify-center px-4">
        <div className="flex w-full flex-col">
          <div className="relative h-[21rem] w-full overflow-hidden  rounded-[34px]">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="/HeroImg.png"
              alt="feature"
            />
          </div>
          <div className="space-y-3 ">
            <h2 className="mt-4 text-start text-[28px] font-normal leading-[36px] text-white">
              Isolated Lending for LRTs
            </h2>
            <p className="text-[18px] font-light leading-[23px] text-white">
              Unlock tailored financial support with Isolated Lending for LRTs.
              Our exclusive approach ensures precision in financing, empowering
              Light Rail Transit ventures for sustainable growth and innovation
              in transit development.
            </p>
            <button className="rounded-[9px] bg-gradient-to-r from-[#00E0FF] to-[#00B4D8] px-[16px] py-[10px] text-sm font-semibold text-white shadow-md transition duration-300 ease-in-out hover:from-[#00B4D8] hover:to-[#00E0FF] hover:shadow-lg">
              Launch App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTOSection;
