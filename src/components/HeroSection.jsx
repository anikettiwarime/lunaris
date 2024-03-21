const HeroSection = () => {
  return (
    <section className="relative flex h-[464px] w-full items-center justify-center md:h-[864px]">
      <img
        src="./HeroSvg.svg"
        alt="Hero Image"
        className="absolute inset-0 z-[0] h-full w-full object-cover"
      />
      <div className="absolute left-[-69px] top-[130px] hidden h-[540px] w-[540px] items-center justify-center rounded-full border border-[#006B7A] bg-gradient-to-br from-[#0EE2FF1F] to-[#73737300] 2xl:flex ">
        <div className="z-0 flex h-full w-full flex-col items-center justify-evenly rounded-full text-center">
          <div className="text-center">
            <h3 className="text-[28px] leading-[36px] text-white ">93M+</h3>
            <p className="text-[18px] leading-[23px] text-[#A1A1A1] ">
              Total Locked
            </p>
          </div>
          <div>
            <h3 className="text-[28px] leading-[36px] text-white ">1.2B+</h3>
            <p className="text-[18px] leading-[23px] text-[#A1A1A1] ">
              Market Size
            </p>
          </div>
        </div>
      </div>

      <div className="relative z-[10] flex flex-col items-center justify-center gap-6 bg-transparent px-4 text-white md:w-full md:px-32">
        <p className="whitespace-pre-line text-center text-[10px] font-medium leading-[13px] md:text-[14px] md:leading-[18px]">
          platform opens the door to a new era of opportunities.{"\n"}
          Lend with confidence, borrow with ease.
        </p>
        <p className="text-center text-[28px] font-medium leading-[30px] md:text-[72px] md:leading-[79px]">
          <p>
            Unshackle Your <span className="text-[#00E0FF]">Finances</span>
          </p>
          <p>
            Introducing <span className="text-[#00E0FF]">Lunaris</span>
          </p>
        </p>
        <button className="rounded-[9px] bg-gradient-to-r from-[#00E0FF] to-[#00B4D8] px-[16px] py-[10px] font-semibold text-white shadow-md transition duration-300 ease-in-out hover:from-[#00B4D8] hover:to-[#00E0FF] hover:shadow-lg md:text-[20px] md:leading-[26px]">
          Launch App
        </button>
      </div>
      <div className="absolute right-[-88.4px] top-[130px] hidden h-[540px] w-[540px] items-center justify-center rounded-full border border-[#006B7A] bg-gradient-to-br from-[#0EE2FF1F] to-[#73737300] 2xl:flex ">
        <div className="z-0 flex h-full w-full flex-col items-center justify-evenly rounded-full text-center">
          <div>
            <h3 className="text-[28px] leading-[36px] text-white ">500k+</h3>
            <p className="text-[18px] leading-[23.4px] text-[#A1A1A1] ">
              Transactions
            </p>
          </div>
          <div>
            <h3 className="text-[28px] leading-[36px] text-white ">1M+</h3>
            <p className="text-[18px] leading-[23.4px] text-[#A1A1A1] ">TVL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
