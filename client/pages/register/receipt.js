import React from 'react';
import Button from "../../components/Button";
import { useRouter } from "next/router";
import RegistrationFlow from "../../components/RegistrationFlow";

const Receipt = () => {
    const router = useRouter();
    const handleSubmit = () => {
     router.push("/dashboard");
    };
    return (
        <div className="flex items-center flex-col mt-2">
            <RegistrationFlow step4 Receipt/>
            <h1 className="text-3xl">Thank You for purchasing plan.</h1>
            <Button className="py-2 px-4 m-4 bg-orange-primary rounded-lg text-white hover:scale-110" onClick={handleSubmit}>Go to Dashboard</Button>
        </div>
    )
}

export default Receipt;
