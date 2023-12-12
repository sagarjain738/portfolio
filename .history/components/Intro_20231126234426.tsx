import Image from "next/image";
import React from "react";
import Me from "/public/me.jpg";

type IntroProps = {};

const Intro: React.FC<IntroProps> = () => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div>
          <Image
            src={Me}
            alt="Sagar Jain"
            width={192}
            height={192}
            quality={95}
            priority={true}
            className="h-24 w-24 object-cover border-[0.35rem] border-white rounded-full shadow-xl"
          />
          <span></span>
        </div>
      </div>
    </section>
  );
};
export default Intro;
