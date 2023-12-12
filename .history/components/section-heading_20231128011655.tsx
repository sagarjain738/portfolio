import React from "react";

type Props = {
  title: string;
};

function Heading({ title }: Props) {
  return <h2 className="text-3xl font-medium capitalize mb-8">{title}</h2>;
}

export default Heading;
