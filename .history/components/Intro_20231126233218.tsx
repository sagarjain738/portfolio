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
            className="h-24 w-24 object-cover border-[0.35rem] border-white rounded-full mt-24 shadow-xl"
          />
          <span>
            Hi, I'm Sagar! A software engineer and a passionate learner who is
            always eager to learn new things. Currently working as
            <p
              className="text-lg font-bold text-gray-700 dark:text-gray-200 tracking-wide
            md:tracking-wider lg:tracking-widest xl:tracking-widest 2xl:tracking
            2xl:tracking-widest"
            >
              Hi, I'm Sagar
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};
export default Intro;
