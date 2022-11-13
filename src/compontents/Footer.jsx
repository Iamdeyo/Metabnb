import { ReactComponent as Fb } from '../assests/icon/facebook.svg';
import { ReactComponent as Ig } from '../assests/icon/instagram.svg';
import { ReactComponent as Tw } from '../assests/icon/twitter.svg';
import { ReactComponent as Logo } from '../assests/icon/footerIcon.svg';
function Footer() {
  return (
    <footer>
      <div className="bg-[#1D1D1E]">
        <div className="container p-4 pt-10 pb-8 mx-auto text-[#F1F3F9]">
          <div className="flex flex-wrap justify-between ">
            <div className="w-1/2 mt-8 lg:w-1/4 md:w-1/3 md:mt-0">
              <p className="text-white font-bold text-lg">Community</p>

              <ul className="flex flex-col items-start gap-2 mt-5">
                <li className=" text-sm border-b border-b-transparent leading-[250%] transition-all duration-300 ease-linear hover:border-b-white">
                  NFT
                </li>
                <li className=" text-sm border-b border-b-transparent leading-[250%] transition-all duration-300 ease-linear hover:border-b-white">
                  Tokens
                </li>
                <li className=" text-sm border-b border-b-transparent leading-[250%] transition-all duration-300 ease-linear hover:border-b-white">
                  Landlords
                </li>
                <li className=" text-sm border-b border-b-transparent leading-[250%] transition-all duration-300 ease-linear hover:border-b-white">
                  Discord
                </li>
              </ul>
            </div>
            <div className="w-1/2 mt-8 lg:w-1/4 md:w-1/3 md:mt-0">
              <p className="text-white font-bold text-lg">Places</p>

              <ul className="flex flex-col items-start gap-2 mt-5">
                <li className=" text-sm border-b border-b-transparent leading-[250%] transition-all duration-300 ease-linear hover:border-b-white">
                  Castle
                </li>
                <li className=" text-sm border-b border-b-transparent leading-[250%] transition-all duration-300 ease-linear hover:border-b-white">
                  Farms
                </li>
                <li className=" text-sm border-b border-b-transparent leading-[250%] transition-all duration-300 ease-linear hover:border-b-white">
                  Beach
                </li>
                <li className=" text-sm border-b border-b-transparent leading-[250%] transition-all duration-300 ease-linear hover:border-b-white">
                  Learn more
                </li>
              </ul>
            </div>
            <div className="w-1/2 mt-8 lg:w-1/4 md:w-1/3 md:mt-0">
              <p className="text-white font-bold text-lg">About us</p>

              <ul className="flex flex-col items-start gap-2 mt-5">
                <li className=" text-sm border-b border-b-transparent leading-[250%] transition-all duration-300 ease-linear hover:border-b-white">
                  Road map
                </li>
                <li className=" text-sm border-b border-b-transparent leading-[250%] transition-all duration-300 ease-linear hover:border-b-white">
                  Creators
                </li>
                <li className=" text-sm border-b border-b-transparent leading-[250%] transition-all duration-300 ease-linear hover:border-b-white">
                  Career
                </li>
                <li className=" text-sm border-b border-b-transparent leading-[250%] transition-all duration-300 ease-linear hover:border-b-white">
                  Contact us
                </li>
              </ul>
            </div>
            <div className="mt-12 flex w-full gap-6 flex-col-reverse lg:w-1/4  lg:flex-col lg:justify-between lg:order-first lg:mt-0">
              <div id="logo" className="w-[150px] md:w-[230px]">
                <Logo />
              </div>
              <div className="flex  gap-4 md:gap-8">
                <a href="https://facebook.com">
                  <Fb className="h-10 w-10 transition-all duration-300 ease-linear text-[#F7F7F7] hover:text-[#a02279] md:w-auto md:h-auto" />
                </a>
                <a href="https://facebook.com">
                  <Ig className="h-10 w-10 transition-all duration-300 ease-linear text-[#F7F7F7] hover:text-[#a02279] md:w-auto md:h-auto" />
                </a>
                <a href="https://facebook.com">
                  <Tw className="h-10 w-10 transition-all duration-300 ease-linear text-[#F7F7F7] hover:text-[#a02279] md:w-auto md:h-auto" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-7 md:mt-14">
            <p> &copy; 2022 Metabnb</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
