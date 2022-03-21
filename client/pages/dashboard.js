import React, { useEffect} from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const subs = useSelector(state => state.subscription);
    useEffect(() => {
      console.log("DATA", subs)
    }, [subs])
    return (
        <div className="m-20">
        <h1 className="mb-8 text-center">Current Plan</h1>
        <div className="flex flex-col items-center">
          <div className="m-8 max-w-sm overflow-hidden rounded shadow-lg">
            <img
              className=""
              src="https://robohash.org/2?size=200x200"
              alt="Mountain"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">20lbs Plan</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="bg-gray-200 text-gray-700 mr-2 mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
                #photography
              </span>
              <span className="bg-gray-200 text-gray-700 mr-2 mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
                #travel
              </span>
              <span className="bg-gray-200 text-gray-700 mr-2 mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
                #winter
              </span>
            </div>
          </div>
          <h1 className="text-2xl">
            <b>Submarket:</b> Harvard University
          </h1>
        </div>
      </div>
    )
}

export default Dashboard;
