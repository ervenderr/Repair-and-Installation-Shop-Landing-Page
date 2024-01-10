import { Button } from 'flowbite-react';

const Promo = () => {
  return (
    <section id="promo"
    className="w-full flex xl:flex-row justify-center min-h-min">
      <div className="flex justify-center items-center text-center flex-col text-[#404040]">
        <h5 className='text-[60px] font-palanquin font-bold'>Ready To Get Our Service</h5>
        <Button outline gradientDuoTone="greenToBlue" className='mt-5 text-[#404040]' size="xl">
        REQUEST NOW
      </Button>
      </div>
    </section>
  )
}

export default Promo