import { repairIcon } from "../assets/images"

const Team = () => {
  return (
    <section id="technician"
      className="max-container max-sm:mt-12">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <h2 className='font-palanquin text-4xl font-bold text-[#404040]'>Our Technicians</h2>
        <img src={repairIcon} alt="repair icon tools" className="w-[50px] h-[50px]" />
        <p className="info-text text-center lg:max-w-xl mt-2">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>

        <div className="grid gap-10 row-gap-8 sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 w-full mt-10 max-container">
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Oliver Aguilerra</p>
              <p className="text-sm text-gray-800">Technician One</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Marta Clermont</p>
              <p className="text-sm text-gray-800">Technician Two</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Anthony Geek</p>
              <p className="text-sm text-gray-800">Technician Three</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Alice Melbourne</p>
              <p className="text-sm text-gray-800">Technician Four</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Martin Garix</p>
              <p className="text-sm text-gray-800">Technician Five</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Andrew Larkin</p>
              <p className="text-sm text-gray-800">Technician Six</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Sophie Denmo</p>
              <p className="text-sm text-gray-800">Technician Seven</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Benedict Caro</p>
              <p className="text-sm text-gray-800">Technician Eight</p>
            </div>
          </div>
          <div className="flex">
            <img
              className="object-cover w-20 h-20 mr-4 rounded-full shadow"
              src="https://images.pexels.com/photos/3783255/pexels-photo-3783255.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-lg font-bold">Adam Molly</p>
              <p className="text-sm text-gray-800">Technician Nine</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Team