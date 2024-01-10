import { repairIcon, solar2 } from "../assets/images"
import Button from "../components/Button"
import CarouselCustomNavigation from "../components/CarouselCustomNavigation";

const about = () => {
  return (
    <section id="workingTime"
      className="w-full flex justify-between items-center max-lg:flex-col gap-10 max-container">
      <div className="flex flex-1 flex-col">
        <h1 className="font-palanquin text-3xl font-bold lg:max-w-2xl text-[#404040]">
          WORKING TIME
        </h1>
        <img src={repairIcon} alt="repair icon tools" className="w-[50px] h-[50px] mt-5" />
        <p className="info-text leading-8 mt-5">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle.</p>
        <div className="mt-10">
          <h5 className="working-time-text flex justify-between text-[20px]">
            Weekdays :
            <span>
            9am-5pm
            </span>
          </h5>
          <h5 className="working-time-text flex justify-between text-[20px]">
            Monday :
            <span>
            10am-7pm
            </span>
          </h5>
          <h5 className="working-time-text flex justify-between text-[20px]">
            Weekdays :
            <span>
              Closed
            </span>
          </h5>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center max-container">
        <img src={solar2} alt="" />
      </div>
    </section>
  )
}

export default about