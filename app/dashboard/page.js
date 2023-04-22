"use client";
import React from 'react';
import DefaultLayout from '../../components/Dashboard/layout/DefaultLayout';
import CardOne from '../../components/Dashboard/components/CardOne';
import CardTwo from '../../components/Dashboard/components/CardTwo';
import CardThree from '../../components/Dashboard/components/CardThree'
import CardFour from '../../components/Dashboard/components/CardFour';
import ChatCard from '../../components/Dashboard/components/ChatCard';
import TableOne from '../../components/Dashboard/components/TableOne'
import ChartOne from '../../components/Dashboard/components/ChartOne';
import ChartTwo from '../../components/Dashboard/components/ChartTwo';
import ChartThree from '../../components/Dashboard/components/ChartThree';
import MapOne from '../../components/Dashboard/components/MapOne'
import CardFive from '@/components/Dashboard/components/CardFive';

const Analytics = () => {
  return (
    <DefaultLayout>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
        <CardFive/>
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>

      <div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5'>
        
        {/* <ChartOne /> */}
        {/* <ChartTwo /> */}
        <ChartThree />
        {/* <MapOne /> */}
        <div className='col-span-12 xl:col-span-8'>
          <TableOne />
        </div>
        <ChatCard />
      </div>
    </DefaultLayout>
  )
}

export default Analytics;
