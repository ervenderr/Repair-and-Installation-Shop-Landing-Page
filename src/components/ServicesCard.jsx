import { Card } from 'flowbite-react';
import { services } from "../constant"

const ServicesCard = ({imgUrl, name, price, description}) => {
  return (
    <div className="w-full flex flex-1 flex-col max-sm:w-full">
     <img src={services.imgUrl} alt={name} className='h-[100px] w-[100px] object-cover'/>
     <p className='font-montserrat text-slate-gray'>{price}</p>
     <p className='font-montserrat text-slate-gray'>{description}</p>
    </div>
  )
}

export default ServicesCard
{/* <Card
    className="max-w-sm"
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="/images/blog/image-1.jpg"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
  <Card
    className="max-w-sm"
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="/images/blog/image-1.jpg"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card>
  <Card
    className="max-w-sm"
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="/images/blog/image-1.jpg"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Noteworthy technology acquisitions 2021
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
    </p>
  </Card> */}