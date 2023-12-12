import Image from "next/image";
import React from "react";
import Me from "@/public/me.JPG";

type IntroProps = {};

const Intro: React.FC<IntroProps> = () => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div>
          <Image src={Me} alt="Sagar Jain" width={500} height={500} />
        </div>
      </div>
    </section>
  );
};
export default Intro;
