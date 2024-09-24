import Image from "next/image";
import React from "react";

const Slide1 = () => {
  return (
    <div
    //   style={{ width: "100%", height: "100%", position: "relative" }}
    //   className="container flex items-center justify-center"
    >
      <div className="bg-zinc-600 rounded-lg    p-4 shadow-lg flex items-center justify-center">
        <Image
          width={1600}
          height={900}
          sizes="100vw"
          alt="background"
          src="/fondoBlanco.png"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slide1;
