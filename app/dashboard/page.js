"use client";
import React from 'react';
import DefaultLayout from '../../components/Dashboard/layout/DefaultLayout';
import CardOne from '../../components/Dashboard/components/CardOne';
import CardTwo from '../../components/Dashboard/components/CardTwo';
import CardThree from '../../components/Dashboard/components/CardThree'
import CardFour from '../../components/Dashboard/components/CardFour';
import CardFive from '@/components/Dashboard/components/CardFive';
import DataStats from '@/components/Dashboard/components/DataStats';
import DashboardCases from '@/components/Dashboard/components/RecentCases';

const Analytics = () => {
  return (
    <DefaultLayout>
      <div className='grid grid-cols-1 pb-8  gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
        <DataStats />
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
        <CardFive />
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5'>
        <DashboardCases />
        <div className='col-span-12 xl:col-span-8'>

        </div>
      </div>
    </DefaultLayout>
  )
}

export default Analytics;
