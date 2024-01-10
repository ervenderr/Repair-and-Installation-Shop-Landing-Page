import { repairIcon, solaricon, cctvicon, repairicon } from "../assets/images"

const Pricing = () => {
  return (
    <section id="pricing"
      className="max-container max-sm:mt-12">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <h2 className='font-palanquin text-4xl font-bold text-[#404040]'>Awesome Pricing Plan</h2>
        <img src={repairIcon} alt="repair icon tools" className="w-[50px] h-[50px]" />
        <p className="info-text text-center lg:max-w-xl mt-2">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>

        <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 mt-10">
          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <img src={repairicon} alt="repair icon tools" className="w-[100px] h-[100px] max-container" />
            <h3 class="mb-4 text-2xl font-bold font-montserrat text-[#404040] mt-5">Basic Plan</h3>
            <p class="info-text sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-[40px] font-extrabold">₱2999</span>
            </div>
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>Individual configuration</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>Team size: <span class="font-semibold">1 Technician</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>Premium support: <span class="font-semibold">6 months</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>Free updates: <span class="font-semibold">6 months</span></span>
              </li>
            </ul>
            <a href="#" class="text-white bg-primary hover:scale-105 duration-300 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>

          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <img src={solaricon} alt="repair icon tools" className="w-[100px] h-[100px] max-container" />
            <h3 class="mb-4 text-2xl font-bold font-montserrat text-[#404040] mt-5">Standarn Plan</h3>
            <p class="info-text sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-[40px] font-extrabold">₱3999</span>
            </div>
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>Individual configuration</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>Team size: <span class="font-semibold">3 Technicians</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>Premium support: <span class="font-semibold">6 months</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>Free updates: <span class="font-semibold">6 months</span></span>
              </li>
            </ul>
            <a href="#" class="text-white bg-primary hover:scale-105 duration-300 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>

          <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <img src={cctvicon} alt="repair icon tools" className="w-[100px] h-[100px] max-container" />
            <h3 class="mb-4 text-2xl font-bold font-montserrat text-[#404040] mt-5">Premium Plan</h3>
            <p class="info-text sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
            <div class="flex justify-center items-baseline my-8">
              <span class="mr-2 text-[40px] font-extrabold">₱4999</span>
            </div>
            <ul role="list" class="mb-8 space-y-4 text-left">
              <li class="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>Individual configuration</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>No setup, or hidden fees</span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>Team size: <span class="font-semibold">4 Technicians</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>Premium support: <span class="font-semibold">6 months</span></span>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                <span>Free updates: <span class="font-semibold">6 months</span></span>
              </li>
            </ul>
            <a href="#" class="text-white bg-primary hover:scale-105 duration-300 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">Get started</a>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Pricing