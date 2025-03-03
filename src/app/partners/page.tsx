"use client";

import Image from "next/image";
import Link from "next/link";

const partners = [
  {
    id: "partner-1",
    name: "Global Logistics Co.",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "partner-2",
    name: "Ocean Freight Solutions",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "partner-3",
    name: "Air Cargo Express",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  },
  {
    id: "partner-4",
    name: "Rail Transport Systems",
    description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const PartnersPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[620px] text-center lg:max-w-[620px]">
                <h1 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[42px]">
                  Our Strategic Partners
                </h1>
                <p className="text-lg leading-relaxed text-body-color dark:text-body-color-dark">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="wow fadeInUp"
                data-wow-delay=".15s"
              >
                <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
                  <div className="relative h-[300px] w-full overflow-hidden">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <h2 className="mb-4 text-2xl font-bold text-dark dark:text-white">
                      {partner.name}
                    </h2>
                    <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                      {partner.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-sm font-medium text-primary hover:opacity-80"
                    >
                      Learn More
                      <span className="ml-2">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersPage; 