import React, { useState } from 'react';

import ManageOverview from '../../components/Manage/Overview';
import ManageSpot from '../../components/Manage/Spot';
import ManageFunding from '../../components/Manage/Funding';
import ManageEarn from '../../components/Manage/Earn';

const componentMap: { [key: string]: React.FC } = {
  ManageOverview,
  ManageSpot,
  ManageFunding,
  ManageEarn,
};

const Manage = () => {
  const [currentDynamicComp, setCurrentDynamicComp] =
    useState('ManageOverview');

  const CurrentComponent = componentMap[currentDynamicComp];

  return (
    <div className="min-h-screen px-4">
      <nav>
        <ul className="flex justify-between text-xl py-6">
          <li
            className={`${currentDynamicComp === 'ManageOverview' && 'font-bold'}`}
            onClick={() => {
              setCurrentDynamicComp('ManageOverview');
            }}
          >
            Overview
          </li>
          <li
            className={`${currentDynamicComp === 'ManageSpot' && 'font-bold'}`}
            onClick={() => {
              setCurrentDynamicComp('ManageSpot');
            }}
          >
            Spot
          </li>
          <li
            className={`${currentDynamicComp === 'ManageFunding' && 'font-bold'}`}
            onClick={() => {
              setCurrentDynamicComp('ManageFunding');
            }}
          >
            Funding
          </li>
          <li
            className={`${currentDynamicComp === 'ManageEarn' && 'font-bold'}`}
            onClick={() => {
              setCurrentDynamicComp('ManageEarn');
            }}
          >
            Earn
          </li>
        </ul>
      </nav>

      <div>
        <CurrentComponent />
      </div>
    </div>
  );
};

export default Manage;
