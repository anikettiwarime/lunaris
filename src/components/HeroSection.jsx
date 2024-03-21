const HeroSection = () => {
  return (
    <section className="relative flex h-[464px] w-full">
      <img
        src="./HeroImg.png"
        alt="Hero Image"
        className="absolute inset-0 z-[0] h-full w-full object-cover"
      />
      <div className="relative z-[10] flex flex-col items-center justify-center gap-6 bg-transparent px-4 text-white">
        <p className="whitespace-pre-line text-center text-[10px] font-medium leading-[13px]">
          platform opens the door to a new era of opportunities.{"\n"}
          Lend with confidence, borrow with ease.
        </p>
        <p className="text-center text-[28px] font-medium leading-[30px]">
          Unshackle Your <span className="text-[#00E0FF]">Finances</span>{" "}
          Introducing <span className="text-[#00E0FF]">Lunaris</span>
        </p>
        <button className="rounded-[9px] bg-gradient-to-r from-[#00E0FF] to-[#00B4D8] px-[16px] py-[10px] font-semibold text-white shadow-md transition duration-300 ease-in-out hover:from-[#00B4D8] hover:to-[#00E0FF] hover:shadow-lg">
          Launch App
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
