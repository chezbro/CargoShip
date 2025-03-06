"use client";

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Image from "next/image";

const Features = () => {
  return (
    <>
      <section id="features" className="py-8 md:py-12 lg:py-16">
        <div className="container">
          <div className="mb-12">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src="/images/cargo-truck.jpg"
                alt="Our Services"
                fill
                className="object-cover object-[center_bottom]"
              />
            </div>
          </div>
          <SectionTitle
            title="Our Services"
            paragraph="We offer comprehensive logistics solutions to meet all your shipping needs, from FTL to specialized services."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
