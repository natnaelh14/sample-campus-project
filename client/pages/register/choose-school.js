import React from "react";

const ChooseSchool = () => {
  return (
    <div className="m-20">
      <h1 className="text-center mb-8">Choose School</h1>
      <div className="flex flex-wrap items">
        <div class="w-6/12 p-6 flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Harvard_shield_wreath.svg/1920px-Harvard_shield_wreath.svg.png"
            alt="..."
            class="h-[250px] w-[250px] rounded-full border-none align-middle shadow-lg"
          />
          <h1 className="text-4xl text-center mt-6">Harvard University</h1>
        </div>
        <div class="w-6/12 p-6 flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/4/44/MIT_Seal.svg/1920px-MIT_Seal.svg.png"
            alt="..."
            class="h-[250px] w-[250px] rounded-full border-none align-middle shadow-lg"
          />
          <h1 className="text-4xl text-center mt-6">Massachusetts Institute of Technology</h1>
        </div>
        <div class="w-6/12 p-6 flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Tufts_official_seal.svg/1920px-Tufts_official_seal.svg.png"
            alt="..."
            class="h-[250px] w-[250px] rounded-full border-none align-middle shadow-lg"
          />
          <h1 className="text-4xl text-center mt-6">Tufts University</h1>
        </div>
        <div class="w-6/12 p-6 flex flex-col items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/b/bd/Northeastern_University_seal.svg/600px-Northeastern_University_seal.svg.png?20190605165937"
            alt="..."
            class="h-[250px] w-[250px] rounded-full border-none align-middle shadow-lg"
          />
          <h1 className="text-4xl text-center mt-6">Northeastern University</h1>
        </div>
      </div>
    </div>
  );
};

export default ChooseSchool;
