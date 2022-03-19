import React from "react";

const SelectPlan = () => {
  return (
    <div className="m-20">
      <h1 className="mb-8 text-center">Select Plan</h1>
      <div className="flex flex-row justify-center">
        <div class="max-w-sm overflow-hidden rounded shadow-lg m-8">
          <img
            class="w-full"
            src="https://robohash.org/7?size=200x200"
            alt="Mountain"
          />
          <div class="px-6 py-4">
            <div class="mb-2 text-xl font-bold">10lbs Plan</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="bg-gray-200 text-gray-700 mr-2 mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
              #photography
            </span>
            <span class="bg-gray-200 text-gray-700 mr-2 mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
              #travel
            </span>
            <span class="bg-gray-200 text-gray-700 mr-2 mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
              #winter
            </span>
          </div>
        </div>
        <div class="max-w-sm overflow-hidden rounded shadow-lg m-8">
          <img
            class="w-full"
            src="https://robohash.org/2?size=200x200"
            alt="Mountain"
          />
          <div class="px-6 py-4">
            <div class="mb-2 text-xl font-bold">20lbs Plan</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, Nonea! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="bg-gray-200 text-gray-700 mr-2 mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
              #photography
            </span>
            <span class="bg-gray-200 text-gray-700 mr-2 mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
              #travel
            </span>
            <span class="bg-gray-200 text-gray-700 mr-2 mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
              #winter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPlan;
