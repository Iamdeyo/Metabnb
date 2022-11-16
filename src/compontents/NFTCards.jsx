import { Star } from 'react-feather';

function NFTCards({ nf }) {
  return (
    <div
      key={nf.id}
      className="p-4 flex flex-col cursor-pointer gap-4 w-full h-auto rounded-[15px] transition-all duration-300 ease-linear border border-[#D7D7D7] md:w-fit hover:shadow-lg"
    >
      <img
        src={nf.photo}
        alt="nft"
        className="w-full h-auto md:max-w-[260px]"
      />

      <div className="text-xs leading-[110%]">
        <div className="flex justify-between">
          <p>Desert King</p>
          <p className="font-bold">1MBT per night</p>
        </div>
        <div className="flex justify-between mt-[10px]">
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>
        <div className="mt-[9px] gap-2 starIcon flex">
          <Star size={12} className="starIcon" />
          <Star size={12} className="starIcon" />
          <Star size={12} className="starIcon" />
          <Star size={12} className="starIcon" />
          <Star size={12} className="starIcon" />
        </div>
      </div>
    </div>
  );
}

export default NFTCards;
