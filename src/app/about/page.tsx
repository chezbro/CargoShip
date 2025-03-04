"use client";

import Image from "next/image";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <section className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]">
        <div className="container">
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            <div className="wow fadeInUp" data-wow-delay=".15s">
              <div className="relative h-[400px] w-full overflow-hidden rounded-sm">
                <Image
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="About CargoShip"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <div className="relative z-1 rounded-sm bg-white p-8 shadow-one dark:bg-dark dark:shadow-gray-dark">
                <h2 className="mb-6 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
                  Our Story
                </h2>
                <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  At CargoShip LLC, we believe that every shipment deserves the same level of attention and care, regardless of size. Our commitment to exceptional service and our &quot;No Excuses&quot; approach sets us apart in the logistics industry.
                </p>
                <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                  Our affiliation with Armstrong Transport Group provides us with the resources and network to deliver comprehensive logistics solutions while maintaining the personal touch that makes us unique.
                </p>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full">
                      <Image
                        src="/images/seid.jpeg"
                        alt="CEO"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-dark dark:text-white">
                        Sean Seid
                      </h4>
                      <p className="text-sm text-body-color dark:text-body-color-dark">
                        CEO & Founder
                      </p>
                    </div>
                  </div>
                </div>
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
                  Our Mission
                </h2>
                <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                  To provide exceptional logistics services with a personal touch, treating every shipment as if it&apos;s our last, with No Excuses.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                id: "mission-1",
                title: "Innovation",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
                icon: (
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 3C9.716 3 3 9.716 3 18C3 26.284 9.716 33 18 33C26.284 33 33 26.284 33 18C33 9.716 26.284 3 18 3ZM18 30C11.373 30 6 24.627 6 18C6 11.373 11.373 6 18 6C24.627 6 30 11.373 30 18C30 24.627 24.627 30 18 30Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 9C13.029 9 9 13.029 9 18C9 22.971 13.029 27 18 27C22.971 27 27 22.971 27 18C27 13.029 22.971 9 18 9ZM18 24C14.686 24 12 21.314 12 18C12 14.686 14.686 12 18 12C21.314 12 24 14.686 24 18C24 21.314 21.314 24 18 24Z"
                      fill="currentColor"
                    />
                  </svg>
                ),
              },
              {
                id: "mission-2",
                title: "Sustainability",
                description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
                icon: (
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 3C9.716 3 3 9.716 3 18C3 26.284 9.716 33 18 33C26.284 33 33 26.284 33 18C33 9.716 26.284 3 18 3ZM18 30C11.373 30 6 24.627 6 18C6 11.373 11.373 6 18 6C24.627 6 30 11.373 30 18C30 24.627 24.627 30 18 30Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 9C13.029 9 9 13.029 9 18C9 22.971 13.029 27 18 27C22.971 27 27 22.971 27 18C27 13.029 22.971 9 18 9ZM18 24C14.686 24 12 21.314 12 18C12 14.686 14.686 12 18 12C21.314 12 24 14.686 24 18C24 21.314 21.314 24 18 24Z"
                      fill="currentColor"
                    />
                  </svg>
                ),
              },
              {
                id: "mission-3",
                title: "Excellence",
                description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
                icon: (
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 3C9.716 3 3 9.716 3 18C3 26.284 9.716 33 18 33C26.284 33 33 26.284 33 18C33 9.716 26.284 3 18 3ZM18 30C11.373 30 6 24.627 6 18C6 11.373 11.373 6 18 6C24.627 6 30 11.373 30 18C30 24.627 24.627 30 18 30Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 9C13.029 9 9 13.029 9 18C9 22.971 13.029 27 18 27C22.971 27 27 22.971 27 18C27 13.029 22.971 9 18 9ZM18 24C14.686 24 12 21.314 12 18C12 14.686 14.686 12 18 12C21.314 12 24 14.686 24 18C24 21.314 21.314 24 18 24Z"
                      fill="currentColor"
                    />
                  </svg>
                ),
              },
            ].map((value) => (
              <div
                key={value.id}
                className="wow fadeInUp"
                data-wow-delay=".15s"
              >
                <div className="group relative overflow-hidden rounded-sm bg-white p-8 shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
                  <div className="relative z-1 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
                    {value.icon}
                  </div>
                  <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-base text-body-color dark:text-body-color-dark">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
