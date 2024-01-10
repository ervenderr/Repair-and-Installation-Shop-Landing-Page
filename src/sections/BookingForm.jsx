
const BookingForm = () => {
  return (
    <section className="w-full flex xl:flex-row justify-center min-h-min bg-gray">
      <div className="relative xl:w-5/5 flex flex-col
      justify-center items-start w-full padding-y max-container">
        <form className="w-full">
          <div className="grid gap-6 mb-6 lg:grid-cols-3 md:grid-cols-2">
            <div>
              <label for="first_name" className="block mb-2 text-lg font-medium text-gray-900 text-white">First name</label>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-medium block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="John" />
            </div>
            <div>
              <label for="last_name" className="block mb-2 text-lg font-medium text-gray-900 text-white">Last name</label>
              <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-medium block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="Doe" />
            </div>
            <div>
              <label for="email" className="block mb-2 text-lg font-medium text-gray-900 text-white">Email</label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-medium block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="email@email.com" />
            </div>
            <div>
              <label for="phone" className="block mb-2 text-lg font-medium text-gray-900 text-white">Phone number</label>
              <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg font-medium block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white " placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
            </div>
            <div>
              <label for="website" className="block mb-2 text-lg font-medium text-gray-900 text-white">Service</label>
              <select id="category" class="bg-gray-50 text-gray-900 text-lg font-normal block w-full p-3.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white ">
                <option className="" selected>Choose Category</option>
                <option value="cctv">CCTV Installation</option>
                <option value="solar">Solar Installation</option>
                <option value="fingerprint">Fingerprint Installation</option>
              </select>
            </div>
            <div className="mt-7">
              <button type="submit" className=" text-white font-medium rounded-sm bg-primary w-full p-4 border-2 border-primary hover:bg-gray hover:border-primary duration-500">REQUEST NOW</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default BookingForm