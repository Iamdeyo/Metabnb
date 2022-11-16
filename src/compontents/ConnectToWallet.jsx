import { X, ChevronRight } from 'react-feather';
import metamusk from '../assests/img/image66.png';
import walletConnect from '../assests/img/image69.png';

function ConnectTowallet({ handleWallet }) {
  return (
    <div
      className="bg-[#4040404c] h-screen w-screen top-0 left-0 flex items-center justify-center fixed overflow-scroll"
      onClick={handleWallet}
    >
      <div
        className="bg-white w-full max-w-[600px] rounded-2xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="py-6 px-8 flex justify-between">
          <p className="font-bold text-2xl leading-none text-[#333333] ">
            Connect Wallet
          </p>
          <div onClick={handleWallet} className="cursor-pointer">
            <X />
          </div>
        </div>
        <div className="border-b border-[#CFD8DC]"></div>
        <div className="py-6 px-8 flex gap-4 flex-col ">
          <p className="text-[#333]">Choose your preferred wallet:</p>
          <div className="flex gap-4 items-center hover:bg-[#F8F9FA] cursor-pointer py-3 px-5 border border-[#CFD8DC] rounded-xl font-sora">
            <img src={metamusk} alt="metamask" />
            <p className="text-black font-semibold text-lg leading-[23px]">
              Metamask
            </p>
            <ChevronRight className="ml-auto" />
          </div>
          <div className="flex gap-4 items-center hover:bg-[#F8F9FA] cursor-pointer py-3 px-5 border border-[#CFD8DC] rounded-xl font-sora">
            <img src={walletConnect} alt="WalletConnect" />
            <p className="text-black font-semibold text-lg leading-[23px]">
              WalletConnect
            </p>
            <ChevronRight className="ml-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectTowallet;
