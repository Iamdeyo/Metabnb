import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assests/icon/logo.svg';
import { ReactComponent as HamIcon } from '../assests/icon/icon-hamburger.svg';
import { ReactComponent as CloseIcon } from '../assests/icon/icon-close.svg';
function Navbar() {
  const [active, setActive] = useState(false);

  const handleMobNav = () => {
    setActive((prev) => (prev = !prev));
  };
  return (
    <nav>
      <div className="p-10 px-4">
        <div className="flex items-center justify-between">
          <div id="logo" className="w-[150px] md:w-[230px]">
            <Logo />
          </div>

          <ul className="items-center gap-12 hidden lg:flex">
            <li>
              <a
                href="#"
                className="text-tblack text-xl cursor-pointer transition-all duration-300 ease-linear border-b-transparent border-b-2 p-1 hover:border-b-[#a02279]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-tblack text-xl cursor-pointer transition-all duration-300 ease-linear border-b-transparent border-b-2 p-1 hover:border-b-[#a02279]"
              >
                Place to stay
              </a>
            </li>
            <li>
              <span className="text-tblack text-xl cursor-pointer transition-all duration-300 ease-linear border-b-transparent border-b-2 p-1 hover:border-b-[#a02279]">
                NFTs
              </span>
            </li>
            <li>
              <span className="text-tblack text-xl cursor-pointer transition-all duration-300 ease-linear border-b-transparent border-b-2 p-1 hover:border-b-[#a02279]">
                Community
              </span>
            </li>
          </ul>
          <button className="text-base leading-5 text-white px-6 py-[14px] bg-primary rounded-xl hover:opacity-90 transition-all duration-300 ease-linear hidden lg:block">
            Connect wallet
          </button>

          <div className="lg:hidden">
            <HamIcon onClick={handleMobNav} />
          </div>
          {/* Mobile Nav */}
          <div
            id="mob-nav"
            className="absolute left-0 top-0 bg-cover w-screen h-screen hidden lg:hidden"
          >
            <div className="max-w-[450px] p-4 overflow-hidden flex flex-col gap-8 bg-white h-full">
              <div>
                <CloseIcon onClick={handleMobNav} />
              </div>
              <ul className="flex flex-col items-center gap-6">
                <li>
                  <a
                    href="#"
                    className="text-tblack text-xl cursor-pointer transition-all duration-300 ease-linear border-b-transparent border-b-2 p-1 hover:border-b-[#a02279]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-tblack text-xl cursor-pointer transition-all duration-300 ease-linear border-b-transparent border-b-2 p-1 hover:border-b-[#a02279]"
                  >
                    Place to stay
                  </a>
                </li>
                <li>
                  <span className="text-tblack text-xl cursor-pointer transition-all duration-300 ease-linear border-b-transparent border-b-2 p-1 hover:border-b-[#a02279]">
                    NFTs
                  </span>
                </li>
                <li>
                  <span className="text-tblack text-xl cursor-pointer transition-all duration-300 ease-linear border-b-transparent border-b-2 p-1 hover:border-b-[#a02279]">
                    Community
                  </span>
                </li>
              </ul>
              <button className="text-base text-white px-6 py-4 bg-primary rounded-xl w-full hover:opacity-90 transition-all duration-300 ease-linear">
                Connect wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
