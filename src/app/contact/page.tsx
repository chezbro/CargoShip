"use client";

import Image from "next/image";

const ContactPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[620px] text-center lg:max-w-[620px]">
                <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[42px]">
                  Contact Us
                </h1>
                <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                  Get in touch with us for all your logistics needs. We&apos;re here to help with any questions or concerns you may have.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div className="wow fadeInUp" data-wow-delay=".15s">
              <div className="relative z-1 rounded-sm bg-white p-8 shadow-one dark:bg-dark dark:shadow-gray-dark">
                <h2 className="mb-6 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
                  Get in Touch
                </h2>
                <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  We&apos;re headquartered in Metro Detroit, MI, and ready to assist you with all your shipping and logistics requirements.
                </p>
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                    Office Location
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Metro Detroit, MI
                    <br />
                    United States
                  </p>
                </div>
                <div className="mb-8">
                  <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                    Contact Info
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    Phone: (248) 421-1089
                    <br />
                    Email: Sean@cargoshipllc.com
                  </p>
                </div>
                <div>
                  <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.477 2 2 6.477 2 12C2 16.991 4.388 21.128 8.207 22.998C8.756 23.114 8.935 22.762 8.935 22.456C8.935 22.18 8.935 21.51 8.935 20.78C6.935 21.28 6.477 20.18 6.477 20.18C5.935 18.82 5.477 18.82 5.477 18.82C4.935 18.82 5.477 19.28 5.477 19.28C6.035 20.82 7.477 20.28 8.935 20.18C8.935 19.28 9.477 18.82 9.935 18.82C12.935 18.82 14.477 16.82 14.477 16.82C14.477 15.28 13.935 14.18 13.477 13.82C13.935 13.82 14.477 13.82 14.935 13.82C15.477 13.82 15.935 13.82 16.477 13.82C17.935 13.82 19.477 15.28 19.477 16.82C19.477 18.82 17.935 20.82 14.935 20.82C15.477 21.28 15.935 21.82 15.935 22.456C15.935 23.114 15.756 23.466 15.207 23.582C19.028 21.712 21.416 17.574 21.416 12.59C21.416 6.477 17.123 2 12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.477 2 2 6.477 2 12C2 16.991 4.388 21.128 8.207 22.998C8.756 23.114 8.935 22.762 8.935 22.456C8.935 22.18 8.935 21.51 8.935 20.78C6.935 21.28 6.477 20.18 6.477 20.18C5.935 18.82 5.477 18.82 5.477 18.82C4.935 18.82 5.477 19.28 5.477 19.28C6.035 20.82 7.477 20.28 8.935 20.18C8.935 19.28 9.477 18.82 9.935 18.82C12.935 18.82 14.477 16.82 14.477 16.82C14.477 15.28 13.935 14.18 13.477 13.82C13.935 13.82 14.477 13.82 14.935 13.82C15.477 13.82 15.935 13.82 16.477 13.82C17.935 13.82 19.477 15.28 19.477 16.82C19.477 18.82 17.935 20.82 14.935 20.82C15.477 21.28 15.935 21.82 15.935 22.456C15.935 23.114 15.756 23.466 15.207 23.582C19.028 21.712 21.416 17.574 21.416 12.59C21.416 6.477 17.123 2 12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.477 2 2 6.477 2 12C2 16.991 4.388 21.128 8.207 22.998C8.756 23.114 8.935 22.762 8.935 22.456C8.935 22.18 8.935 21.51 8.935 20.78C6.935 21.28 6.477 20.18 6.477 20.18C5.935 18.82 5.477 18.82 5.477 18.82C4.935 18.82 5.477 19.28 5.477 19.28C6.035 20.82 7.477 20.28 8.935 20.18C8.935 19.28 9.477 18.82 9.935 18.82C12.935 18.82 14.477 16.82 14.477 16.82C14.477 15.28 13.935 14.18 13.477 13.82C13.935 13.82 14.477 13.82 14.935 13.82C15.477 13.82 15.935 13.82 16.477 13.82C17.935 13.82 19.477 15.28 19.477 16.82C19.477 18.82 17.935 20.82 14.935 20.82C15.477 21.28 15.935 21.82 15.935 22.456C15.935 23.114 15.756 23.466 15.207 23.582C19.028 21.712 21.416 17.574 21.416 12.59C21.416 6.477 17.123 2 12 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="relative h-[400px] w-full overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
                  alt="Contact Us"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[620px] text-center lg:max-w-[620px]">
                <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[42px]">
                  Send us a Message
                </h2>
                <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <form className="wow fadeInUp" data-wow-delay=".15s">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-dark dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full rounded-sm border border-stroke bg-white px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none dark:border-body-color dark:bg-dark dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-dark dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full rounded-sm border border-stroke bg-white px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none dark:border-body-color dark:bg-dark dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-dark dark:text-white"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Enter your message"
                      className="w-full rounded-sm border border-stroke bg-white px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary focus-visible:shadow-none dark:border-body-color dark:bg-dark dark:text-white dark:focus:border-primary"
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4">
                  <button
                    type="submit"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
