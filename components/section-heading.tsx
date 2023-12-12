import React from "react";

type Props = {
  title: string;
};

function SeactionHeading({ title }: Props) {
  return (
    <h2 className="text-3xl font-medium capitalize text-center mb-8">
      {title}
    </h2>
  );
}

export default SeactionHeading;
