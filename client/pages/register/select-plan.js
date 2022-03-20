import React from "react";
import { useRouter } from "next/router";
import RegistrationFlow from "../../components/RegistrationFlow";

const SelectPlan = () => {
  const router = useRouter();
  const handleSubmit = () => {
   router.push("/register/plan-summary");
  };
  return (
    <div className="m-2">
      <RegistrationFlow step1 step2 SelectPlan />
      <h1 className="mb-8 text-center">Select Plan</h1>
      <div className="flex flex-row justify-center">
        <div className="max-w-sm overflow-hidden rounded shadow-lg m-8 hover:scale-110" onClick={handleSubmit}>
          <img
            className="w-full hover:cursor-pointer"
            src="https://robohash.org/7?size=200x200"
            alt="Mountain"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">10lbs Plan</div>
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
        <div className="max-w-sm overflow-hidden rounded shadow-lg m-8 hover:scale-110" onClick={handleSubmit}>
          <img
            className="w-full hover:cursor-pointer"
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
      </div>
    </div>
  );
};

export default SelectPlan;
