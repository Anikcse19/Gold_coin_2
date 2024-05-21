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
    <div>
      <nav>
        <ul className="flex justify-between font-bold text-xl px-3 py-6">
          <li
            onClick={() => {
              setCurrentDynamicComp('ManageOverview');
            }}
          >
            Overview
          </li>
          <li
            onClick={() => {
              setCurrentDynamicComp('ManageSpot');
            }}
          >
            Spot
          </li>
          <li
            onClick={() => {
              setCurrentDynamicComp('ManageFunding');
            }}
          >
            Funding
          </li>
          <li
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
