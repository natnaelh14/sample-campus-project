import React from "react";
import { useRouter } from "next/router";
import RegistrationFlow from "../../components/RegistrationFlow";

const ChooseSchool = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/register/select-plan");
  };
  return (
    <div className="m-2">
      <RegistrationFlow step1 ChooseSchool />
      <h1 className="mb-8 text-center">Choose School</h1>
      <div className="items flex flex-wrap">
        <div
          class="flex w-6/12 flex-col items-center p-6 hover:scale-110 hover:cursor-pointer"
          onClick={handleClick}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1920px-Harvard_shield_wreath.svg.png"
            alt="..."
            class="h-[250px] w-[250px] rounded-full border-none align-middle shadow-lg"
          />
          <h1 className="mt-6 text-center text-4xl">Harvard University</h1>
        </div>
        <div
          class="flex w-6/12 flex-col items-center p-6 hover:scale-110 hover:cursor-pointer"
          onClick={handleClick}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/1920px-MIT_Seal.svg.png"
            alt="..."
            class="h-[250px] w-[250px] rounded-full border-none align-middle shadow-lg"
          />
          <h1 className="mt-6 text-center text-4xl">
            Massachusetts Institute of Technology
          </h1>
        </div>
        <div
          class="flex w-6/12 flex-col items-center p-6 hover:scale-110 hover:cursor-pointer"
          onClick={handleClick}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Tufts_official_seal.svg/1920px-Tufts_official_seal.svg.png"
            alt="..."
            class="h-[250px] w-[250px] rounded-full border-none align-middle shadow-lg"
          />
          <h1 className="mt-6 text-center text-4xl">Tufts University</h1>
        </div>
        <div
          class="flex w-6/12 flex-col items-center p-6 hover:scale-110 hover:cursor-pointer"
          onClick={handleClick}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Northeastern_University_seal.svg/600px-Northeastern_University_seal.svg.png?20190605165937"
            alt="..."
            class="h-[250px] w-[250px] rounded-full border-none align-middle shadow-lg"
          />
          <h1 className="mt-6 text-center text-4xl">Northeastern University</h1>
        </div>
      </div>
    </div>
  );
};

export default ChooseSchool;
