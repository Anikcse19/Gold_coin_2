import bnb_logo from '../../../public/images/bnb_logo.png';
const Info = () => {
  const coinData = [
    {
      id: 1,
      title: 'Rank',
      value: 'NO.4',
    },
    {
      id: 2,
      title: 'MarketCap',
      value: '$8.99B',
    },
    {
      id: 3,
      title: 'Fully Diluated Market Cap',
      value: '$8.21B',
    },
    {
      id: 4,
      title: 'Market Dominance',
      value: '1.23%',
    },
    {
      id: 5,
      title: 'Circullation Supply',
      value: '8.219B BNB',
    },
    {
      id: 6,
      title: 'Total Supply',
      value: '2.137B BNB',
    },
    {
      id: 7,
      title: 'Issue Date',
      value: '2012-12-09',
    },
    {
      id: 8,
      title: 'Issue Price',
      value: '$0.3M',
    },
  ];
  return (
    <div className="mt-5">
      {/* COIN INTRO */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="w-[30px] h-[30px]">
            <img src={bnb_logo} alt="" />
          </span>
          <p>BNB</p>
        </div>

        <div>
          <span className="border border-gray-600 px-5 py-1 rounded-md">
            BINANCE
          </span>
        </div>
      </div>

      {/* note */}
      <div className="mt-10 text-sm">
        <p className="inline text-gray-500">
          * The data is presented is for informational purpose only.It is
          provided by CoinMarketCap and shown on "as is" basis, without
          representation or waranty of any kind.
        </p>{' '}
        <p className="text-yellow-500 inline">Risk Warning.</p>
      </div>

      {/* list of coin */}

      <div className="flex flex-col gap-5 mt-10 text-sm">
        {coinData?.map((c) => (
          <div className="flex justify-between items-center">
            <p className="text-gray-500 underline pb-1">{c.title}</p>
            <p>{c.value}</p>
          </div>
        ))}
        <div className="flex justify-between items-center">
          <p className="text-gray-500 underline pb-1">All Time High</p>
          <span className="flex flex-col items-center gap-2">
            <p className="justify-end">$640063.3</p>
            <p className="self-end">2012-2-2</p>
          </span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <p className="text-gray-500 underline pb-1">All Time Ligh</p>
          <span className="flex flex-col items-center gap-2">
            <p className="justify-end">$6182979313063.3</p>
            <p className="self-end">2012-2-2</p>
          </span>
        </div>
      </div>

      {/* links */}
      <div className="mt-8">
        <p>Links</p>

        <div className="grid grid-cols-2 gap-3 mt-5">
          <div className="border border-gray-700 px-5 py-1 rounded-md text-center">
            Official Website
          </div>
          <div className="border border-gray-700 px-5 py-1 rounded-md text-center">
            Block Explorer
          </div>
          <div className="border border-gray-700 px-5 py-1 rounded-md text-center">
            Feedback Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
