import React, { useState } from 'react';

import ManageEarn from '../../components/Manage/Earn';
import ManageFunding from '../../components/Manage/Funding';
import ManageOverview from '../../components/Manage/Overview';
import ManageSpot from '../../components/Manage/Spot';
import MainLayout from '../../layouts/MainLayout';

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
    <MainLayout>
      <div className="min-h-screen px-4">
        <nav className="border-b border-gray-600 mb-2">
          <ul className="flex justify-between text-xl py-2">
            <li
              className={`${currentDynamicComp === 'ManageOverview' && 'font-bold'} cursor-pointer`}
              onClick={() => {
                setCurrentDynamicComp('ManageOverview');
              }}
            >
              Overview
            </li>
            <li
              className={`${currentDynamicComp === 'ManageSpot' && 'font-bold'}  cursor-pointer`}
              onClick={() => {
                setCurrentDynamicComp('ManageSpot');
              }}
            >
              Spot
            </li>
            <li
              className={`${currentDynamicComp === 'ManageFunding' && 'font-bold'}  cursor-pointer`}
              onClick={() => {
                setCurrentDynamicComp('ManageFunding');
              }}
            >
              Funding
            </li>
            <li
              className={`${currentDynamicComp === 'ManageEarn' && 'font-bold'}  cursor-pointer`}
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
    </MainLayout>
  );
};

export default Manage;
