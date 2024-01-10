
import Button from "../components/Button"
import { services } from '../constant';
import { Card } from 'flowbite-react';
import { repairIcon } from "../assets/images"

const Services = () => {
  return (
    <section id="gallery"
      className="max-container max-sm:mt-12">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <h2 className='font-palanquin text-4xl font-bold text-[#404040]'>Our Portfolio</h2>
        <img src={repairIcon} alt="repair icon tools" className="w-[50px] h-[50px]" />
        <p className="info-text text-center lg:max-w-xl mt-2">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>

        <div class="container mx-auto lg:pt-10">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Button label="View More" />
        </div>

      </div>
    </section>
  )
}

export default Services