import React, { useState } from 'react';

const Manage = () => {
  const [currentDynamicComp, setCurrentDynamicComp] = useState('Overview');

  return (
    <div>
      <nav>
        <ul className="flex justify-between font-bold text-xl px-3 py-6">
          <li
            onClick={() => {
              setCurrentDynamicComp('Overview');
            }}
          >
            Overview
          </li>
          <li
            onClick={() => {
              setCurrentDynamicComp('Spot');
            }}
          >
            Spot
          </li>
          <li
            onClick={() => {
              setCurrentDynamicComp('Funding');
            }}
          >
            Funding
          </li>
          <li
            onClick={() => {
              setCurrentDynamicComp('Earn');
            }}
          >
            Earn
          </li>
        </ul>
      </nav>

      <div>{currentDynamicComp}</div>
    </div>
  );
};

export default Manage;
