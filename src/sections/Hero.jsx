import { arrowRight } from "../assets/icons"
import { solar1 } from "../assets/images"
import Button from "../components/Button"
import { statistics } from "../constant"

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container"
    >
      <div className="relative xl:w-5/5 flex flex-col
      justify-center items-start w-full max-xl:padding-x
       pt-28">
        <p className="text-xl font-montserrat font-medium text-[#588157] animate-fade-down animate-duration-[1400ms]">Elevate your space with expert installations.</p>
        <h1 className="mt-10 font-palanquin text-[72px] max-sm:text-[72px] max-sm:leading-[82px] font-bold animate-fade-right animate-duration-[1400ms]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 text-[#404040] ">SEAMLESS </span>
          <br />
          <span className="text-[#404040]">SOLUTIONS FOR</span>
          <br />
          <span className="text-primary">A SECURE FUTURE</span>
        </h1>
        <p className="info-text mt-6 mb-14 sm:max-w-sm animate-fade-up animate-duration-[1400ms]">
          Book your installation now and transform your space into a hub of innovation and security.
        </p>
        <div className="flex gap-3 animate-fade-up animate-duration-[1400ms]">
          <Button label="Explore Now"
            iconURL={arrowRight} />
          <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-md border-2 text-primary rounded-md  border-primary hover:scale-95 duration-300">
            Request Now

        </button>
        </div>



        <div className="flex justify-starts items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex justify-center items-center xl:min-h-screen max-xl:py-40 max-xl:p-4 bg-center">
        <img src={solar1} alt="" width={1280} height={750}
          className="object-contain relative z-10 hover:scale-105 duration-500 animate-fade-left animate-duration-[1400ms]" />
      </div>

    </section>
  )
}

export default Hero