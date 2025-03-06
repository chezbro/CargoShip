"use client";

import Image from "next/image";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";

const AboutPage = () => {
  return (
    <>
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
    </>
  );
};

export default AboutPage;
