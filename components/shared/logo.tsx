import React from "react";
import Image from "next/image";

export const Logo = (props: {}) => {
  return (
    <>
      <Image
        src="/_static/logo-icon.png"
        width={500}
        height={300}
        alt="theta tech logo"
        className="h-8 w-10"
      />
    </>
  );
};
