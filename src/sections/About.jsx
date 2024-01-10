import { repairIcon } from "../assets/images"
import Button from "../components/Button"
import CarouselCustomNavigation from "../components/CarouselCustomNavigation";

const about = () => {
  return (
    <section id="about-us"
      className="w-full flex justify-between items-center max-lg:flex-col gap-10 max-container">
      <div className="flex flex-1 flex-col delay-[300ms] duration-[600ms] taos:translate-x-[-200px] taos:opacity-0" data-taos-offset="400">
        <p className="text-md font-montserrat font-bold text-[#588157] capitalize">WELCOME TO OUR SHOP</p>
        <img src={repairIcon} alt="repair icon tools" className="w-[50px] h-[50px] mt-5" />
        <h1 className="mt-5 font-palanquin text-3xl font-medium lg:max-w-2xl text-[#404040]">
          More than 20 Years Repair and Installation Experience in this World
        </h1>
        <p className="info-text mt-4 lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit at sapiente culpa explicabo praesentium. Tempore magnam aperiam corporis atque at veritatis, optio, consequuntur quam asperiores velit esse voluptatum itaque voluptas.
        </p>
        <p className="mt-4 info-text lg:max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, omnis. Itaque minus ad at.</p>
        <div className="mt-11">
          <Button label="Read More" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center max-container">
        <CarouselCustomNavigation />
      </div>
    </section>
  )
}

export default about