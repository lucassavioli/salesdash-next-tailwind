"use client";
import { useState } from "react";
import UserDropdown from "../UserDropdown/UserDropdown";
import MobileNavbar from "../MobileNavbar/MobileNavbar";
import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import DarkModeToggle from "../UI/DarkModeToggle";

export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return (
    <header
      id="page-header"
      className="z-50 flex flex-none items-center border-b border-neutral-200/75 bg-white/90 backdrop-blur-sm lg:fixed lg:end-0 lg:start-0 lg:top-0 lg:h-20"
    >
      <div className="container mx-auto px-4 lg:px-8 xl:max-w-7xl">
        <div className="flex justify-between py-5 lg:py-0">
          {/* <!-- Left Section --> */}
          <div className="flex items-center gap-2 lg:gap-6">
            <NavbarLogo />
            <NavbarMenu />
          </div>
          {/* <!-- END Left Section --> */}

          {/* <!-- Right Section --> */}
          <div className="flex items-center gap-2">            
            {/* <DarkModeToggle /> */}
            <UserDropdown />

            {/* <!-- Toggle Mobile Navigation --> */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold leading-5 text-neutral-800 hover:border-neutral-300 hover:text-neutral-950 active:border-neutral-200"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hi-solid hi-menu inline-block h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {/* <!-- END Toggle Mobile Navigation --> */}
          </div>
          {/* <!-- END Right Section --> */}
        </div>
        {/* <!-- Mobile Navigation --> */}
        {mobileNavOpen && <MobileNavbar />}
        {/* <!-- END Mobile Navigation --> */}
      </div>
    </header>
  );
}
