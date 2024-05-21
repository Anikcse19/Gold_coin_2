const Home = () => {
  const datas = [
    {
      id: 1,
      name: 'GOLD',
      last_price: '500',
      charge: '+1.24%',
    },
    {
      id: 2,
      name: 'BTC',
      last_price: '600',
      charge: '-1.24%',
    },
    {
      id: 3,
      name: 'BNB',
      last_price: '100',
      charge: '+2.24%',
    },
    {
      id: 4,
      name: 'ETH',
      last_price: '800',
      charge: '-3.24%',
    },
    {
      id: 5,
      name: 'USDT',
      last_price: '800',
      charge: '+9.24%',
    },
  ];
  return (
    <div className="min-h-screen p-4 roboto-regular">
      {/* total balance */}
      <div className="flex items-center justify-between mt-10 pb-3 border-b-2 border-stone-700">
        <div className="flex flex-col gap-3 justify-center font-bold">
          <span>Total Balance (USD)</span>
          <span>$ 100.0</span>
        </div>
        <div>
          <span className="bg-[#FFD200] px-8 py-3 rounded-md text-black">
            Deposite
          </span>
        </div>
      </div>

      {/* show coin datas */}
      <div className="mt-10">
        <div className="flex items-center text-gray-600 font-bold mb-3">
          <div className="w-[40%]">
            <p>Name</p>
          </div>
          <div className="w-[60%] flex items-center justify-between">
            <p className="w-[50%]  text-center">Last Price</p>
            <p className="w-[50%] text-center">24h chg %</p>
          </div>
        </div>
        {datas.map((data) => (
          <div key={data.id} className="flex items-center mb-4 font-bold">
            <div className="w-[40%]">
              <p>{data.name}</p>
            </div>
            <div className="w-[60%] flex items-center justify-center">
              <p className="w-[50%]  text-center">{data.last_price}</p>
              <p className="w-[50%] bg-green-600 px-3 py-1 text-center">
                {data.charge}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
