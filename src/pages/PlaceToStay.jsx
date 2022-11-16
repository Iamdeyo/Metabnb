import { nfts } from '../compontents/data';
import { Sliders } from 'react-feather';
import { useEffect, useState } from 'react';
import NFTCards from '../compontents/NFTCards';

function PlaceToStay() {
  const [nft, setNft] = useState(null);
  useEffect(() => {
    setNft(nfts);
  }, []);

  return (
    <div className="container mx-auto px-4 pt-16 lg:pt-32  sm:px-0">
      <div className="flex items-center gap-[65px]">
        <ul className="text-xl leading-[125%] flex gap-12 overflow-hidden overflow-x-scroll scroll-smooth snap-mandatory snap-x">
          <li className="cursor-pointer snap-start min-w-fit">Resturant</li>
          <li className="cursor-pointer snap-start min-w-fit">Cottage</li>
          <li className="cursor-pointer snap-start min-w-fit">Castle</li>
          <li className="cursor-pointer snap-start min-w-fit">fantast city</li>
          <li className="cursor-pointer snap-start min-w-fit">beach</li>
          <li className="cursor-pointer snap-start min-w-fit">Carbins</li>
          <li className="cursor-pointer snap-start min-w-fit">Off-grid</li>
          <li className="cursor-pointer snap-start min-w-fit">Farm</li>
        </ul>
        <div className="flex gap-[40px] text-[#333333] items-center py-[11px] pr-[16px] pl-[13px] rounded-lg broder-[#B4B4B4] border transition-all ease-linear duration-300 hover:border-[#000000]">
          <p className=" leading-[120%] hidden cursor-pointer lg:block">
            Location
          </p>
          <Sliders className="rotate-90" />
        </div>
      </div>
      <div className="mt-[75px] pb-[53px]">
        <div className="flex justify-center flex-wrap gap-6">
          {nft && nft.map((nf) => <NFTCards nf={nf} key={nf.id} />)}
        </div>
      </div>
    </div>
  );
}

export default PlaceToStay;
