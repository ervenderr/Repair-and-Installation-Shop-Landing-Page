
import Button from "../components/Button"
import { services } from '../constant';
import { Card } from 'flowbite-react';
import { repairIcon } from "../assets/images"

const Services = () => {
  return (
    <section id="services"
      className="max-container max-sm:mt-12">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <h2 className='font-palanquin text-4xl font-bold text-[#404040]'>Our Service</h2>
        <img src={repairIcon} alt="repair icon tools" className="w-[50px] h-[50px]" />
        <p className="info-text text-center lg:max-w-xl mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. officia quam </p>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-16'>
          {services.map((service) => (
            <div className="w-full flex flex-1 flex-col max-sm:w-full">
              <Card
                className="max-w-lg border-none text-[#404040]"
                imgAlt={service.name}
                imgSrc={service.imgURL}
              >
                <h5 className="text-2xl font-montserrat font-medium tracking-tight text-gray-900 dark:text-white mt-5">
                  {service.name}
                </h5>
                <p className="info-text dark:text-gray-400">
                  {service.description}
                </p>
                <ul className="my-7 space-y-5">
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-primary dark:text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-slate-gray dark:text-gray-400">lorem ipsum dolor</span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-primary dark:text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-slate-gray dark:text-gray-400">
                    lorem ipsum dolor
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="h-5 w-5 shrink-0 text-primary dark:text-cyan-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-slate-gray dark:text-gray-400">lorem ipsum dolor</span>
                  </li>
                </ul>
                <p className='font-montserrat font-medium text-xl'>Price: {service.price}</p>
                <div className="mt-5">
          <Button label="Read More" />
        </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services