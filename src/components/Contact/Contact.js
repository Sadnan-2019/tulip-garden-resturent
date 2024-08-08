import React from "react";

const Contact = () => {
  return (
    <div>
      <div className=" bg-gradient-to-r from-[#017445] via-[#160a2c] to-[#EF932A]">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2   items-center justify-items-center px-8">
          <div>
            <div class="flex flex-col  justify-center p-8     rounded-xl relative z-10">
               
              <form>
                <div class="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                  <div data-aos="fade-up" class="relative">
                    <p class="  pt-0 pr-2 pb-0 pl-2 -mt-8 mr-0 mb-0 ml-2 font-medium text-gray-100 absolute">
                      Name
                    </p>
                    <input
                      name="name"
                      placeholder="John"
                      type="text"
                      class="border  placeholder-gray-400 focus:outline-none
      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
      border-gray-300 rounded-md"
                    />
                  </div>
                  <div data-aos="fade-up" class="relative">
                    <p class="  pt-0 pr-2 pb-0 pl-2 -mt-8 mr-0 mb-0 ml-2 font-medium text-gray-100 absolute">
                      Email
                    </p>
                    <input
                      name="email"
                      placeholder="123@ex.com"
                      type="email"
                      class="border placeholder-gray-400 focus:outline-none
      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
      border-gray-300 rounded-md"
                    />
                  </div>
                  <div data-aos="fade-up" class="relative">
                    <p class="  pt-0 pr-2 pb-0 pl-2 -mt-8 mr-0 mb-0 ml-2 font-medium text-gray-100 absolute">
                      Phone Number
                    </p>
                    <input
                      name="mobile"
                      placeholder="Phone Number"
                      type="text"
                      class="border placeholder-gray-400 focus:outline-none
      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
      border-gray-300 rounded-md"
                    />
                  </div>

                  <div data-aos="fade-up" class="relative">
                    <p
                      class="  pt-0 pr-2 pb-0 pl-2 -mt-8 mr-0 mb-0 ml-2 font-medium text-gray-100
      absolute"
                    >
                      Message
                    </p>
                    <textarea
                      name="message"
                      placeholder="Message"
                      type="text"
                      class="border placeholder-gray-400 focus:outline-none
      focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white
      border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="">
                    <input
                      type="submit"
                      className="btn bg-gradient-to-r from-[#080C24] via-[#3342BF] to-[#080C24]  w-full max-w-x "
                      value="Send message"
                      style={{ backgroundColor: "#453364", color: "white" }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="slide-content sm:max-w-xs lg:max-w-xl text-left md:ml-8 lg:order-1 order-2   lg:mt-0 ">
         

            <div>
              <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                <div class="px-6 py-4">
                  <h3 class="text-lg font-medium text-gray-100">Our Address</h3>
                  <p class="mt-1 text-gray-100">
                  Zero Point, Nawdhar, Trishal, Mymensingh, Bangladesh
                  </p>
                </div>
                <div class="border-t border-gray-200 px-6 py-4">
                  <h3 class="text-lg font-medium text-gray-100">Hours</h3>
                  <p class="mt-1 text-gray-100">Saturday: 09:00am - 06:00pm</p>
                  <p class="mt-1 text-gray-100">Sunday: 09:00am - 06:00pm</p>
                  <p class="mt-1 text-gray-100">Monday: 09:00am - 06:00pm</p>
                  <p class="mt-1 text-gray-100">Tuesday: 09:00am - 06:00pm</p>
                  <p class="mt-1 text-gray-100">Wednesday: 09:00am - 06:00pm</p>
                  <p class="mt-1 text-gray-100">Thursday: 09:00am - 06:00pm</p>
                </div>
                <div class="border-t border-gray-200 px-6 py-4">
                  <h3 class="text-lg font-medium text-gray-100">Contact</h3>
                  <p class="mt-1 text-gray-100">Email: info@tgr.mrg.bd.com</p>
                  <p class="mt-1 text-gray-100">Phone: 880 1633-077777</p>
                  {/* <p class="mt-1 text-gray-100">Phone: +880 1333-388686</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
