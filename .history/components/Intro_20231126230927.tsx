import Image from "next/image";
import React from "react";
import Me from "@/public/me";

type IntroProps = {};

const Intro: React.FC<IntroProps> = () => {
  return (
    <section>
      <div className="flex justify-center items-center">
        <div>
          <Image src={Me} alt="Sagar Jain" />
        </div>
      </div>
    </section>
  );
};
export default Intro;
