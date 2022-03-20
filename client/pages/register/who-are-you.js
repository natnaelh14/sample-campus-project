import React from "react";
import Button from "../../components/Button";
import { useRouter } from "next/router";

const WhoAreYou = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/register/user-info");
  };
  return (
    <div className="m-20 flex justify-center">
      <div className="box-content flex h-[400px] w-[400px] flex-col border-4 p-4">
        <Button
          className="m-4 rounded-lg bg-orange-primary py-2 px-4 text-white hover:scale-110"
          onClick={handleClick}
        >
          I am a student
        </Button>
        <Button
          className="m-4 rounded-lg bg-orange-primary py-2 px-4 text-white hover:scale-110"
          onClick={handleClick}
        >
          I am a parent
        </Button>
        <Button
          className="m-4 rounded-lg bg-orange-primary py-2 px-4 text-white hover:scale-110"
          onClick={handleClick}
        >
          I am a faculty
        </Button>
      </div>
    </div>
  );
};

export default WhoAreYou;
