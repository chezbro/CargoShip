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
                      href="https://www.linkedin.com/company/cargoship-llc/?_l=en_US"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"
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

          <div className="mt-16">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[620px] text-center lg:max-w-[620px]">
                  <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[42px]">
                    Send us a Message
                  </h2>
                  <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                    Have a specific question or request? Fill out the form below and our team will get back to you as soon as possible.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
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
        </div>
      </section>
    </>
  );
};

export default ContactPage;
