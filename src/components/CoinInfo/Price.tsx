import { CgOptions } from 'react-icons/cg';
import { FaCaretDown } from 'react-icons/fa';
import AreaChart from '../Charts/AreaChart';
import BarChart from '../Charts/BarChart';
import { IoMdArrowDropdown } from 'react-icons/io';

// import BarChart from '../Charts/BarChart';

const Price = () => {
  const dateWisePriceUpDown = [
    {
      time: 'Today',
      value: -1.11,
    },
    {
      time: '7 days',
      value: 3.11,
    },
    {
      time: '30 days',
      value: 24.11,
    },
    {
      time: '90 days',
      value: 33.51,
    },
    {
      time: '180 days',
      value: 85.34,
    },
    {
      time: '1 year',
      value: 155.43,
    },
  ];

  const data2 = [
    {
      bid: 119.08,
      ask: {
        up: 11.11,
        down: 3.33,
      },
      point: 119.3,
    },
    {
      bid: 119.08,
      ask: {
        up: 11.11,
        down: 3.33,
      },
      point: 119.3,
    },
    {
      bid: 119.08,
      ask: {
        up: 11.11,
        down: 3.33,
      },
      point: 119.3,
    },
    {
      bid: 119.08,
      ask: {
        up: 11.11,
        down: 3.33,
      },
      point: 119.3,
    },
    {
      bid: 119.08,
      ask: {
        up: 11.11,
        down: 3.33,
      },
      point: 119.3,
    },
    {
      bid: 119.08,
      ask: {
        up: 11.11,
        down: 3.33,
      },
      point: 119.3,
    },
    {
      bid: 119.08,
      ask: {
        up: 11.11,
        down: 3.33,
      },
      point: 119.3,
    },
    {
      bid: 119.08,
      ask: {
        up: 11.11,
        down: 3.33,
      },
      point: 119.3,
    },
    {
      bid: 119.08,
      ask: {
        up: 11.11,
        down: 3.33,
      },
      point: 119.3,
    },
  ];
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

      {/* unknown one */}
      <div className="">
        <div className="w-full flex items-center justify-between">
          {['MA', 'EMA', 'BOLL', 'SAR', 'AVL', 'VOL', 'MACD', 'RDI'].map(
            (x, i) => (
              <span key={i}>{x}</span>
            ),
          )}
        </div>
      </div>

      {/* unkonwn two */}
      <div className="mt-5 border-b border-slate-600 pb-4">
        <div className="flex items-center justify-between">
          {dateWisePriceUpDown.map((e, i) => (
            <div key={i} className="flex flex-col justify-center gap-0.5">
              <span className="text-xs text-gray-500 font-bold">{e.time}</span>
              <span
                className={`text-xs ${e.value > 0 ? 'text-green-500' : 'text-red-600'} `}
              >
                {e.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-10 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="bg-gray-600 font-bold px-2 py-1 rounded-md">
            Order Book
          </span>
          <span>Trade</span>
        </div>

        <div className="w-full flex items-center gap-2">
          <div className="w-[50%] flex items-center gap-1">
            <p className="text-sm text-green-400">50.34%</p>
            <span className="h-2 w-full bg-green-400 rounded-sm" />
          </div>
          <div className="w-[50%] flex items-center gap-1">
            <p className="text-sm text-red-600">49.64%</p>
            <span className="h-2 w-full bg-red-600 rounded-sm" />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-stone-400 font-bold">
            <span>Bid</span>
            <span>Ask</span>
            <span className="bg-gray-500 text-gray-200 px-2 rounded-md flex items-center">
              <p>0.1</p>
              <IoMdArrowDropdown className="text-xl" />
            </span>
          </div>

          <div>{}</div>
        </div>
      </div>
    </div>
  );
};

export default Price;
