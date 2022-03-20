import React from "react";
import Link from "next/link";

const RegistrationFlow = ({ step1, step2, step3, step4, ChooseSchool, SelectPlan, PlanSummary, Receipt }) => {
  return (
    <div className="mt-4 flex flex-row justify-center">
      {(step1 && !ChooseSchool) ? (
        <Link href="/register/choose-school">
          <h4 className="m-2 p-2 text-cream font-bold hover:cursor-pointer">Choose School</h4>
        </Link>
      ) : ChooseSchool ? (
        <h4 className="m-2 p-2 text-orange-dark font-bold hover:cursor-pointer">Choose School</h4>
      ) :(
        <h4 className="text-gray m-2 p-2 font-bold">Choose School</h4>
      )}
      {(step2 && !SelectPlan) ? (
        <Link href="/register/select-plan">
          <h4 className="m-2 p-2 text-cream font-bold hover:cursor-pointer">Select Plan</h4>
        </Link>
      ) : SelectPlan ? (
        <h4 className="m-2 p-2 text-orange-dark font-bold hover:cursor-pointer">Select Plan</h4>
      ) : (
        <h4 className="text-gray m-2 p-2 font-bold">Select Plan</h4>
      )}
      {(step3 && !PlanSummary) ? (
        <Link href="/register/plan-summary">
          <h4 className="m-2 p-2 text-cream font-bold hover:cursor-pointer">Plan Summary</h4>
        </Link>
      ) : PlanSummary ? (
        <h4 className="m-2 p-2 text-orange-dark font-bold hover:cursor-pointer">Plan Summary</h4>
      ) : (
        <h4 className="text-gray m-2 p-2 font-bold">Plan Summary</h4>
      )}
      {(step4 && !Receipt) ? (
        <h4 className="m-2 p-2 text-cream font-bold hover:cursor-pointer">Receipt</h4>
      ) : Receipt ? (
        <h4 className="m-2 p-2 text-orange-dark font-bold hover:cursor-pointer">Receipt</h4>
      ) : (
        <h4 className="text-gray m-2 p-2 font-bold">Receipt</h4>
      )}
    </div>
  );
};

export default RegistrationFlow;
