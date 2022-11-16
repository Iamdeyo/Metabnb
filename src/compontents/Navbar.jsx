import React, { useState } from 'react';
import { ReactComponent as Logo } from '../assests/icon/logo.svg';
import { X, Menu } from 'react-feather';
import { Link } from 'react-router-dom';
import ConnectTowallet from './ConnectToWallet';
function Navbar() {
  const [active, setActive] = useState(false);
  const [wallet, setWallet] = useState(false);

  const handleMobNav = () => {
    setActive((prev) => (prev = !prev));
  };
  const handleWallet = () => {
    setWallet((prev) => (prev = !prev));
    const body = document.querySelector('body');
    body.classList.toggle('wallet-mode');
  };

  return (
    <nav>
      <div className="pt-[43px] px-4 container sm:px-0 mx-auto">
        <div className="flex items-center justify-between">
          <div id="logo" className="w-[150px] md:w-[230px]">
            <Logo />
          </div>

          <ul className="items-center gap-12 hidden xl:flex">
            <li>
              <Link
                to={'/'}
                className="text-tblack text-xl cursor-pointer transition-all duration-300 ease-linear border-b-transparent border-b-2 p-1 hover:border-b-[#a02279]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={'/placetostay'}
                className="text-tblack text-xl cursor-pointer transition-all duration-300 ease-linear border-b-transparent border-b-2 p-1 hover:border-b-[#a02279]"
              >
                Place to stay
              </Link>
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
          <button
            className="text-base leading-5 text-white px-6 py-[14px] bg-primary rounded-xl hover:opacity-90 transition-all duration-300 ease-linear hidden xl:block"
            onClick={handleWallet}
          >
            Connect wallet
          </button>

          <div className="xl:hidden">
            <Menu onClick={handleMobNav} size={40} />
          </div>
          {/* Mobile Nav */}
          {active && (
            <div
              id="mob-nav"
              className="fixed left-0 top-0 bg-cover w-screen h-screen xl:hidden"
              onClick={handleMobNav}
            >
              <div
                className="max-w-[450px] p-4 overflow-hidden flex flex-col gap-8 bg-white h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <X onClick={handleMobNav} size={40} />
                </div>
                <ul className="flex flex-col items-center gap-6">
                  <li>
                    <Link
                      to={'/'}
                      className="text-tblack text-xl cursor-pointer transition-all duration-300 ease-linear border-b-transparent border-b-2 p-1 hover:border-b-[#a02279]"
                      onClick={handleMobNav}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/placetostay'}
                      className="text-tblack text-xl cursor-pointer transition-all duration-300 ease-linear border-b-transparent border-b-2 p-1 hover:border-b-[#a02279]"
                      onClick={handleMobNav}
                    >
                      Place to stay
                    </Link>
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
                <button
                  className="text-base text-white px-6 py-4 bg-primary rounded-xl w-full hover:opacity-90 transition-all duration-300 ease-linear"
                  onClick={() => {
                    handleMobNav();
                    handleWallet();
                  }}
                >
                  Connect wallet
                </button>
              </div>
            </div>
          )}
        </div>
        {wallet && <ConnectTowallet handleWallet={handleWallet} />}
      </div>
    </nav>
  );
}

export default Navbar;
