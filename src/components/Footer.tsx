import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  XLogoIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="flex items-center justify-between gap-6 max-md:flex-col">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 text-xl font-bold text-white">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-base">🚀</span>
            </div>
            <span>Smokr</span>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 flex-wrap justify-center">
            <Link
              href="/#features"
              className="text-gray-300 hover:text-white font-medium transition-colors text-sm"
            >
              Features
            </Link>
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-white font-medium transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-300 hover:text-white font-medium transition-colors text-sm"
            >
              Terms of Service
            </Link>
            <Link
              href="/support"
              className="text-gray-300 hover:text-white font-medium transition-colors text-sm"
            >
              Support
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 text-gray-300">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white transition-colors"
            >
              <FacebookLogoIcon size={20} weight="duotone" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white transition-colors"
            >
              <InstagramLogoIcon size={20} weight="duotone" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white transition-colors"
            >
              <XLogoIcon size={20} weight="duotone" />
            </a>
            <a
              href="#"
              aria-label="Github"
              className="hover:text-white transition-colors"
            >
              <GithubLogoIcon size={20} weight="duotone" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-neutral-800"></div>

      {/* Copyright Section */}
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href="/"
              className="text-white hover:text-gray-300 transition-colors"
            >
              Smokr
            </Link>
            . <br className="md:hidden" />
            Made with ❤️ for a smoke-free life.
          </p>
        </div>
      </div>
    </footer>
  );
}
