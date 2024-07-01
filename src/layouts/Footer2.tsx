import { CiCircleMore } from 'react-icons/ci';
import { GoBellFill } from 'react-icons/go';
import { PiArrowCircleUpRightFill } from 'react-icons/pi';
import { TbLayoutGridAdd } from 'react-icons/tb';

export const Footer2 = () => {
  return (
    <div className="w-full flex items-center justify-between px-2 md:px-4 bg-black py-4">
      <div className="flex flex-col items-center">
        <CiCircleMore />
        <p>More</p>
      </div>
      <div className="flex flex-col items-center">
        <GoBellFill />
        <p>ALert</p>
      </div>
      <div className="flex flex-col items-center">
        <PiArrowCircleUpRightFill />
        <p>Margin</p>
      </div>
      <div className="flex flex-col items-center">
        <TbLayoutGridAdd />
        <p>Grid</p>
      </div>
      <div className="">
        <button className="bg-green-600 px-6 py-2 rounded-md font-bold">
          Buy
        </button>
      </div>
      <div>
        <button className="bg-red-500 px-6 py-2 rounded-md font-bold">
          Sell
        </button>
      </div>
    </div>
  );
};
