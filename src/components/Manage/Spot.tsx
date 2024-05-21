const Spot = () => {
  const balanceData = [
    {
      id: 1,
      name: 'GOLD',
      coin_type: 'Gold Coin',
      total_price: '759.788987',
      average_cost: '$1.03',
      todays_pnl: '+$50.65(1.25%)',
    },
    {
      id: 2,
      name: 'BTC',
      coin_type: 'BitCoin',
      total_price: '759.788987',
      average_cost: '$1.03',
      todays_pnl: '+$50.65(1.25%)',
    },
    {
      id: 3,
      name: 'BNB',
      coin_type: 'BNB',
      total_price: '759.788987',
      average_cost: '$1.03',
      todays_pnl: '+$50.65(1.25%)',
    },
    {
      id: 4,
      name: 'ETH',
      coin_type: 'Ethereum',
      total_price: '759.788987',
      average_cost: '$1.03',
      todays_pnl: '-$10.65(0.25%)',
    },
    {
      id: 5,
      name: 'USDT',
      coin_type: 'Tether',
      total_price: '759.788987',
      average_cost: '$1.03',
      todays_pnl: '+$50.65(1.25%)',
    },
    {
      id: 6,
      name: 'DOGE',
      coin_type: 'Dogecoin',
      total_price: '759.788987',
      average_cost: '$1.03',
      todays_pnl: '+$50.65(1.25%)',
    },
  ];

  return (
    <div>
      <h2 className="font-bold">Total Balance</h2>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-[32px] font-bold">$2,230.75</h2>
          <p>Today's Profit/Loss</p>
          <p>+$50.65(1.25%)</p>
        </div>
        <div className="flex flex-col gap-2.5 font-bold">
          <button className="bg-[#FFD200] px-8 py-2 rounded-md text-black">
            Deposite
          </button>
          <button className="bg-[#07CCA8] px-8 py-2 rounded-md text-black">
            Withdraw
          </button>
          <button className="bg-[#DC3545] px-8 py-2 rounded-md text-black">
            Transfer
          </button>
        </div>
      </div>
      <div className="h-[1px] w-full bg-[#6C6C6C] my-4"></div>

      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="text-[22px] font-bold">Balances</div>
          <div className="flex gap-[44px]">
            <div>
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.03676 1.94677C1.53154 3.2051 0.60639 4.97451 0.431916 6.92866C0.257335 8.88282 0.854417 10.7881 2.11274 12.2933C3.79106 14.3006 6.4362 15.2681 9.01617 14.8179C9.83077 14.6758 10.6146 14.3946 11.3339 13.9918L15.5726 19.0617L17.6596 17.3168L13.4217 12.2478C14.3569 11.1154 14.9307 9.72983 15.0642 8.23529C15.2387 6.28115 14.6416 4.37601 13.3833 2.87068C11.7051 0.86332 9.05981 -0.1041 6.47995 0.346014C5.21628 0.566488 4.02563 1.11997 3.03676 1.94677ZM11.2962 4.6156C12.0885 5.56331 12.4644 6.76297 12.3545 7.99336C12.2447 9.22375 11.6622 10.3378 10.7144 11.1301C10.0915 11.6509 9.3425 11.9994 8.54858 12.138C6.92312 12.4216 5.25679 11.8125 4.19993 10.5484C3.40759 9.60064 3.03172 8.40109 3.14168 7.17057C3.25155 5.94018 3.83407 4.82616 4.78177 4.03372C5.40462 3.51302 6.15361 3.16451 6.94753 3.026C8.5731 2.74238 10.2393 3.3515 11.2962 4.6156Z"
                  fill="#727171"
                />
              </svg>
            </div>
            <div>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5001 8.75C13.1283 8.7499 13.7396 8.5471 14.2433 8.17176C14.747 7.79643 15.1162 7.26858 15.2959 6.66667H17.5001C17.7211 6.66667 17.9331 6.57887 18.0893 6.42259C18.2456 6.26631 18.3334 6.05435 18.3334 5.83334C18.3334 5.61232 18.2456 5.40036 18.0893 5.24408C17.9331 5.0878 17.7211 5 17.5001 5H15.2959C15.1159 4.3984 14.7466 3.87092 14.2429 3.49589C13.7393 3.12087 13.128 2.91832 12.5001 2.91832C11.8721 2.91832 11.2609 3.12087 10.7572 3.49589C10.2536 3.87092 9.88428 4.3984 9.70425 5H2.50008C2.27907 5 2.06711 5.0878 1.91083 5.24408C1.75455 5.40036 1.66675 5.61232 1.66675 5.83334C1.66675 6.05435 1.75455 6.26631 1.91083 6.42259C2.06711 6.57887 2.27907 6.66667 2.50008 6.66667H9.70425C9.88398 7.26858 10.2531 7.79643 10.7568 8.17176C11.2605 8.5471 11.8719 8.7499 12.5001 8.75ZM2.50008 13.3333C2.27907 13.3333 2.06711 13.4211 1.91083 13.5774C1.75455 13.7337 1.66675 13.9457 1.66675 14.1667C1.66675 14.3877 1.75455 14.5996 1.91083 14.7559C2.06711 14.9122 2.27907 15 2.50008 15H4.28758C4.46761 15.6016 4.83689 16.1291 5.34057 16.5041C5.84424 16.8791 6.45545 17.0817 7.08341 17.0817C7.71137 17.0817 8.32258 16.8791 8.82626 16.5041C9.32994 16.1291 9.69922 15.6016 9.87925 15H17.5001C17.7211 15 17.9331 14.9122 18.0893 14.7559C18.2456 14.5996 18.3334 14.3877 18.3334 14.1667C18.3334 13.9457 18.2456 13.7337 18.0893 13.5774C17.9331 13.4211 17.7211 13.3333 17.5001 13.3333H9.87925C9.69922 12.7317 9.32994 12.2043 8.82626 11.8292C8.32258 11.4542 7.71137 11.2517 7.08341 11.2517C6.45545 11.2517 5.84424 11.4542 5.34057 11.8292C4.83689 12.2043 4.46761 12.7317 4.28758 13.3333H2.50008Z"
                  fill="#727171"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          {balanceData.map((data) => (
            <div key={data.id} className="flex flex-col">
              <div className="flex gap-3">
                <div className="pt-2">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <circle
                      cx="12.5"
                      cy="12.5"
                      r="12.5"
                      fill="url(#pattern0_165_663)"
                    />
                    <defs>
                      <pattern
                        id="pattern0_165_663"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0_165_663"
                          transform="translate(-0.16313 -0.177756) scale(0.00374906)"
                        />
                      </pattern>
                      <image
                        id="image0_165_663"
                        width="360"
                        height="360"
                        xlinkHref="data:image/jpeg;base64,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"
                      />
                    </defs>
                  </svg>
                </div>
                <div className="flex grow justify-between text-white">
                  <div className="flex flex-col gap-3.5 text-[#969FAA]">
                    <div className="flex flex-col gap1.5">
                      <div className="text-[22px] text-white font-bold">
                        {data.name}
                      </div>
                      <div>{data.coin_type}</div>
                    </div>
                    <div>
                      <div>Average cost</div>
                      <div>Today's PNL</div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>{data.total_price}</div>
                    <div className="flex flex-col gap-1.5">
                      <div>{data.average_cost}</div>
                      <div className="text-[#07CCA8]">{data.todays_pnl}</div>
                    </div>
                  </div>
                </div>
              </div>
              {data.id < balanceData.length && (
                <div className="h-[1px] w-full bg-[#6C6C6C] my-4"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spot;
