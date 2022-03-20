import React from "react";
import Link from "next/link";

const RegistrationFlow = ({ step1, step2, step3, step4 }) => {
  return (
    <div className="mt-4 flex flex-row justify-center">
      {step1 ? (
        <Link href="/register/choose-school">
          <h4 className="m-2 p-2 text-orange-primary font-bold">Choose School</h4>
        </Link>
      ) : (
        <h4 className="text-black m-2 p-2">Choose School</h4>
      )}
      {step2 ? (
        <Link href="/register/select-plan">
          <h4 className="m-2 p-2 text-orange-primary font-bold">Select Plan</h4>
        </Link>
      ) : (
        <h4 className="text-black m-2 p-2">Select Plan</h4>
      )}
      {step3 ? (
        <Link href="/register/plan-summary">
          <h4 className="m-2 p-2 text-orange-primary font-bold">Plan Summary</h4>
        </Link>
      ) : (
        <h4 className="text-black m-2 p-2">Plan Summary</h4>
      )}
      {step4 ? (
        <h4 className="m-2 p-2 text-orange-primary p-2 font-bold">Receipt</h4>
      ) : (
        <h4 className="text-black m-2 p-2">Receipt</h4>
      )}
    </div>
  );
};

export default RegistrationFlow;
