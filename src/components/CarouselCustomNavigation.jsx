
import { Carousel } from 'flowbite-react';
import { solar2, cctv2, ref, repair1 } from "../assets/images"

function CarouselCustomNavigation() {
    return (
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel pauseOnHover>
                <img className="relative object-contain" src={solar2} alt="solar" />
                <img className="relative object-contain" src={cctv2} alt="cctv" />
                <img className="relative object-contain" src={ref} alt="ref" />
                <img className="relative object-contain" src={repair1} alt="repair1" />
            </Carousel>
        </div>
    );
}

export default CarouselCustomNavigation