import React from "react";
import Button from "../../components/Button";

const WhoAreYou = () => {
  return (
    <div className="m-20 flex justify-center">
      <div className="flex flex-col box-content h-[400px] w-[400px] border-4 p-4">
        <Button className="p-4 m-4 bg-orange-primary">I am a student</Button>
        <Button className="p-4 m-4 bg-orange-primary">I am a parent</Button>
        <Button className="p-4 m-4 bg-orange-primary">I am a faculty</Button>
      </div>
    </div>
  );
};

export default WhoAreYou;
