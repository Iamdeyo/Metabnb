import { ReactComponent as Fb } from '../assests/icon/facebook.svg';
import { ReactComponent as Ig } from '../assests/icon/instagram.svg';
import { ReactComponent as Tw } from '../assests/icon/twitter.svg';
import { ReactComponent as Logo } from '../assests/icon/footerIcon.svg';
function Footer() {
  return (
    <footer>
      <div className="bg-[#1D1D1E]">
        <div className="container p-4 sm:px-0 pt-10 pb-8 mx-auto text-[#F1F3F9]">
          <div className="flex flex-wrap justify-between ">
            <div className="w-1/2 mt-8 xxl:w-1/4 xl:w-1/3 xl:mt-0">
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
            <div className="w-1/2 mt-8 xxl:w-1/4 xl:w-1/3 xl:mt-0">
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
            <div className="w-1/2 mt-8 xxl:w-1/4 xl:w-1/3 xl:mt-0">
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
            <div className="mt-12 flex w-full gap-6 flex-col-reverse xl:w-1/4  xl:flex-col xl:justify-between xl:order-first xl:mt-0">
              <div id="logo" className="w-[150px] md:w-[230px]">
                <Logo />
              </div>
              <div className="flex  gap-4 xl:gap-8">
                <a href="https://facebook.com">
                  <Fb className="h-10 w-10 transition-all duration-300 ease-linear text-[#F7F7F7] hover:text-[#a02279] lg:w-auto lg:h-auto" />
                </a>
                <a href="https://facebook.com">
                  <Ig className="h-10 w-10 transition-all duration-300 ease-linear text-[#F7F7F7] hover:text-[#a02279] lg:w-auto lg:h-auto" />
                </a>
                <a href="https://facebook.com">
                  <Tw className="h-10 w-10 transition-all duration-300 ease-linear text-[#F7F7F7] hover:text-[#a02279] lg:w-auto lg:h-auto" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-7 lg:mt-14">
            <p> &copy; 2022 Metabnb</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
