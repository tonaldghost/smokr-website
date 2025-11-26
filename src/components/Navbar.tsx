import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 py-6 w-full px-4 z-20">
      <nav className="bg-neutral-900 rounded-full border border-neutral-800 px-5 py-3 mx-auto max-w-4xl flex items-center justify-between">
        {/* Left - Logo and Brand */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-base">🚀</span>
          </div>
          <span className="text-lg font-medium text-white">Smokr App</span>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex items-center text-sm space-x-6">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link
            href="/#features"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Features
          </Link>
        </div>

        {/* Right - Download Button */}
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
      </nav>
    </div>
  );
}
