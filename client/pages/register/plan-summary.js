import React from "react";
import Button from "../../components/Button";
import { useRouter } from "next/router";
import RegistrationFlow from "../../components/RegistrationFlow";

const PlanSummary = () => {
  const router = useRouter();
  const handleSubmit = () => {
   router.push("/register/receipt");
  };
  return (
    <div className="m-2">
      <RegistrationFlow step1 step2 step3 />
      <h1 className="mb-8 text-center">Plan Summary</h1>
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
        <Button className="py-2 px-4 m-4 bg-orange-primary rounded-lg text-white" onClick={handleSubmit}>Pay Now</Button>
      </div>
    </div>
  );
};

export default PlanSummary;
