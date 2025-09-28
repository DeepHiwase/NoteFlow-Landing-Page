import ArrowRight from "../icons/ArrowRight";
import ArrowRightLine from "../icons/ArrowRightLine";
import HeroGraphic from "../../../src/assets/graphics/HeroGraphic.webp";

const Hero = () => {
  return (
    <div className="m-auto grid max-w-[90rem] grid-cols-[5fr_4fr] items-center gap-x-18 px-25 py-42">
      <div>
        <div>
          <h1 className="text-primary-50 mb-6 text-6xl/18 font-semibold tracking-tighter">
            AI-Powered Notes. Organize and Summarize in Seconds
          </h1>
          <p className="text-primary-100 mb-10 text-xl/loose font-light">
            Let AI organize & summarize your notes, <br />
            saving you time and boosting productivity
          </p>
        </div>
        <button className="bg-primary-500 text-primary-1300 primary-glow primary-glow-hover border-primary-500 hover:border-primary-50 hover:bg-primary-50 transition-properties group flex cursor-pointer items-center gap-x-3 rounded-full border-2 px-8 py-4">
          <p className="text-lg/8 font-light">Get Started</p>
          <div className="w-6">
            <ArrowRightLine
              alt="Arrow right line"
              className="stroke-primary-1300 transition-properties -mr-3 inline w-0 opacity-0 ease-in-out group-hover:w-3 group-hover:opacity-100"
              width={2.5}
            />
            <ArrowRight
              alt="Arrow right icon"
              className="stroke-primary-1300 inline w-5"
              width={2}
            />
          </div>
        </button>
      </div>

      <div className="relative">
        <div className="bg-primary-1300 absolute top-0 right-0 bottom-0 left-0 rounded-full blur-3xl" />
        <img
          src={HeroGraphic}
          alt="Hero graphic showing note summarizer functionality"
          className="relative max-h-[40rem] justify-self-end"
        />
      </div>
    </div>
  );
};

export default Hero;
