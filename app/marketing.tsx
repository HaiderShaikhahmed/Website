"use client";
import { CiSearch } from "react-icons/ci";
import CountUp from 'react-countup';

export default function Marketing() {
  return (
    <div className="text-white">
      <section className="dark:bg-gray-900 text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Elevate Your Brand with Stunning Visuals
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Explore our portfolio and discover how our creative graphic design and web solutions help brands stand out. From unique logos to engaging websites, we turn your vision into impactful digital experiences.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 17l4 4 4-4m-4-5v9" />
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                </svg>
                <h2 className="title-font font-medium text-3xl text-white">
                  <CountUp end={2700} duration={3} separator="," />
                </h2>
                <p className="leading-relaxed">Projects Delivered</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx={9} cy={7} r={4} />
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75" />
                </svg>
                <h2 className="text-white title-font font-medium transition-all md:text-3xl text-2xl">
                  <CountUp end={1300} duration={3} separator="," />
                </h2>
                <p className="leading-relaxed">Happy Clients</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6" />
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z" />
                </svg>
                <h2 className="title-font font-medium md:text-3xl text-2xl text-white">
                  <CountUp end={74} duration={3} />
                </h2>
                <p className="leading-relaxed">Websites Designed</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <CiSearch className="font-bold hover:font-extrabold text-indigo-500 w-12 h-12 mb-3 inline-block hover:scale-110 transition-all hover:text-white" />
                <h2 className="title-font font-medium md:text-3xl text-2xl text-white">
                  <CountUp end={46} duration={3} />
                </h2>
                <p className="leading-relaxed">Portfolio Categories</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}