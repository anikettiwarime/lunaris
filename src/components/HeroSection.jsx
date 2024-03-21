const HeroSection = () => {
    return (
      <section className="flex flex-col text-white justify-center items-center w-full bg-[url('./HeroImg.png')] h-[464px] bg-cover object-fill bg-blend-light opacity-90">
        <div className="flex flex-col items-center justify-center px-4 gap-6">
          <p className="text-[10px] leading-[13px] font-medium text-center whitespace-pre-line">
            platform opens the door to a new era of opportunities.{'\n'}
            Lend with confidence, borrow with ease.
          </p>
          <p className="text-[28px] leading-[30px] font-medium text-center">
            Unshackle Your <span className="text-[#00E0FF]">Finances</span> Introducing{' '}
            <span className="text-[#00E0FF]">Lunaris</span>
          </p>
          <button className="bg-gradient-to-r from-[#00E0FF] to-[#00B4D8] hover:from-[#00B4D8] hover:to-[#00E0FF] rounded-[9px] px-[16px] py-[10px] font-semibold text-white shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            Launch App
          </button>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  