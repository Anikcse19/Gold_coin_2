import { CgOptions } from 'react-icons/cg';
import { FaCaretDown } from 'react-icons/fa';
import AreaChart from '../Charts/AreaChart';
import BarChart from '../Charts/BarChart';
// import BarChart from '../Charts/BarChart';

const Price = () => {
  return (
    <div>
      {/* price details start */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="text-green-600 font-bold text-xl">$19,871.12</div>
          <div className="flex flex-col gap-1">
            <span className="flex items-center gap-3">
              <p>=$121221.21</p>
              <p className="text-red-600">-0.12%</p>
            </span>
            <span className="bg-[#4E4C24] text-[#B29403] rounded-md px-2 py-1 text-center">
              {'POW | Vol>'}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex flex-col">
            <p className="text-gray-500 text-sm">24h High</p>
            <p>$1221.11</p>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500">24h Vol (BTC)</p>
            <p>$6969.11</p>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500">24h Low</p>
            <p>$11398.11</p>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-500">24h Vol(USD)</p>
            <p>$999.11</p>
          </div>
        </div>
      </div>
      {/* price details stop */}

      {/* time row start */}
      <div className="flex items-center justify-between mt-8 roboto-regular border-b border-gray-600 pb-2">
        <div className="flex items-center gap-2 text-gray-600">
          <p className="text-white font-bold">Time</p>
          <p>15m</p>
          <p>1h</p>
          <p>4h</p>
          <p>1D</p>
          <p>1Y</p>
          <span className="flex items-center gap-1">
            <p>More</p>
            <FaCaretDown />
          </span>
          <p>Depth</p>
        </div>
        <div className="text-gray-600 font-bold">
          <CgOptions />
        </div>
      </div>
      {/* time row end */}

      {/* area chart start */}
      <div>
        <AreaChart />
      </div>

      {/* bar chart start */}
      <div>
        <BarChart />
      </div>
    </div>
  );
};

export default Price;
