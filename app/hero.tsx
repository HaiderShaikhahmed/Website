"use client";
import Typewriter from 'typewriter-effect';

import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import jacket from "./assets/jacket2.jpg";
import heroImage from "./assets/bg-Hero.jpg";
// import ScrollAnimation from 'react-animate-on-scroll'; // Remove this if using React 19

export default function Hero() {
  const heroContentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroContentRef.current) {
        const translateY = Math.max(-300, -scrollY / 3);
        heroContentRef.current.style.transform = `translateY(${translateY}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      title: "Brand Identity & Logo Design",
      desc: "Crafting memorable logos and cohesive brand visuals.",
      icon: "🎨",
    },
    {
      title: "Digital & Print Marketing Materials",
      desc: "Designing flyers, brochures, banners, and more.",
      icon: "📰",
    },
    {
      title: "UI/UX & Web Graphics",
      desc: "Modern interfaces and engaging web visuals.",
      icon: "💻",
    },
    {
      title: "Custom Illustrations",
      desc: "Unique artwork tailored to your brand.",
      icon: "🖌️",
    },
  ];

  return (
    <section className="bg-gray-900">
      <div className="h-screen relative">
        <Image
          src={heroImage}
          alt="hero background"
          fill
          style={{ objectFit: "cover", zIndex: 0 }}
          className="absolute inset-0 w-full h-full opacity-80"
          priority
        />

        {/* Centered content */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div
            ref={heroContentRef}
            className="flex flex-col items-center justify-center text-center text-white bg-gray-800/10 backdrop-blur-md w-max mx-auto p-6 sm:mt-20 rounded-lg space-y-2 transition-transform duration-300 will-change-transform"
          >
            <p className="text-xl font-semibold">Designing Brought to Another Level</p>
            <p className="mx-auto">Transforming ideas into stunning visuals that captivate and inspire.</p>
            <div className="hidden sm:block">
              <p className="mx-auto">Empowering brands with creativity, innovation, and passion.</p>
              <p className="mx-auto">Where imagination meets precision for impactful results.</p>
              <p className="mx-auto">Your vision, our design — together, we make it unforgettable.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="gap-16 items-center py-10 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <div className="relative">
            <h2 className="relative z-10 mb-2 text-4xl tracking-tight font-bold text-gray-900 dark:text-white mt-10 flex flex-col items-start sm:items-start">
              Bringing Brands to Life
              <span className="block text-blue-700 dark:text-blue-400 mt-2 text-2xl font-semibold">
                {/* Typewriter effect */}
                <Typewriter
                  options={{
                    strings: [
                      "Through Creative Design",
                      "Through Creative IDEAS",
                      "Through Creative THINKING",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                    pauseFor: 1800,
                  }}
                />
              </span>
            </h2>
          </div>

          <div className="relative flex items-center justify-center h-72 bg-gray-900">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="group absolute bg-gray-900 rounded-xl border border-gray-300 w-52 h-40 p-4 transition-all duration-300 ease-in-out cursor-pointer shadow-lg hover:scale-110 hover:z-20 hover:shadow-2xl"
                style={{
                  left: `${idx * 130}px`,
                  zIndex: idx,
                }}
              >
                <div className="text-3xl mb-3 text-white">{item.icon}</div>
                <h3 className="font-semibold text-white text-sm">{item.title}</h3>
                <p className="text-blue-100 text-xs">{item.desc}</p>
                <div
                  className="absolute inset-0 pointer-events-none transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #1e3a9a, #2563eb)",
                    opacity: 0.2,
                    borderRadius: "inherit",
                  }}
                />
              </div>
            ))}
          </div>

          <p className="mt-4">
            We are strategists, designers, and developers. Innovators and problem solvers.
            Small enough to be simple and quick.
          </p>

          <Link href="#contact">
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:z-20 hover:scale-105 hover:px-10 hover:text-center hover:mx-auto transition-all duration-300">
              Check Now!
            </button>
          </Link>
        </div>

        {/* Centered Right-side Image */}
        <div className="flex items-center justify-center mt-8 w-full h-96 relative">
          <Image
            src={jacket}
            alt="jacket_image"
            fill
            className="object-contain rounded-lg transition-transform hover:opacity-50 duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ zIndex: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
