import React, { useContext } from "react";
import { useRouter } from "next/router";
import RegistrationFlow from "../../components/RegistrationFlow";
import { SubscriptionContext } from "../../context/SubscriptionContext";

const ChooseSchool = () => {
  const router = useRouter();
  const { setSubMarket } = useContext(SubscriptionContext);
  const handleClick = (e) => {
    e.preventDefault();
    setSubMarket(e.target.value);
    router.push("/register/select-plan");
  };
  return (
    <div className="m-2">
      <RegistrationFlow step1 ChooseSchool />
      <h1 className="mb-8 text-center">Choose School</h1>
      <div className="items flex flex-wrap">
        <div
          className="flex w-6/12 flex-col items-center p-6 hover:scale-110 hover:cursor-pointer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1920px-Harvard_shield_wreath.svg.png"
            alt="..."
            className="h-[250px] w-[250px] rounded-full border-none align-middle shadow-lg"
          />
          <button className="mt-6 text-4xl" value="Harvard University" onClick={handleClick} >Harvard University</button>
        </div>
        <div
          className="flex w-6/12 flex-col items-center p-6 hover:scale-110 hover:cursor-pointer"
          value="Massachusetts Institute of Technology"
          onClick={handleClick}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/1920px-MIT_Seal.svg.png"
            alt="..."
            className="h-[250px] w-[250px] rounded-full border-none align-middle shadow-lg"
          />
          <button className="mt-6 text-4xl" value="Massachusetts Institute of Technology" onClick={handleClick} >Massachusetts Institute of Technology</button>
        </div>
        <div
          className="flex w-6/12 flex-col items-center p-6 hover:scale-110 hover:cursor-pointer"
          onClick={handleClick}
          value="Tufts University"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Tufts_official_seal.svg/1920px-Tufts_official_seal.svg.png"
            alt="..."
            className="h-[250px] w-[250px] rounded-full border-none align-middle shadow-lg"
          />
          <button className="mt-6 text-4xl" value="Tufts University" onClick={handleClick} >Tufts University</button>
        </div>
        <div
          className="flex w-6/12 flex-col items-center p-6 hover:scale-110 hover:cursor-pointer"
          onClick={handleClick}
          value="Northeastern University"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Northeastern_University_seal.svg/600px-Northeastern_University_seal.svg.png?20190605165937"
            alt="..."
            className="h-[250px] w-[250px] rounded-full border-none align-middle shadow-lg"
          />
          <button className="mt-6 text-4xl" value="Northeastern University" onClick={handleClick} >Northeastern University</button>
        </div>
      </div>
    </div>
  );
};

export default ChooseSchool;
