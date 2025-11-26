import { StarIcon } from "@phosphor-icons/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-30 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          {/* User Rating */}
          <Reviews className="max-md:hidden" />
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl font-semibold text-neutral-900 lg:leading-[110%]">
            <span className="">Your journey to</span>
            <br />
            <span className="">quit smoking starts here</span>
          </h1>

          {/* Description */}
          <p className="text-base text-neutral-600 max-w-md leading-relaxed">
            Meet Smokr, the ultimate app to help you quit smoking for good.
            Track your progress, save money, improve your health, and join a
            supportive community on your smoke-free journey.
          </p>

          {/* Download Button */}
          <div className="flex items-center">
            <a
              href="#"
              className="px-4 py-2 flex items-center gap-2 text-sm bg-neutral-800 border border-neutral-700 hover:bg-neutral-900 text-white rounded-full font-medium transition duration-400"
              style={{
                boxShadow: "0 -4px 2px 1px rgba(255, 255, 255, 0.025) inset",
              }}
            >
              <Image
                src="/apple-logo.svg"
                alt="apple"
                width={20}
                height={20}
                className="brightness-0 invert"
              />
              <span>
                Download
                <span className="hidden md:inline"> on the App Store</span>
              </span>
            </a>
          </div>

          <Reviews className="md:hidden" />
        </div>

        {/* Right Content - Phone Mockups */}
        <div className="relative flex justify-center lg:pl-30">
          <div className="relative">
            {/* Main Phone */}
            <div className="relative z-10 bg-black rounded-[2.5rem] p-2 shadow-2xl">
              <div className="bg-gray-900 rounded-[2rem] overflow-hidden w-72 h-[600px] relative">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/50 to-transparent z-20 flex items-center justify-between px-6 text-white text-sm">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                    <div className="w-4 h-2 bg-white rounded-sm"></div>
                  </div>
                </div>

                {/* Phone Content */}
                <div className="w-full h-full bg-gray-100"></div>

                {/* Bottom UI */}
              </div>
            </div>

            {/* Secondary Phone */}
            <div className="absolute -right-8 top-12 bg-black rounded-[2rem] p-2 shadow-xl transform rotate-6 z-0">
              <div className="bg-white rounded-[1.5rem] overflow-hidden w-64 h-[520px] relative">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/10 to-transparent z-20 flex items-center justify-between px-6 text-black text-sm">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-black rounded-sm"></div>
                    <div className="w-1 h-2 bg-black rounded-sm"></div>
                    <div className="w-6 h-2 bg-black rounded-sm"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full h-full bg-gray-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews({ className }: { className?: string }) {
  return (
    <div
      className={
        "flex items-center space-x-3 max-md:flex-col max-md:items-start max-md:gap-2 " +
        className
      }
    >
      <div className="flex -space-x-2">
        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
        <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
        <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-white"></div>
      </div>
      <span className="text-sm text-neutral-600 flex items-center gap-1">
        Trusted by 10K+ users with{" "}
        <StarIcon weight="fill" className="text-amber-500 size-4" /> 4.8 rating
      </span>
    </div>
  );
}
