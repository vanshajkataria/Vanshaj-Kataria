import Image from "next/image";
import React from "react";

export default function Photo() {
  return (
    <>
        <Image src="/vanshaj.webp" alt="..." width={250} height={250} className="h-full w-full object-cover object-center aspect-video lg:aspect-auto" />
    </>
  );
}
