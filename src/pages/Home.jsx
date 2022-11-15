import nft3 from '../assests/img/image3.png';
import nft4 from '../assests/img/image4.png';
import nft5 from '../assests/img/image5.png';
import nft6 from '../assests/img/image6.png';
import nft7 from '../assests/img/image7.png';
import nft8 from '../assests/img/image8.png';
import nft9 from '../assests/img/image9.png';
import { ReactComponent as LogoOne } from '../assests/icon/logo1.svg';
import { ReactComponent as LogoTwo } from '../assests/icon/logo2.svg';
import { ReactComponent as LogoThree } from '../assests/icon/logo3.svg';
import NFTCards from '../compontents/NFTCards';
import { useEffect, useState } from 'react';
import { nfts } from '../compontents/data';
function Home() {
  const [nft, setNft] = useState(null);
  useEffect(() => {
    // nfts.filter()
    setNft(nfts);
  }, []);
  return (
    <div>
      <div className="container mx-auto px-4 pt-16 pb-16 lg:pt-32">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-0">
          <div className="flex flex-col text-center gap-7 md:gap-12 lg:text-start lg:w-1/2">
            <p className="text-[2.5em]  sm:text-[3em]  md:text-[3.5em] leading-[140%] tracking-tight">
              Rent a <span className="text-color">Place</span> away from{' '}
              <span className="text-color">Home</span> in the{' '}
              <span className="text-color">Metaverse</span>
            </p>
            <p className="text-[1.5em] leading-[146%]">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <div className="flex h-[54px]">
              <input
                type="text"
                placeholder="Search for location"
                className="w-2/3 rounded-lg bg-[#f7f7f719] rounded-r-none block h-full pl-[15px] border outline-none border-r-0 border-[#a3a3a3] focus:border-[#a02279] placeholder:text-[background: #B8B8B8]"
              />
              <span className="h-full text-white rounded-lg rounded-l-none inline-block w-1/3 p-[17px] border border-[#a02279] text-center bg-primary hover:opacity-90">
                Search
              </span>
            </div>
          </div>
          <div className="flex gap-2 w-full lg:w-1/2 justify-center  lg:justify-end">
            <div className="flex gap-2 mt-[10%] flex-col h-full">
              <img
                src={nft4}
                alt="nft"
                className="max-w-[234px] rounded-lg max-h-[176px] w-full h-full"
              />
              <img
                src={nft6}
                alt="nft"
                className="max-w-[234px] rounded-lg max-h-[176px] w-full h-full"
              />
            </div>
            <div className="flex flex-col gap-2 -mt-[5%] h-full">
              <img
                src={nft3}
                alt="nft"
                className="max-w-[234px] rounded-lg max-h-[176px] w-full h-full"
              />
              <img
                src={nft5}
                alt="nft"
                className="max-w-[234px] rounded-lg max-h-[176px] w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary">
        <div className="flex container mx-auto flex-col items-center gap-6 p-[10px]  md:justify-around md:flex-row">
          <LogoThree className="w-[173px] lg:w-[223px]" />
          <LogoTwo className="w-[165px] lg:w-[215px]" />
          <LogoOne className="w-[150px] lg:w-[200px]" />
        </div>
      </div>
      <div className="container mx-auto pt-[39px] pb-[53px] px-4 sm:px-0">
        <p className="text-4xl text-black font-bold text-center md:text-5xl md:leading-snug">
          Inspiration for your next adventure
        </p>

        <div className="flex p-4 justify-center mt-[43px] flex-wrap gap-6">
          {nft && nft.map((nf) => <NFTCards nf={nf} />)}
        </div>
      </div>
      <div className="bg-primary">
        <div className="container py-[64px] px-4 mx-auto flex flex-col gap-16 lg:gap-6 lg:py-[100px] lg:flex-row">
          <div className="flex flex-col justify-center lg:w-1/2">
            <p className="font-bold text-white-lin text-4xl md:text-5xl md:leading-snug">
              Metabnb NFTs
            </p>
            <p className="text-white-lin mt-6 text-lg leading-[194%]">
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <div className="bg-sec w-fit px-9 py-[14px] flex items-center justify-center transition-all duration-300 ease-linear rounded-lg mt-14 hover:opacity-90 ">
              <span className="leading-[120%] text-base text-color">
                Learn more
              </span>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-12">
              <img
                src={nft7}
                alt="nft"
                className="col-start-1 row-start-2 row-end-5 col-end-7 z-[2]"
              />
              <img
                src={nft9}
                alt="nft"
                className="row-start-1 row-end-4 col-start-5 col-end-11 z-[1]"
              />
              <img
                src={nft8}
                alt="nft"
                className="row-start-3 row-end-6 col-start-6 col-end-12 z-[3]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
