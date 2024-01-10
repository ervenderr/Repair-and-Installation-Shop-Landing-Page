import { repairIcon } from "../assets/images"

const CustomerReviews = () => {
  return (
    <section id="customer-reviews"
      className="max-continer max-sm:mt-12">
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <h2 className='font-palanquin text-4xl font-bold text-[#404040]'>Customer Reviews</h2>
        <img src={repairIcon} alt="repair icon tools" className="w-[50px] h-[50px]" />
        <p className="info-text text-center lg:max-w-xl mt-2">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>

        <div class="px-4 text-center lg:py-16 flex gap-10 max-container justify-center">
          <figure class="max-w-screen-md mx-auto">
            <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
            </svg>
            <blockquote>
              <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div class="pr-3 font-medium text-gray-900 dark:text-white">Erven Idjad</div>
                <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
              </div>
            </figcaption>
          </figure>
          <figure class="max-w-screen-md mx-auto">
            <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
            </svg>
            <blockquote>
              <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div class="pr-3 font-medium text-gray-900 dark:text-white">Gon Freecss</div>
                <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">Protagonist at HXH</div>
              </div>
            </figcaption>
          </figure>
          <figure class="max-w-screen-md mx-auto">
            <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
            </svg>
            <blockquote>
              <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div class="pr-3 font-medium text-gray-900 dark:text-white">Jamila Jakaria</div>
                <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Facebook</div>
              </div>
            </figcaption>
          </figure>
        </div>

      </div>
    </section>
  )
}

export default CustomerReviews