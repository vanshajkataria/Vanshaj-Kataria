import React from "react";
import ExperienceDisclosure from "@/components/LowLevelComponents/experienceDisclosure";

export default function Experience() {
  return (
    <>
      <div className="w-full">
        <div className="mb-4">
          <h1 className="text-2xl xl:text-3xl 2xl:text-4xl font-black text-center">
            Experiences
          </h1>
        </div>
        <div>
          <ExperienceDisclosure />
        </div>
      </div>
    </>
  );
}
