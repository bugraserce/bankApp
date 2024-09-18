"use client";
import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

const TotalBalanceBox = ({accounts = [] , totalBanks, totalCurrentBalance} : TotalBalanceBoxProps) => {
  return (
   <section className='flex rounded-lg p-6 bg-white shadow-lg'>
        <div className='flex justify-center mr-8'>
            {/* DonutChart */}
            <DoughnutChart accounts={accounts} />
        </div>

        <div className='flex flex-col items-center gap-6'>
            <h2 className='text-2xl font-semibold text-gray-800'>Bank Accounts: {totalBanks}</h2>

            <div className='flex gap-2 text-center'>
                <p className='text-lg text-gray-600'>Total Current Balance :</p>
               <div>
               <AnimatedCounter amount={totalCurrentBalance} />
               </div> 
            </div>
        </div>
   </section>
  )
}

export default TotalBalanceBox;
