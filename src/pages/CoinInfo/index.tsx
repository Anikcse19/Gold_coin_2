import { useState } from 'react';
import { FaArrowLeftLong, FaStar } from 'react-icons/fa6';
import { GiShare } from 'react-icons/gi';
import { IoCaretDownOutline } from 'react-icons/io5';
import Info from '../../components/CoinInfo/Info';
import Price from '../../components/CoinInfo/Price';
import Square from '../../components/CoinInfo/Square';
import TraddingData from '../../components/CoinInfo/TraddingData';
import InfoLayout from '../../layouts/InfoLayout';

const componentMap: { [key: string]: React.FC } = {
  Price,
  TraddingData,
  Info,
  Square,
};

const CoinInfo = () => {
  const [currentDynamicComp, setCurrentDynamicComp] = useState('Price');

  const CurrentComponent = componentMap[currentDynamicComp];
  return (
    <InfoLayout>
      <div className="p-3 min-h-screen">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="self-center mt-1">
              <FaArrowLeftLong />
            </div>
            <div>BTC</div>
            <div>
              <IoCaretDownOutline />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div>
              <FaStar className="text-yellow-400" />
            </div>
            <div>
              <GiShare />
            </div>
          </div>
        </div>

        <nav className="border-b border-gray-600 text-gray-500 mb-2">
          <ul className="flex gap-x-2 py-2">
            <li
              className={`${currentDynamicComp === 'Price' && 'border-b-2 border-yellow-300 pb-2 text-white '} cursor-pointer`}
              onClick={() => {
                setCurrentDynamicComp('Price');
              }}
            >
              Price
            </li>
            <li
              className={`${currentDynamicComp === 'Info' && 'border-b-2 border-yellow-300 pb-2 text-white'}  cursor-pointer`}
              onClick={() => {
                setCurrentDynamicComp('Info');
              }}
            >
              Info
            </li>
            <li
              className={`${currentDynamicComp === 'TraddingData' && 'border-b-2 border-yellow-300 pb-2 text-white'}  cursor-pointer`}
              onClick={() => {
                setCurrentDynamicComp('TraddingData');
              }}
            >
              Tradding Data
            </li>
            <li
              className={`${currentDynamicComp === 'Square' && 'border-b-2 border-yellow-300 pb-2 text-white '}  cursor-pointer`}
              onClick={() => {
                setCurrentDynamicComp('Square');
              }}
            >
              Square
            </li>
          </ul>
        </nav>

        <div>
          <CurrentComponent />
        </div>
      </div>
    </InfoLayout>
  );
};

export default CoinInfo;
